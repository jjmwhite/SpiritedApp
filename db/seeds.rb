require 'open-uri'

User.destroy_all
Bottle.destroy_all
Distillery.destroy_all
Region.destroy_all
Rating.destroy_all


### USERS ###

user1 = User.create!(email: 'test@test.com', first_name: 'Jessica', last_name: 'White', password:'password123', session_token: 'lkasdjhKJB987hjhk')
user2 = User.create!(email: 'theres_no_e_in_whisky@yahoo.co.uk', first_name: 'Reggie', last_name: 'Blankenship', password:'password123', session_token: 'jdfhlkghfg9834572')
user3 = User.create!(email: 'scotsman123@gmail.co.uk', first_name: 'Scottie', last_name: 'Montgomery', password:'password123', session_token: 'adfgoiu798df7g8dafg9')
user4 = User.create!(email: 'iloveislays@yahoo.com', first_name: 'Elizabeth', last_name: 'Bennet', password:'password123', session_token: 'sdf98768dftsidfgis')
user5 = User.create!(email: 'maester5@hotmail.com', first_name: 'Sam', last_name: 'Tarley', password:'password123', session_token: 'ad9gydfaiughad8dfgh')
user6 = User.create!(email: 'spimpernel@gmail.com', first_name: 'Percy', last_name: 'Blakeney', password:'password123', session_token: 'asdf8yadfguhaidufhg')
user7 = User.create!(email: 'seanthecon@gmail.com', first_name: 'Sean', last_name: 'Connery', password:'password123', session_token: 'dfhsfghhjdghjjkhjfk')
user8 = User.create!(email: 'demo@user.com', first_name: 'Guest', last_name: 'User', password: 'password123', session_token: 'aoshfoant4wo5y38na')


### REGION ###

region1 = Region.create!(name: 'Islay')
region2 = Region.create!(name: 'Island')
region3 = Region.create!(name: 'Speyside')
region4 = Region.create!(name: 'Highland')
region5 = Region.create!(name: 'Lowland')
region6 = Region.create!(name: 'Campbeltown')


### DISTILLERIES ###

dist1 = Distillery.create!(name: 'Laphroaig', region_id: 1, description: 'Islay\'s most visited distilley, and home to the only whisky to carry the Royal Warrant of the Prince of Wales. \'Friends of Laphroaig\' members are granted a lifetime lease on 1 square foot of their land, and can collect a dram in annual rent when visiting the distillery.')
  photo1 = open('https://spirited-app-seeds.s3.amazonaws.com/laphroaig_bottle_by-patrick-boucher.jpg')
  dist1.photo.attach(io: photo1, filename: 'laphroaig_bottle_by-patrick-boucher.jpg')
  
dist2 = Distillery.create!(name: 'Lagavulin', region_id: 1, description: 'Founded in 1816, Lagavulin is known for it\'s remarkably smooth Islay malts, thanks to a slow distillation process and long barrel rest times.')
  photo2 = open('https://spirited-app-seeds.s3.amazonaws.com/lagavulin-dist.jpg')
  dist2.photo.attach(io: photo2, filename: 'lagavulin-dist.jpg')

dist3 = Distillery.create!(name: 'Macallan', region_id: 4, description: 'One of the most popular Scotch distilleries in the world, famed for maturing their signature line of whiskies in sherry casks.')
  photo3 = open('https://spirited-app-seeds.s3.amazonaws.com/macallan_by-dima-fedorov.jpg')
  dist3.photo.attach(io: photo3, filename: 'macallan_by-dima-fedorov.jpg')

dist4 = Distillery.create!(name: 'Dalwhinnie', region_id: 4, description: 'Situated on the border of the Highland and Speyside regions, Dalwhinnie produces superior Highland spirits with great complexity.')
  photo4 = open('https://spirited-app-seeds.s3.amazonaws.com/dalwhinnie_by-jaap-mol.jpg')
  dist4.photo.attach(io: photo4, filename: 'dalwhinnie_by-jaap-mol.jpg')

dist5 = Distillery.create!(name: 'Glenkinchie', region_id: 5, description: 'Situated only 15 miles from Edinburgh and one of only six distilleries in the Lowland region, Glenkinchie is known for its unique floral notes.')
  photo5 = open('https://spirited-app-seeds.s3.amazonaws.com/glenkinchie_by-jim-divine.jpg')
  dist5.photo.attach(io: photo5, filename: 'glenkinchie_by-jim-divine.jpg')

