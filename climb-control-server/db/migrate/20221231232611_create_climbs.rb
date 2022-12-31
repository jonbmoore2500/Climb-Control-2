class CreateClimbs < ActiveRecord::Migration[6.1]
  def change
    create_table :climbs do |t|
      t.integer :climber_id
      t.integer :problem_id
    end
  end
end
