class Api::UsersController < ApplicationController

  def show
    @user = User.includes(:ratings, :regions, :rated_bottles).find(current_user.id)
    @bottles = Bottle.with_attached_photo.includes(:distillery).where(:rating_users == @user.id || :user_id == @user.id)
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end

end