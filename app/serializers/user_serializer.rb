class UserSerializer < ActiveModel::Serializer
  attributes  :id, :username, :password, :password_confirmation, :firstname, :lastname

end
 
