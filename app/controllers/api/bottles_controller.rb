class Api::BottlesController < ApplicationController

  def index
    @bottles = Bottle.all
  end

  def show
    @bottle = Bottle.find_by(id: params[:id])
  end

  def create
    @bottle = Bottle.new(bottle_params)

    if @bottle.save
      render :show
    else
      render json: @bottle.errors.full_messages, status: 422
    end
  end

  def update
    @bottle = Bottle.find_by(id: params[:id])

    if @bottle.save
      render :show
    else
      render json: @bottle.errors.full_messages, status: 422
    end
  end

  def destroy
    bottle = Bottle.find_by(id: params[:id])
    bottle.destroy 
    render json: ['Bottle successfully removed']
  end

end