class RegionsController < ApplicationController

  def show
    @region = Region.includes(:bottles).find_by(id: params[:id])
  end

end