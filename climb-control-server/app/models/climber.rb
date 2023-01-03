class Climber < ActiveRecord::Base
    has_many :climbs 
    has_many :problems, through: :climbs 
end