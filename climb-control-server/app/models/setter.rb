class Setter < ActiveRecord::Base
    has_many :problems 


    def hardest_problem
        self.problems.order(difficulty: :desc).first
    end

    def easiest_problem
        self.problems.order(difficulty: :asc).first
    end

end