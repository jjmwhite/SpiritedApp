class Api::SearchController < ApplicationController

  def index
    query = search_params[:query].downcase
    @results = Bottle.where("name iLIKE '#{query}%'")
    if @results.length > 0
      render :index
    else
      render json: ['No results found. Create this Bottle?'], status: 404
    end

  end

  private

  def search_params
    params.require(:search).permit(:query)
  end

end

Bottle.where("name LIKE :query_string", query_string: "mac%")