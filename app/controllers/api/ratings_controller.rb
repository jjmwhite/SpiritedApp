class Api::RatingsController < ApplicationController

  def index
    user_id = params[:user_id] || current_user.index
    if (params[:user_id])
      @ratings = Rating.includes(:user, :bottle).where(user_id: params[:user_id])
    else
      @ratings = Rating.includes(:user, :bottle).where(bottle_id: params[:bottle_id])
    end
  end

  def create
    @rating = Bottle.find(params[:bottle_id]).ratings.new(rating_params)
    @rating.user_id = current_user.id 
    @rating.date = Date.today.strftime("%b %d,%Y")

    if @rating.save
      render :show
    else
      render json: @rating.errors.full_messages, status: 422
    end
  end

  def update
    @rating = Rating.find(params[:id])

    if @rating.user_id != current_user.id
      render json: ['You can only edit your own ratings'], status: 403
    else
      if @rating.update!(rating_params)
        render :show
      else
        render json: @rating.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    rating = Rating.find_by(id: params[:id])

    if rating
      rating.destroy
      render json: ['Rating successfully removed']
    else
      render json: ['You can only delete your own reviews'], status: 403
    end
  end

  private

  def rating_params
    params.require(:rating).permit(:user_id, :bottle_id, :rating, :review, :date)
  end


end