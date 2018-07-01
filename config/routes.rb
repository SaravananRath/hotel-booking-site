Rails.application.routes.draw do
  
  root to: "home#index"
 
  # get '*path', to: 'home#index' 
  get 'home/index'
 
  devise_for :users
 
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
 
  #Country/State/City
  get '/region/country' => 'country_state_city#country'
  get '/region/country/state' => 'country_state_city#state'
  get '/region/country/state/city' => 'country_state_city#city'

  # globalbeds LIVE
  get '/hotel-search/autocomplete' => 'hotel#gb_autocomplete'

  # Developed API's
  get '/hotel-beds/api/1.0/hotels/autocomplete' => 'hotel#autocomplete'
  post '/hotel-beds/api/1.0/hotels/search' => 'hotel#search'
  get '/hotel-beds/api/1.0/hotel/:code' => 'hotel#hotel_detail'

  get '/hotel-beds/api/1.0/hotels/bookings' => 'hotel#bookings'
  get '/hotel-beds/api/1.0/hotels/bookings/:reference' => 'hotel#bookings'

  get '/hotels/availability' => 'hotel#availability'
  post '/hotels/checkrates' => 'hotel#checkrates'

  post '/hotels/bookings/create' => 'hotel#bookings'
  put '/hotels/bookings/edit' => 'hotel#bookings'
  delete '/hotels/bookings/delete/:reference' => 'hotel#bookings'

end
