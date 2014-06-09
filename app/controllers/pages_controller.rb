class PagesController < ApplicationController
  def show
    respond_to do |format|
      format.html { render params[:slug] }
    end
  end
end
