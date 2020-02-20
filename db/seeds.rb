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
User.destroy_all

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

pa_works = Studio.create!(
    name: "PA Works",
    description: "P.A.Works, Inc. is a Japanese animation studio founded on November 10, 2000 in Nanto, Toyama.",
    site_url: "https://www.pa-works.jp/en/"
)

manglobe = Studio.create!(
    name: "Studio Manglobe",
    description: "Manglobe Inc. was a Japanese animation studio and production enterprise, active from 2002 to 2015. Manglobe was formed on February 7, 2002 by Sunrise producers Shinichirō Kobayashi and Takashi Kochiyama."
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

trigger.produced_anime.create!(
    title: "Darling in the FranXX",
    description: "In the distant future, humanity has been driven to near-extinction by giant beasts known as Klaxosaurs, forcing the surviving humans to take refuge in massive fortress cities called Plantations. Children raised here are trained to pilot giant mechas known as FranXX—the only weapons known to be effective against the Klaxosaurs—in boy-girl pairs. Bred for the sole purpose of piloting these machines, these children know nothing of the outside world and are only able to prove their existence by defending their race. Hiro, an aspiring FranXX pilot, has lost his motivation and self-confidence after failing an aptitude test. Skipping out on his class' graduation ceremony, Hiro retreats to a forest lake, where he encounters a mysterious girl with two horns growing out of her head. She introduces herself by her codename Zero Two, which is known to belong to an infamous FranXX pilot known as the 'Partner Killer.' Before Hiro can digest the encounter, the Plantation is rocked by a sudden Klaxosaur attack. Zero Two engages the creature in her FranXX, but it is heavily damaged in the skirmish and crashes near Hiro. Finding her partner dead, Zero Two invites Hiro to pilot the mecha with her, and the duo easily defeats the Klaxosaur in the ensuing fight. With a new partner by his side, Hiro has been given a chance at redemption for his past failures, but at what cost?",
    genre: "Action/Adventure Drama",
    release_year: 2018,
    price: 30
)

trigger.produced_anime.create!(
    title: "Little Witch Academia",
    description: "'A believing heart is your magic!'—these were the words that Atsuko 'Akko' Kagari's idol, the renowned witch Shiny Chariot, said to her during a magic performance years ago. Since then, Akko has lived by these words and aspired to be a witch just like Shiny Chariot, one that can make people smile. Hence, even her non-magical background does not stop her from enrolling in Luna Nova Magical Academy. However, when an excited Akko finally sets off to her new school, the trip there is anything but smooth. After her perilous journey, she befriends the shy Lotte Yansson and the sarcastic Sucy Manbavaran. To her utmost delight, she also discovers Chariot's wand, the Shiny Rod, which she takes as her own. Unfortunately, her time at Luna Nova will prove to more challenging than Akko could ever believe. She absolutely refuses to stay inferior to the rest of her peers, especially to her self-proclaimed rival, the beautiful and gifted Diana Cavendish, so she relies on her determination to compensate for her reckless behavior and ineptitude in magic. In a time when wizardry is on the decline, Little Witch Academia follows the magical escapades of Akko and her friends as they learn the true meaning of being a witch.",
    genre: "Comedy",
    release_year: 2017,
    price: 30
)

kyo_ani.produced_anime.create!(
    title: "Miss Kobayashi's Dragon Maid",
    description: "As Kobayashi sets off for another day at work, she opens her apartment door only to be met by an unusually frightening sight—the head of a dragon, staring at her from across the balcony. The dragon immediately transforms into a cute, busty, and energetic young girl dressed in a maid outfit, introducing herself as Tooru.",
    genre: "Comedy Fantasy",
    release_year: 2017,
    price: 30
)
    
pa_works.produced_anime.create!(
    title: "Angel Beats!",
    description: "Otonashi awakens only to learn he is dead. A rifle-toting girl named Yuri explains that they are in the afterlife, and Otonashi realizes the only thing he can remember about himself is his name. Yuri tells him that she leads the Shinda Sekai Sensen (Afterlife Battlefront) and wages war against a girl named Tenshi. Unable to believe Yuri's claims that Tenshi is evil, Otonashi attempts to speak with her, but the encounter doesn't go as he intended. Otonashi decides to join the SSS and battle Tenshi, but he finds himself oddly drawn to her. While trying to regain his memories and understand Tenshi, he gradually unravels the mysteries of the afterlife.",
    genre: "Comedy Drama",
    release_year: 2010,
    price: 20
)
        
pa_works.produced_anime.create!(
    title: "Shirobako",
    description: "It all started in Kaminoyama High School, when five best friends—Aoi Miyamori, Ema Yasuhara, Midori Imai, Shizuka Sakaki, and Misa Toudou—discovered their collective love for all things anime and formed the animation club. After making their first amateur anime together and showcasing it at the culture festival, the group vow to pursue careers in the industry, aiming to one day work together and create their own mainstream show. Two and a half years later, Aoi and Ema have managed to land jobs at the illustrious Musashino Animation production company. The others, however, are finding it difficult to get their dream jobs. Shizuka is feeling the weight of not being recognized as a capable voice actor, Misa has a secure yet unsatisfying career designing 3D models for a car company, and Midori is a university student intent on pursuing her dream as a story writer. These five girls will learn that the path to success is one with many diversions, but dreams can still be achieved through perseverance and a touch of eccentric creativity.",
    genre: "Comedy Drama",
    release_year: 2014,
    price: 20
)
                     
manglobe.produced_anime.create!(
    title: "Samurai Champloo",
    description: "Fuu Kasumi is a young and clumsy waitress who spends her days peacefully working in a small teahouse. That is, until she accidentally spills a drink all over one of her customers! With a group of samurai now incessantly harassing her, Fuu desperately calls upon another samurai in the shop, Mugen, who quickly defeats them with his wild fighting technique, utilizing movements reminiscent to that of breakdancing. Unfortunately, Mugen decides to pick a fight with the unwilling ronin Jin, who wields a more precise and traditional style of swordfighting, and the latter proves to be a formidable opponent. The only problem is, they end up destroying the entire shop as well as accidentally killing the local magistrate's son. For their crime, the two samurai are captured and set to be executed. However, they are rescued by Fuu, who hires the duo as her bodyguards. Though she no longer has a place to return to, the former waitress wishes to find a certain samurai who smells of sunflowers and enlists the help of the now exonerated pair to do so. Despite initially disapproving of this idea, the two eventually agree to assist the girl in her quest; thus, the trio embark upon an adventure to find this mysterious warrior—that is, if Fuu can keep Mugen and Jin from killing each other. Set in an alternate Edo Period of Japan, Samurai Champloo follows the journey of these three eccentric individuals in an epic quest full of action, comedy, and dynamic sword fighting, all set to the beat of a unique hip-hop infused soundtrack.",
    genre: "Action/Adventure Drama",
    release_year: 2004,
    price: 35
)

demo_user = User.new(
    username: "anime_lover123",
    email: "demo_user@gmail.com",
    password: "mypwishunter12"
)
    
demo_user.save!

Cart.create!(user_id: demo_user.id)