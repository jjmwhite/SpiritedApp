class Api::DistilleriesController < ApplicationController

  def index
    @distilleries = Distillery.all.includes(:region, :bottles)
  end

  def show
    @distillery = Distillery.includes(:region, :bottles).find_by(id: params[:id])
  end


end