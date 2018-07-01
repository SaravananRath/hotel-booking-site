require 'rails_admin/config/actions'
require 'rails_admin/config/actions/base'

module RailsAdminDestinationMapper
end

module RailsAdmin
  module Config
    module Actions
      class DestinationMapper < RailsAdmin::Config::Actions::Base

        register_instance_option :link_icon do
          'icon-upload'
        end

        # Its Memeber Function
        register_instance_option :member do
          false
        end

        # Its Collection Function
        register_instance_option :collection do
          true
        end

        register_instance_option :http_methods do
          [:get, :post]
        end

        register_instance_option :controller do
          Proc.new do
            # if params[:deleteall] == "true"
            #   Adoni.update_all("destination_id = ?",nil);
            # end
            if params[:start] == "true"
              @i = 0;
              Adoni.all.each do |hotel|
                destination = Destination.where('lower(name) = ?', hotel.city.downcase).first
                if !destination.nil?
                  hotel.update_attributes(:hbdestination_id => destination.id, :hbdestination_type => "destination")
                  @i += 1
                else
                  des_split = hotel.city.split("-")
                  if !des_split[0].nil?
                    destination = Destination.where('lower(name) = ?', des_split[0].strip.downcase).first
                    if !destination.nil?
                      hotel.update_attributes(:hbdestination_id => destination.id, :hbdestination_type => "destination")
                      @i += 1
                    elsif !des_split[1].nil?
                      zone = Zone.where('lower(name) = ?', des_split[1].strip.downcase).first
                      if !zone.nil?
                        hotel.update_attributes(:hbdestination_id => zone.id, :hbdestination_type => "zone")
                        @i += 1
                      end
                    end
                  end
                end
              end
              Adoni.where(:hbdestination_id => nil).each do |hotel|
                destination = Destination.where('lower(name) LIKE ?', "%#{hotel.city.downcase}%").first
                if !destination.nil?
                  hotel.update_attributes(:hbdestination_id => destination.id, :hbdestination_type => "destination")
                  @i += 1
                else
                  zone = Zone.where('lower(name) LIKE ?', "%#{hotel.city.downcase}%").first
                  if !zone.nil?
                    hotel.update_attributes(:hbdestination_id => zone.id, :hbdestination_type => "zone")
                    @i += 1
                  end
                end
              end
            end
          end
        end
      end
    end
  end
end