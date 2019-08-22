class Api::DistilleriesController < ApplicationController

  def index
    @distilleries = Distillery.all.includes(:region, :bottles)
  end

  def show
    @distillery = Distillery.with_attached_photo.includes(:region, :bottles).find_by(id: params[:id])
  end


end