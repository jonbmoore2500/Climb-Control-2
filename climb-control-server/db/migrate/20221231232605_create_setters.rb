class CreateSetters < ActiveRecord::Migration[6.1]
  def change
    create_table :setters do |t|
      t.string :name
      t.boolean :guest_setter
    end
  end
end
