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

kyo_ani = Studio.create!(
    name: "Kyoto Animation",
    description: "Kyoto Animation Co., Ltd., abbreviated KyoAni, is a Japanese animation studio and a light novel publisher located in Uji, Kyoto Prefecture, Japan. It was established in 1981 by former Mushi Pro staff. Presided by Hideaki Hatta, the company is also affiliated with studio Animation Do.",
    site_url: "https://www.kyotoanimation.co.jp/en/"
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

kyo_ani.produced_anime.create!(
    title: "Miss Kobayashi's Dragon Maid",
    description: "As Kobayashi sets off for another day at work, she opens her apartment door only to be met by an unusually frightening sight—the head of a dragon, staring at her from across the balcony. The dragon immediately transforms into a cute, busty, and energetic young girl dressed in a maid outfit, introducing herself as Tooru.",
    genre: "Comedy Fantasy",
    release_year: 2017,
    price: 30
)