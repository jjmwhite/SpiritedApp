class Api::RegionsController < ApplicationController

  def show
    @region = Region.includes(:bottles, :distilleries).find_by(id: params[:id])
  end

end