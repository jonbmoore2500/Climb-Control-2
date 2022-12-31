class CreateProblems < ActiveRecord::Migration[6.1]
  def change
    create_table :problems do |t|
      t.integer :difficulty
      t.date :date_set
      t.date :date_to_remove
      t.string :climb_type
      t.integer :setter_id
    end
  end
end
