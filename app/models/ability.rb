class Ability
  include CanCan::Ability

  def initialize(user)
    can :access, :rails_admin   # grant access to rails_admin
    can :dashboard, :all
    if user.present?
      can :manage, [Adoni,Hotel,Adonisphoto,Image,Gbsearchcache,Gbsearchresult,Allhotel,Adonisnationality,Adoniscountry,Adoniscity,
        Destination,City,Zone,Country,CountryStateCity]
      can :hotels_mapper, [Allhotel]
      can :desination_mapper, [Adoni]
    end
  end
end