dist6 = Distillery.create!(name: 'Springbank', region_id: 6, description: 'A family-owned whisky distillery on the Kintyre Peninsula, and one of the last surviving distilleries in the Cambeltown region, Springbank handles every step in the whisky making process in-house, from malting the barley to bottling the spirit.')
  photo6 = open('https://spirited-app-seeds.s3.amazonaws.com/springbank-dist.jpg')
  dist6.photo.attach(io: photo6, filename: 'springbank-dist.jpg')

dist7 = Distillery.create!(name: 'Caol Ila', region_id: 1, description: 'Overlooking the straight between Islay and Jura, every whiskey from the Caol Ila distillery bottles up the taste of the pure sea air.')
  photo7 = open('https://spirited-app-seeds.s3.amazonaws.com/caol_ils_dist.jpg')
  dist7.photo.attach(io: photo7, filename: 'caol_ils_dist.jpg')

dist8 = Distillery.create!(name: 'Talisker', region_id: 2, description: 'The only distillery on the Isle of Skye, Talisker is known not for only its signature aged expression but also for its fearless and award-winning blends.')
  photo8 = open('https://spirited-app-seeds.s3.amazonaws.com/talisker-dist.jpg')
  dist8.photo.attach(io: photo8, filename: 'talisker-dist.jpg')

dist9 = Distillery.create!(name: 'Glenlivet', region_id: 3, description: 'The oldest legal distillery in its parish, Glenlivet has operated almost continuously since 1824, and its extra-tall stills produce a particularly light and pleasant spirit.')
  photo9 = open('https://spirited-app-seeds.s3.amazonaws.com/glenlivet_by-dylan-de-jonge.jpg')
  dist9.photo.attach(io: photo9, filename: 'glenlivet_by-dylan-de-jonge.jpg')

dist10 = Distillery.create!(name: 'Glenmorangie', region_id: 4, description: 'Made only using local grains and fresh spring water, Glenmorangie\'s malts are aged in barrels are sourced from their own forests that have been seasoned first with American bourbon to add a rich, honey finish.')
  photo10 = open('https://spirited-app-seeds.s3.amazonaws.com/Glenmorangie_distillery_wikimedia.jpg')
  dist10.photo.attach(io: photo10, filename: 'Glenmorangie_distillery_wikimedia.jpg')


### BOTTLES ###
## bottle images borrowed from http://totalwine.com

bottle1 = Bottle.create!(name: 'Laphroaig 10', 
                        description: 'Strongly smokey with cardamon and sea salt. Laphroaig\'s iconic 10 year expression is Islay\'s most widely-known malt, bringing to mind all the warmth of a seaside campfire.',
                        distillery_id: 1,
                        age: 10,
                        price: 38.99,
                        user_id: 1,
                        )
  photo1 = open('https://spirited-app-seeds.s3.amazonaws.com/laphroaig_10-TW.png')
  bottle1.photo.attach(io: photo1, filename: 'laphroaig_10-TW.png')

bottle2 = Bottle.create!(name: 'Macallan 12', 
                        description: 'Bright caramel, fig and vanilla. The Macallan\'s flagship whisky is justly famous and a perfect introductory dram for new scotch drinkers.',
                        distillery_id: 3,
                        age: 12,
                        price: 38.99,
                        user_id: 3,
                        )
  photo2 = open('https://spirited-app-seeds.s3.amazonaws.com/macallan_12-TW.png')
  bottle2.photo.attach(io: photo2, filename: 'macallan_12-TW.png')

bottle3 = Bottle.create!(name: 'Lagavulin 16', 
                        description: 'Smokey, dried fruit, and barley, with a slightly oily texture. The celebrated signature expression from Lagavulin Distillery perfectly marries sweet and peat.',
                        distillery_id: 2,
                        age: 16,
                        price: 69.99,
                        user_id: 1,
                        )
  photo3 = open('https://spirited-app-seeds.s3.amazonaws.com/lagavulin_16-TW.png')
  bottle3.photo.attach(io: photo3, filename: 'lagavulin_16-TW.png')

bottle4 = Bottle.create!(name: 'Laphroaig 27', 
                        description: 'Peat and rich stone fruit, with a long, light finish. The 2016 edition of Laphroaig\'s annual limited release, praised as their best yet in the series.',
                        distillery_id: 1,
                        age: 27,
                        release_year: 2016,
                        price: 650.00,
                        user_id: 4,
                        )
  photo4 = open('https://spirited-app-seeds.s3.amazonaws.com/laphroaig_27-TW.png')
  bottle4.photo.attach(io: photo4, filename: 'laphroaig_27-TW.png')

