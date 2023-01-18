class Climber < ActiveRecord::Base
    has_many :climbs 
    has_many :problems, through: :climbs 

    def hardest_climb
        self.problems.max_by{|p| p[:difficulty] }
    end

    def average_difficulty
        if self.problems.length == 0 then 
            return nil
        end
        average = self.problems.sum { |p| p[:difficulty] } / self.problems.size
    end

    def favorite_setter
        if self.problems.length == 0 then 
            return nil
        end
        self.problems.group_by{|p| p.setter[:name]}.to_a.max_by{|x| x[1].length}.first
    end

end