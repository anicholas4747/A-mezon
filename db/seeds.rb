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

trigger = Studio.create!(
    name: "Studio Trigger",
    description: "Trigger Inc., also known as Studio Trigger, is a Japanese animation studio founded by former Gainax employees Hiroyuki Imaishi and Masahiko Ōtsuka in August 2011.",
    site_url: "http://www.st-trigger.co.jp/"
)

trigger.produced_anime.create!(
    title: "Tengen Toppa Gurren Lagann",
    description: "This Japanese anime is set in a make-believe future in which humans have been forced to live in isolated underground villages, where they constantly must burrow deeper into the Earth to escape the frequent earthquakes that wreak havoc on their way of life. In this world, two orphans named Simon and Kamina resolve to find a way to dig their way back to the surface, where they hope to make peace with the Beastmen and their robots who terrorize their human prey.",
    genre: "Action/Adventure",
    release_year: 2007,
    price: 25
)

trigger.produced_anime.create!(
    title: "Kill la Kill",
    description: "Student council president Satsuki Kiryuin and her underlings, dubbed the Elite Four, rule Honnouji Academy. They have the school under complete control thanks to their special outfits -- Goku Uniforms -- that give them superhuman abilities. When transfer student Ryuko Matoi, who is searching for her father's killer, comes to Hannouji, she challenges the Elite Four to a battle that quickly consumes the school. When Satsuki recognizes Ryuko's scissor-shaped sword, she wonders if their encounter is just a coincidence or if it's fate.",
    genre: "Action/Adventure Comedy",
    release_year: 2013,
    price: 35
)