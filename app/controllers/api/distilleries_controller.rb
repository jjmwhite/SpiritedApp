class DistilleriesController < ApplicationController

  def index
    @distilleries = Distillery.all
  end

  def show
    @distillery = Distillery.includes(:bottles).find_by(id: params[:id])
  end


end