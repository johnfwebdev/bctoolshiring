class CreateCalls < ActiveRecord::Migration[5.0]
  def change
    create_table :calls, id: false do |t|
      t.integer :callid
      t.integer :calls_offered
      t.integer :calls_handled
      t.timestamp :timestamp

      t.timestamps
    end
  end
end
