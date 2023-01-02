class Problem < ActiveRecord::Base
    has_many :climbs 
    belongs_to :setter 
end