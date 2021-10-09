class User < ApplicationRecord
    validates :username, uniqueness: true
   
    validates_presence_of :username
end
