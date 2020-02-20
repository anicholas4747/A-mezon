# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_20_004543) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "anime", force: :cascade do |t|
    t.string "title", null: false
    t.text "description"
    t.string "genre"
    t.integer "release_year", null: false
    t.float "price", null: false
    t.integer "studio_id", null: false
    t.float "ave_rating"
    t.index ["studio_id"], name: "index_anime_on_studio_id"
  end

  create_table "carts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.index ["user_id"], name: "index_carts_on_user_id", unique: true
  end

  create_table "purchases", force: :cascade do |t|
    t.integer "anime_id", null: false
    t.integer "cart_id", null: false
    t.integer "quantity"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "title", null: false
    t.text "body", null: false
    t.integer "rating", null: false
    t.integer "author_id", null: false
    t.integer "anime_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["anime_id"], name: "index_reviews_on_anime_id"
    t.index ["author_id"], name: "index_reviews_on_author_id"
  end

  create_table "studios", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.string "site_url"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
