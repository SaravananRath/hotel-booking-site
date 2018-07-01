require 'rails_admin/config/actions'
require 'rails_admin/config/actions/base'

module RailsAdminHotelsMapper
end

module RailsAdmin
  module Config
    module Actions
      class HotelsMapper < RailsAdmin::Config::Actions::Base

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
            if params[:deleteall] == "true"
              Allhotel.delete_all()
            end
            if params[:start] == "true"
              Adoni.all.each do |hotel|
                if hotel.hotelbeds.present?
                  if !hotel.hotelbeds.include? "."
                    hotelbedIds = hotel.hotelbeds.split(",");
                    hotelbedIds.each do |hbid|
                      hotelbeds = Hotel.where(:code => hbid)
                      if hotelbeds.count == 1
                        hotel.update_attribute(:hotelbeds, hbid)
                        break
                        # hb = hotelbeds.first

                        # # Mysql Encoding Issues Solving
                        # hbname = hb.name
                        # hotelname = hotel.name
                        # if !hbname.gsub(/[[:print:]]/, '').nil?
                        #   if !hotel.name.gsub(/[[:print:]]/, '').nil?
                        #     hbname = hotel.name
                        #   else
                        #     hotelname = hotel.name.encode("Windows-1252", invalid: :replace, undef: :replace)
                        #     hbname = hotelname
                        #   end
                        # end
                        # if !hotelname.gsub(/[[:print:]]/, '').nil?
                        #   hotelname = hbname
                        # end
                        # begin
                        #   Allhotel.create(:hotelbeds => hb.code, :adonis => hotel.hotelcode, 
                        #     :hbname => hbname, :adname => hotelname, :city => hb.destination.name,
                        #     :hbcitycode => hb.destination.code, :adcitycode => hotel.citycode)
                        # rescue Exception => e      # only for debug purposes, don't rescue Exception in real code
                        #   logger.debug "#{e.class}"
                        # end
                      elsif hotelbeds.count == 0
                        hotel.update_attribute(:hotelbeds, nil)
                        # No Hotelbeds Match but code is given
                        # Code goes here...
                      end
                    end
                  else
                    hotelbedIds = hotel.hotelbeds.split(".");
                    hotelbedIds.each do |hbid|
                      hotelbeds = Hotel.where(:code => hbid)
                      if hotelbeds.count == 1
                        hotel.update_attribute(:hotelbeds, hbid)
                        break
                      end
                    end
                  end
                else
                  matchingHotel = hotel.findMatch()
                  unless matchingHotel.nil?
                    hotel.update_attribute(:hotelbeds, matchingHotel.code)
                    # begin
                    #   Allhotel.create(:hotelbeds => matchingHotel.code, :adonis => hotel.hotelcode, 
                    #     :hbname => matchingHotel.name, :adname => hotel.name, :city => matchingHotel.destination.name,
                    #     :hbcitycode => matchingHotel.destination.code, :adcitycode => hotel.citycode)
                    # rescue Exception => e      # only for debug purposes, don't rescue Exception in real code
                    #   logger.debug "#{e.class}"
                    # end
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