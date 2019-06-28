class UsersController < ApplicationController
  before_action :authorized, only: [:persist]

  def show
    @user = User.find(params[:id])
    render json: {user: UserSerializer.new(@user)}
  end

  def login
    # byebug
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      token = encode_token({ user_id: @user.id })
      render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
    else
      render json: { error: "NICE TRY" }
    end
  end

  def persist
    # byebug
    token = encode_token({ user_id: @user.id })
    render json: { user: UserSerializer.new(@user), jwt: token }
  end

end
