class SnacksController < ApplicationController
  before_action :authorized, only: [:buy]

  def index
    @snacks = Snack.all
    render json: @snacks
  end

  def buy
    # byebug
    @userSnack = UserSnack.create(user: @user, snack_id: params[:id])
    render json: @userSnack
  end
end
