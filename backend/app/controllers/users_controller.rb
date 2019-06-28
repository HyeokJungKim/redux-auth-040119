class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    render json: {user: UserSerializer.new(@user)}
  end
  
end
