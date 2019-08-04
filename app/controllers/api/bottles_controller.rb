class Api::BottlesController < ApplicationController

  def index
    @bottles = Bottle.all.includes(:distillery, :region)
  end

  def show
    @bottle = Bottle.includes(:distillery, :region).find_by(id: params[:id])
    if @bottle
      render :show
    else
      render json: ['bottle not found'], status: 404
    end
  end

  def create
    # :Parameters {"bottle"=>{"name"=>"Macallan 15", "description"=>"Macallan 15", "distillery_id"=>"3", "age"=>"15", "release_year"=>"undefined", "price"=>"100" }, 
    # "photo"=>#<ActionDispatch::Http::UploadedFile:0x00007fc3d422afc0 @tempfile=#<Tempfile:/var/folders/lv/n4scx8rs7lxbnbtdf9v6c4380000gn/T/RackMultipart20190804-43836-1fxp7zt.jpg>, @original_filename="macallan_12_by-TWE.jpg", @content_type="image/jpeg", @headers="Content-Disposition: form-data; name=\"bottle[photo]\"; filename=\"macallan_12_by-TWE.jpg\"\r\nContent-Type: image/jpeg\r\n">}, "format"=>:json, "controller"=>"api/bottles", "action"=>"create"} permitted: false>
    
    if params[:bottle][:age] != ''
      params[:bottle][:age]  = params[:bottle][:age] .to_i
    else 
      params[:bottle][:age]  = nil
    end
    
    if params[:bottle][:release_year] != ''
      params[:bottle][:release_year] = params[:bottle][:release_year].to_i
    else 
      params[:bottle][:release_year] = nil
    end

    if params[:bottle][:price] != '' 
      params[:bottle][:price] = params[:bottle][:price].to_f
    end
    
    @bottle = Bottle.new(bottle_params)
    
    if @bottle.save
      render :show
    else
      render json: @bottle.errors.full_messages, status: 422
    end
  end

  def update
    @bottle = Bottle.find_by(id: params[:id])
    
  
    if @bottle.update!(bottle_params)
      render :show
    else
      render json: @bottle.errors.full_messages, status: 422
    end
  end

  def destroy
    # bottle = current_user.bottles.find_by(id: params[:id])

    # if bottle
    bottle.destroy 
    render json: ['Bottle successfully removed']
  end

  private

  def bottle_params
    params.require(:bottle).permit(:name, :description, :distillery_id, :age, :release_year, :price, :photo)
  end

end