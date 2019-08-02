require 'open-uri'

User.destroy_all
Bottle.destroy_all
Distillery.destroy_all
Region.destroy_all


### USERS ###

user1 = User.create!(email: 'test@test.com', first_name: 'Jessica', last_name: 'White', password:'password123', session_token: 'lkasdjhKJB987hjhk')
user2 = User.create!(email: 'theres_no_e_in_whisky@yahoo.co.uk', first_name: 'Reggie', last_name: 'Blankenship', password:'password123', session_token: 'jdfhlkghfg9834572')
user3 = User.create!(email: 'scotsman123@gmail.co.uk', first_name: 'Scottie', last_name: 'Montgomery', password:'password123', session_token: 'adfgoiu798df7g8dafg9')
user4 = User.create!(email: 'iloveislays@yahoo.com', first_name: 'Elizabeth', last_name: 'Bennet', password:'password123', session_token: 'sdf98768dftsidfgis')
user5 = User.create!(email: 'maester5@hotmail.com', first_name: 'Sam', last_name: 'Tarley', password:'password123', session_token: 'ad9gydfaiughad8dfgh')
user6 = User.create!(email: 'spimpernel@gmail.com', first_name: 'Percy', last_name: 'Blakeney', password:'password123', session_token: 'asdf8yadfguhaidufhg')
user1 = User.create!(email: 'seanthecon@gmail.com', first_name: 'Sean', last_name: 'Connery', password:'password123', session_token: 'dfhsfghhjdghjjkhjfk')


### REGION ###

region1 = Region.create!(name: 'Islay')
region2 = Region.create!(name: 'Island')
region3 = Region.create!(name: 'Speyside')
region4 = Region.create!(name: 'Highland')
region5 = Region.create!(name: 'Lowland')
region6 = Region.create!(name: 'Campbeltown')


### DISTILLERIES ###

dist1 = Distillery.create!(name: 'Laphroaig', region_id: 1, description: 'Islay\'s most visited distilley, and home to the only whisky to carry the Royal Warrant of the Prince of Wales.')
  photo1 = open('https://spirited-app-seeds.s3.amazonaws.com/laphroaig_bottle_by-patrick-boucher.jpg')
  dist1.photo.attach(io: photo1, filename: 'laphroaig_bottle_by-patrick-boucher.jpg')
  
dist2 = Distillery.create!(name: 'Lagavulin', region_id: 1, description: 'Founded in 1816, Lagavulin is known for it\'s remarkably smooth Islay malts, thanks to a slow distillation process and long barrel rest times.')
  photo2 = open('https://spirited-app-seeds.s3.amazonaws.com/lagavulin-dist.jpg')
  dist2.photo.attach(io: photo2, filename: 'lagavulin-dist.jpg')

dist3 = Distillery.create!(name: 'Macallan', region_id: 4, description: 'One of the most popular Scotch distilleries in the world, famed for maturing their signature line of whiskies in sherry casks.')
  photo3 = open('https://spirited-app-seeds.s3.amazonaws.com/macallan_by-dima-fedorov.jpg')
  dist3.photo.attach(io: photo3, filename: 'macallan_by-dima-fedorov.jpg')


### BOTTLES ###

bottle1 = Bottle.create!(name: 'Laphroaig 10', 
                        description: 'Strongly smokey with cardamon and sea salt. Laphroaig\'s iconic 10 year expression is Islay\'s most widely-known malt, bringing to mind all the warmth of a seaside campfire.',
                        distillery_id: 1,
                        age: 10,
                        price: 38.99
                        )
  photo1 = open('https://spirited-app-seeds.s3.amazonaws.com/laphroaig_10-TW.png')
  bottle1.photo.attach(io: photo1, filename: 'laphroaig_10-TW.png')

bottle2 = Bottle.create!(name: 'Macallan 12', 
                        description: 'Bright caramel, fig and vanilla. The Macallan\'s flagship whisky is justly famous and a perfect introductory dram for new scotch drinkers.',
                        distillery_id: 3,
                        age: 12,
                        price: 38.99
                        )
  photo2 = open('https://spirited-app-seeds.s3.amazonaws.com/macallan_12-TW.png')
  bottle2.photo.attach(io: photo2, filename: 'macallan_12-TW.png')

bottle3 = Bottle.create!(name: 'Lagavulin 16', 
                        description: 'Smokey, dried fruit, and barley, with a slightly oily texture. The celebrated signature expression from Lagavulin Distillery perfectly marries sweet and peat.',
                        distillery_id: 2,
                        age: 16,
                        price: 69.99
                        )
  photo3 = open('https://spirited-app-seeds.s3.amazonaws.com/lagavulin_16-TW.png')
  bottle3.photo.attach(io: photo3, filename: 'lagavulin_16-TW.png')

bottle4 = Bottle.create!(name: 'Laphroaig 27', 
                        description: 'Peat and rich stone fruit, with a long, light finish. The 2016 edition of Laphaoig\'s annual limited release, praised as their best yet in the series.',
                        distillery_id: 1,
                        age: 27,
                        release_year: 2016,
                        price: 650.00
                        )
  photo4 = open('https://spirited-app-seeds.s3.amazonaws.com/laphroaig_27-TW.png')
  bottle4.photo.attach(io: photo4, filename: 'laphroaig_27-TW.png')