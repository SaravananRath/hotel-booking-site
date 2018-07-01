class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token


  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:type_of_company, :company_name, :region, :country, :state_city_country, :city_district, :title, :first_name, :last_name, :email, :phone_no, :currency, :password])
  end
end
