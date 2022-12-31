class CreateClimbers < ActiveRecord::Migration[6.1]
  def change
    create_table :climbers do |t|
      t.string :name
      t.integer :age
      t.boolean :gym_member
    end
  end
end
