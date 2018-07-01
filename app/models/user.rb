class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


    def self.checkEmail(email)
    	isAvailable = User.where(:email => email).count
    	return isAvailable
    end

end
