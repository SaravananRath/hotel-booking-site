require Rails.root.join('app/rails_admin/collection', 'rails_admin_hotels_mapper.rb')
require Rails.root.join('app/rails_admin/collection', 'rails_admin_destination_mapper.rb')

RailsAdmin.config do |config|

  ### Popular gems integration

  ## == Devise ==
  config.authenticate_with do
    warden.authenticate! scope: :user
  end
  config.current_user_method(&:current_user)

  ## == Cancan ==
  config.authorize_with :cancan

  ## == Pundit ==
  # config.authorize_with :pundit

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  ## == Gravatar integration ==
  ## To disable Gravatar integration in Navigation Bar set to false
  # config.show_gravatar = true

  module RailsAdmin
    module Config
      module Actions
        class HotelsMapper < RailsAdmin::Config::Actions::Base
          RailsAdmin::Config::Actions.register(self)
        end
        class DestinationMapper < RailsAdmin::Config::Actions::Base
          RailsAdmin::Config::Actions.register(self)
        end
      end
    end
  end

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app
    hotels_mapper do 
      only [Allhotel]
    end
    destination_mapper do 
      only [Adoni]
    end
    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end

  config.model Adoni do
    label "All Hotels"
    navigation_label "Adonis"
    weight 0
  end

  config.model Adonisnationality do
    label "Nationality"
    navigation_label "Adonis"
    weight 0
  end

  config.model Adoniscountry do
    label "Country"
    navigation_label "Adonis"
    weight 0
  end

  config.model Adoniscity do
    label "City"
    navigation_label "Adonis"
    weight 0
  end

  config.model Adonisphoto do
    label "Adonis Photos"
    navigation_label "Adonis"
    weight 1
    list do
      field :adoni
      field :hotelcode
      field :url do 
        label "Photos"
        pretty_value do 
          %{<img style="height:100px" src="#{bindings[:object].url}">}.html_safe
        end
      end
    end
  end

  config.model Hotel do
    label "All Hotels"
    navigation_label "HotelBeds"
    weight 1
  end

  config.model Image do
    label "HotelBeds Photos"
    navigation_label "HotelBeds"
    weight 2
    list do
      field :hotel
      field :path do 
        label "Photos"
        pretty_value do 
          %{<img style="height:100px" src="http://photos.hotelbeds.com/giata/bigger/#{bindings[:object].path}">}.html_safe
        end
      end
    end
  end

  config.model City do
    label "City"
    navigation_label "HotelBeds"
    weight 3
  end

  config.model Zone do
    label "Zone"
    navigation_label "HotelBeds"
    weight 4
  end

  config.model Destination do
    label "Destination"
    navigation_label "HotelBeds"
    weight 5
  end

  config.model Country do
    label "Country"
    navigation_label "HotelBeds"
    weight 6
  end

  config.model Allhotel do
    label "Allhotel"
    navigation_label "Globalbeds"
    weight 0
  end

  config.model Gbsearchcache do
    label "Search cache"
    navigation_label "Globalbeds"
    weight 1
  end

  config.model Gbsearchresult do
    label "Search Results / Supplier"
    navigation_label "Globalbeds"
    weight 2
  end

  config.model CountryStateCity do
    label "Country/State/City"
    navigation_label "Master Data"
    weight 0
  end

end
