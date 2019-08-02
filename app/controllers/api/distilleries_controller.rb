class Api::DistilleriesController < ApplicationController

  def index
    @distilleries = Distillery.all.includes(:region, :bottles)
  end

  def show
    @distillery = Distillery.includes(:bottles).find_by(id: params[:id])
  end


end