bottle5 = Bottle.create!(name: 'Glenkinchie 12', 
                        description: 'Citrus zest and spices with a light mouthfeel. A perfect sipping scotch for the warmer seasons.',
                        distillery_id: 5,
                        age: 12,
                        price: 59.99,
                        user_id: 3,
                        )
  photo5 = open('https://spirited-app-seeds.s3.amazonaws.com/glenkinchie_12_TW.png')
  bottle5.photo.attach(io: photo5, filename: 'glenkinchie_12_TW.png')

bottle6 = Bottle.create!(name: 'Springbank 10', 
                        description: 'Sweet citrus and hints of peat. Bourbon casks are used for maturation and sherry casks for finishing, leading to a complex layering of flavor.',
                        distillery_id: 6,
                        age: 10,
                        price: 64.99,
                        user_id: 1,
                        )
  photo6 = open('https://spirited-app-seeds.s3.amazonaws.com/springbank_10_TW.png')
  bottle6.photo.attach(io: photo6, filename: 'springbank_10_TW.png')

bottle7 = Bottle.create!(name: 'Dalwhinnie 15', 
                        description: 'Honey, vanilla and peat. A smoother and more gentle malt for those who like a little smokiness.',
                        distillery_id: 4,
                        age: 15,
                        price: 69.99,
                        user_id: 3,
                        )
  photo7 = open('https://spirited-app-seeds.s3.amazonaws.com/dalwhinnie_15_TW.png')
  bottle7.photo.attach(io: photo7, filename: 'dalwhinnie_15_TW.png')

bottle8 = Bottle.create!(name: 'Dalwhinnie 25', 
                        description: 'Tart apple, honey, and a hint of black pepper. A warming palate with a feather-light finish, this is a malt to treasure or special occasions.',
                        distillery_id: 4,
                        age: 25,
                        price: 650,
                        user_id: 3,
                        )
  photo8 = open('https://spirited-app-seeds.s3.amazonaws.com/dalwhinnie_25_TW.png')
  bottle8.photo.attach(io: photo8, filename: 'dalwhinnie_25_TW.png')

bottle9 = Bottle.create!(name: 'Caol Ila 12', 
                        description: 'Bright brine, fresh pears and subtle smokiness. Winner of five medals at the San Francisco World Spirits Competition, and appealing to both the peat-lover and those who prefer a lighter malt.',
                        distillery_id: 7,
                        age: 12,
                        price: 59.99,
                        user_id: 1,
                        )
  photo9 = open('https://spirited-app-seeds.s3.amazonaws.com/caol_ila_12_TW.png')
  bottle9.photo.attach(io: photo9, filename: 'caol_ila_12_TW.png')

bottle10 = Bottle.create!(name: 'Talisker 10', 
                        description: 'Smoke, pepper, and dried dark fruits. A bold malt bottled at a higher proof with a big mouthfeel and a lingering sweetness.',
                        distillery_id: 8,
                        age: 10,
                        price: 64.99,
                        user_id: 4,
                        )
  photo10 = open('https://spirited-app-seeds.s3.amazonaws.com/talisker_10_TW.png')
  bottle10.photo.attach(io: photo10, filename: 'talisker_10_TW.png')

bottle11 = Bottle.create!(name: 'Glenlivet Nadurra', 
                        description: 'Smoke, pepper, and dried dark fruits. A bold malt bottled at a higher proof with a big mouthfeel and a lingering sweetness.',
                        distillery_id: 9,
                        price: 90.99,
                        user_id: 8,
                        )
  photo11 = open('https://spirited-app-seeds.s3.amazonaws.com/glenlivet_nadurra_TW.png')
  bottle11.photo.attach(io: photo11, filename: 'glenlivet_nadurra_TW.png')

bottle12 = Bottle.create!(name: 'Glenmorangie Quinta Ruban', 
                        description: 'Butterscotch, port and a hint of mint. Aged for at least 10 years in bourbon barrels, and finished for another 2 years in port casks.',
                        distillery_id: 10,
                        price: 56.99,
                        user_id: 8,
                        )
  photo12 = open('https://spirited-app-seeds.s3.amazonaws.com/glenmorangie_quinta_ruban.png')
  bottle12.photo.attach(io: photo12, filename: 'glenmorangie_quinta_ruban.png')



