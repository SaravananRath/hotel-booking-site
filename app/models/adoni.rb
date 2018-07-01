class Adoni < ApplicationRecord

  has_many :adonis_images, :foreign_key => "hotelcode", :class_name => "AdonisImage" 
  has_many :adonisphotos


  # def self.config
  #   url = "http://xml.adonis.com/AdonisServices/SearchHotels"
  #   client_id="6ded8679-02b4-4e32-b803-108feb4d3ca7"
  #   username="global@globalbeds.com"
  #   password="GB852*drk"
  # end

  # def hotels_list
  #   $request
  # end

  def self.mapphotos
    puts "Starting the Mapping Photos...";
    temparray = []
    i = 1;
    noOfHotels = 1;
    Adoni.all.each do |hotel|
      hotel.adonis_images.each do |photo|
        tempjson = {:adoni_id => hotel.id, :url => photo.photo, :hotelcode => hotel.hotelcode}
        temparray.push(tempjson)
      end
      noOfHotels += 1
      if temparray.length > 300
        ap = Adonisphoto.create(temparray)
        puts "Set #{i} Inserted. #{temparray.length} Records. #{noOfHotels} Hotels Processed.";
        i += 1
        temparray = []
      end
    end
    ap = Adonisphoto.create(temparray)
    puts "Last set Inserted.... #{temparray.length} Records. #{noOfHotels} Hotels Processed...DONE";
  end


  def findMatch()
    if self.hbdestination_type == "destination"
      hbhotels = Destination.find(self.hbdestination_id).hotels
    end
    # if self.hbdestination_type == "zone"
    #   hbhotels += Zone.find(self.hbdestination_id).hotels
    # end
    unless hbhotels.nil?
      similarbyname = hbhotels.where("name LIKE ?", "%#{self.name}%").first
      return similarbyname
    end
  end

  def hash_serializable(options = {})
    super(options).merge(hotel_details: {
      id:self.id,
      code:self.hotelcode,
      name:self.name,
      description:"N/A",
      longitude:"N/A",
          latitude: "N/A",
          address: self.adress,
          postal_code: "  N/A",
      email:"N/A",
      license:"N/A",
      website:"N/A",
      s2c:"N/A",
      country:{
        code:self.country,
      },
      city:{
        name:self.city,
      },
      destination:{
        name:self.city,
      },
      zone:{
        name:"N/A",
      },
      category:{
        code:self.categoryname,
      },
      accommodation:{
        code:"N/A",
      },
      hotel_rooms:"N/A",
      images:self.adonis_images,
      provider:"Adonis"
    })
  end

end


# 1) Read Files and Update DB
# 2) Map Images properly