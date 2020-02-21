# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# DESTROY AS LEAST ASSOCS TO THE MOST

Studio.destroy_all
Anime.destroy_all
Purchase.destroy_all
Cart.destroy_all
Review.destroy_all
User.destroy_all

# START CREATING STUFF

demo_user = User.new(
    username: "anime_lover123",
    email: "demo_user@gmail.com",
    password: "mypwishunter12"
)
    
demo_user.save!

Cart.create!(user_id: demo_user.id)

10.times do
    un = Faker::JapaneseMedia::DragonBall.unique.character.split(" ").join("_")
    new_user = User.create!({
        username: un,
        email: un + "@a.a",
        password: "imweebyandiknowit",
    })

    Cart.create!(user_id: new_user.id)

    puts new_user.username
end

10.times do
    un = Faker::Movies::StarWars.unique.character.split(" ").join("_")
    new_user = User.create!({
        username: un,
        email: un + "@a.a",
        password: "imweebyandiknowit",
    })

    Cart.create!(user_id: new_user.id)

    puts new_user.username
end

10.times do
    un = Faker::JapaneseMedia::OnePiece.unique.character.split(" ").join("_")
    new_user = User.create!({
        username: un,
        email: un + "@a.a",
        password: "imweebyandiknowit",
    })

    Cart.create!(user_id: new_user.id)

    puts new_user.username
end

10.times do
    un = Faker::JapaneseMedia::SwordArtOnline.unique.real_name.split(" ").join("_")
    new_user = User.create!({
        username: un,
        email: un + "@a.a",
        password: "imweebyandiknowit",
    })

    Cart.create!(user_id: new_user.id)

    puts new_user.username
end

all_users = User.all
all_studios = []
all_anime = []

require 'csv'

CSV.foreach(Rails.root.join('./db/anime_seeds.csv'), headers: true) do |row|

    studio_formatted = row[27].split(";").join(" ").split(".").join(" ").split("-").join(" ").split("/").join(" ")
    if !all_studios.include?(studio_formatted)
        studio = Studio.create!({
            name: studio_formatted
        })
        all_studios << studio_formatted
    end
  
    anime_formatted = row[2].split(";").join(" ").split(".").join(" ").split("-").join(" ").split("/").join(" ")
    if !all_anime.include?(anime_formatted)
        anime = Studio.find_by(name: studio_formatted).produced_anime.create!({
            title: anime_formatted,
            description: row[21],
            genre: row[29],
            release_year: row[33].to_i,
            price: rand(20..100),
            ave_rating: row[15].to_f / 2,
            title_jp: row[3],
            image_url: row[5],
        })
        all_anime << anime_formatted
    end

    rand(2).times do 
        all_users.sample.authored_reviews.create!({
            title: Faker::JapaneseMedia::OnePiece.quote,
            body: Faker::Movies::HitchhikersGuideToTheGalaxy.marvin_quote,
            rating: rand(1..5),
            anime_id: anime.id,
        })
    end

    rand(3).times do 
        all_users.sample.authored_reviews.create!({
            title: Faker::Movies::StarWars.quote,
            body: Faker::Movies::HitchhikersGuideToTheGalaxy.quote,
            rating: rand(1..5),
            anime_id: anime.id,
        })
    end

    rand(5).times do 
        all_users.sample.authored_reviews.create!({
            title: Faker::Movies::HarryPotter.quote,
            body: Faker::TvShows::MichaelScott.quote,
            rating: rand(1..5),
            anime_id: anime.id,
        })
    end

    puts anime.title
end