### RATINGS ###

r1 = Rating.create!(user_id: 1, 
                    bottle_id: 1, 
                    rating: 5,
                    review: 'Tastes like every good memory I have of sitting outside next to a campfire under the stars.',
                    date: 'Sep 21, 2018'
                    )

r2 = Rating.create!(user_id: 2, 
                    bottle_id: 1, 
                    rating: 4,
                    review: 'Read a review on Reddit and had to give it a try. It will be in my bar from now on. Wonderful heavy peat aroma. The heat is pleasant and lingers on the tongue for a bit.',
                    date: 'Jun 01, 2016'
                    )

r3 = Rating.create!(user_id: 3, 
                    bottle_id: 1, 
                    rating: 3,
                    review: 'I honestly find this kind of boring after having had other Islay single malts. Not very smoky despite the 5 smoke rating. The lemony finish is nice, but nothing about this dram blows me away.',
                    date: 'Feb 02, 2018'
                    )

r5 = Rating.create!(user_id: 4, 
                    bottle_id: 1, 
                    rating: 5,
                    review: 'Without doubt the gold standard for an Islay single malt. It does not hold back, and if you persist beyond the first explosion of peat smoke, the complexities of its flavor come through.',
                    date: 'Jun 01, 2019'
                    )

r6 = Rating.create!(user_id: 4, 
                    bottle_id: 2, 
                    rating: 3,
                    review: 'For all its vaunted popularity, Macallan falls short of its fame. A perfectly decent scotch, but nothing to write home about.',
                    date: 'Mar 14, 2017'
                    )

r7 = Rating.create!(user_id: 8, 
                    bottle_id: 2, 
                    rating: 4,
                    review: 'Vanilla with hints of ginger, dried fruits, sherry sweetness and wood smoke.',
                    date: 'Aug 01, 2019'
                    )

r8 = Rating.create!(user_id: 2, 
                    bottle_id: 3, 
                    rating: 4,
                    review: 'There\'s peat, first of all, a big, pungent whack of it, laced with smoked fish and driftwood and salty rocks. But underneath that, there\'s a great big ocean of sweet, caramelized malt, all baked apples and cobbler crust.',
                    date: 'May 06, 2019'
                    )

r9 = Rating.create!(user_id: 1, 
                    bottle_id: 3, 
                    rating: 5,
                    review: 'Smokey, sweet, and a little salty. Pretty much a perfect combination.',
                    date: 'Aug 06, 2019'
                    )

r10 = Rating.create!(user_id: 5, 
                    bottle_id: 4, 
                    rating: 5,
                    review: 'The layers of flavor go marching across your tongue single file, giving you ample time to consider and admire each one.',
                    date: 'Dec 28, 2018'
                    )

r11 = Rating.create!(user_id: 6, 
                    bottle_id: 5, 
                    rating: 1,
                    review: 'Not a fan of this one. It was harsh and tasted of the worst features of the Johnny Walker blend. I don’t know why everyone says it’s smooth, it is not.',
                    date: 'Apr 01, 2018'
                    )

r12 = Rating.create!(user_id: 7, 
                    bottle_id: 5, 
                    rating: 4,
                    review: 'My Daughter bought me this as a present. She has great taste. Initially smooth there is a nutty honey flavour on the front of the tongue this develops into a harder peppery flavour toward the back of the mouth.',
                    date: 'Jan 13, 2019'
                    )

r13 = Rating.create!(user_id: 5, 
                    bottle_id: 2,
                    rating: 4, 
                    review: 'I went to a Macallan tasing where they served dried figs alongside sipping this scotch and that pairing sold me on it forever. So good!',
                    date: 'Jul 02, 2017'
                    )

r14 = Rating.create!(user_id: 8,
                    bottle_id: 11,
                    rating: 5,
                    review: 'Really enjoyed the smoke and spice of this one! For something that hits hard up front, it also had a lighter finish than I expected.',
                    date: 'Jul 02, 2019'
                    )

r15 = Rating.create!(user_id: 8,
                    bottle_id: 6,
                    rating: 4,
                    review: 'The bourbon cask finish gives the Springbank 10 one a nice hint of honey, and it improves with a few drops of water to open it up.',
                    date: 'Aug 19, 2019'
                    )


  ### OTHER IMAGE CREDITS:
  # 'X' icon by https://www.flaticon.com/authors/hadrien