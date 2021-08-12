class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name, null: false 
      t.string :brand, null: false
      t.string :price, null: false
      t.text :description, null: false
      t.string :img, default: 'https://raw.githubusercontent.com/do-community/react_rails_recipe/master/app/assets/images/Sammy_Meal.jpg'
     
      t.timestamps
    end
  end
end
