class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by(session_token: session[:session_token])

    if @user 
      login(@user)
      redirect_to "/api/users/#{user.id}."
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    if current_user
      logout
      render {}
    else
      render json: {} status: 404
  end

end