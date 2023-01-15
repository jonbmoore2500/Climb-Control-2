require 'date'

class Problem < ActiveRecord::Base

    has_many :climbs 
    has_many :climbers, through: :climbs
    belongs_to :setter 

    def days_remaining
        (self.date_to_remove - Date.today).to_i
    end

    def number_climbers
        unique_climbers = self.climbers.uniq 
        unique_climbers.length()
    end

end