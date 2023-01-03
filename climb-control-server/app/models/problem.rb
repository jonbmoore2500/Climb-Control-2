class Problem < ActiveRecord::Base
    has_many :climbs 
    has_many :climbers, through: :climbs
    belongs_to :setter 
end