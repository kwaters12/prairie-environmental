class CreateWeedReports < ActiveRecord::Migration[5.2]
  def change
    create_table :weed_reports do |t|
      t.string :type
      t.text :notes
      t.string :address
      t.float :latitude
      t.float :longitude
      t.references :user, foreign_key: true
      t.references :client, foreign_key: true

      t.timestamps
    end
  end
end
