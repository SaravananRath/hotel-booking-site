class HomeController < ApplicationController
  def index
  	@react_component = "routes/routes"
  	render layout: false
  end
end
