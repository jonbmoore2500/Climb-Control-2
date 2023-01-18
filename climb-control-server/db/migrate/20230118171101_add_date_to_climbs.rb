class AddDateToClimbs < ActiveRecord::Migration[6.1]
  def change
    add_column :climbs, :date_climbed, :date 
  end
end
