const data = {
  appetizer: [
    {
      name: 'Yakitori',
      id: 0,
      description: '(Grilled Chicken on skewer)',
      price: 6.95,
      url: '/images/menu/appetizer/yakitori.jpg',
      group: 1
    },
    {
      name: 'Kushiyaki',
      id: 1,
      description: '(Grilled prawn, scallop)',
      price: 10.25,
      url: '/images/menu/appetizer/kushiyaki.jpg',
      group: 1
    },
    {
      name: 'Gyoza',
      id: 2,
      description: '(Pork dumpling)',
      price: 5.95,
      url: '/images/menu/appetizer/gyoza.jpg',
      group: 1
    },
    {
      name: 'Appetizer Sashimi (8pcs)',
      id: 3,
      description: '(Tuna, Wild salmon, AT salmon, Tai)',
      price: 11.95,
      url: '/images/menu/appetizer/appetizerSashimi.jpg',
      group: 1
    },
    {
      name: 'Spicy Agedashi Tofu (6pcs)',
      id: 4,
      description: '',
      price: 4.5,
      url: '',
      group: 2
    },
    {
      name: 'Edamame (Steamed soy beans)',
      id: 5,
      description: '',
      price: 4.5,
      url: '',
      group: 2
    },
    {
      name: 'Chicken Karage',
      id: 6,
      description: '(Boneless chicken thigh)',
      price: 6.95,
      url: '',
      group: 2
    },
    {
      name: 'Rice',
      id: 7,
      description: '',
      price: 1.95,
      url: '',
      group: 2
    },
    {
      name: 'Vegetable spring roll (6pcs)',
      id: 8,
      description: '',
      price: 4.95,
      url: '',
      group: 2
    },
    {
      name: 'Agedashi Tofu (8pcs)',
      id: 9,
      description: '(Deep fried tofu)',
      price: 4.5,
      url: '/images/menu/appetizer/agedashiTofu.jpg',
      group: 2
    },
    {
      name: 'Takoyaki (6pcs)',
      id: 10,
      description:
        '(Deep friend fish cake with octopus inside, Katsuobushi on top)',
      price: 5.95,
      url: '/images/menu/appetizer/takoyaki.jpg',
      group: 2
    },
    {
      name: 'Gomae',
      id: 11,
      description: '(Spinach salad with special black sesame sauce)',
      price: 4.5,
      url: '/images/menu/appetizer/gomae.jpg',
      group: 2
    }
  ],
  bbq_combo: [
    {
      name: 'Bulgogi Combo',
      id: 0,
      description: '(Korean-style marinated slices of grilled beef)',
      price: 16.95,
      url: '/images/menu/bbq_combo/bulgogi_combo.jpg',
      group: 1
    },
    {
      name: 'Ribs Combo',
      id: 1,
      description: '(Korean-style marinated beef short ribs)',
      price: 18.95,
      url: '/images/menu/bbq_combo/ribs_combo.jpg',
      group: 1
    }
  ],
  beverage: {
    white_wine: {
      name: 'White Wine',
      description: 'Enjoy with Sushi & Seafood Dishes',
      title1: 'Glass(6oz)',
      title2: '1/2L',
      items: [
        {
          name: 'Frontera Sauvignon Blanc',
          id: 0,
          description: '',
          price1: '$5.95',
          price2: '$15.95',
          url: '',
          group: 1
        }
      ]
    },
    red_wine: {
      name: 'Red Wine',
      description: 'Enjoy with Beef & Chicken Dishes',
      title1: 'Glass(6oz)',
      title2: '1/2L',
      items: [
        {
          name: 'Frontera Cabernet Sauvignon',
          id: 0,
          description: '',
          price1: '$5.95',
          price2: '$15.95',
          url: '',
          group: 1
        }
      ]
    },
    sake: {
      name: 'Sake',
      title1: 'Small',
      title2: 'Large',
      items: [
        {
          name: 'Hot Sake',
          id: 0,
          description: '',
          price1: '$5.95(150ml)',
          price2: '$8.95(325ml)',
          url: '',
          group: 1
        }
      ]
    },
    beer: {
      name: 'Beer',
      items: [
        {
          name: 'Canadian, Kokanee, Budweiser',
          id: 0,
          description: '',
          price1: '$4.95(341ml)',
          url: '',
          group: 1
        }
      ]
    },
    japanese_beer: {
      name: 'Japanese Beer',
      title1: 'Small',
      title2: 'Large',
      items: [
        {
          name: 'Kirin',
          id: 0,
          description: '',
          price1: '$5.95(355ml)',
          price2: '$8.95(650ml)',
          url: '',
          group: 1
        },
        {
          name: 'Asahi',
          id: 1,
          description: '',
          price1: '$5.95(330ml)',
          price2: '$8.95(630ml)',
          url: '',
          group: 1
        },
        {
          name: 'Sapporo',
          id: 2,
          description: '',
          price1: '$5.95(355ml)',
          price2: '$8.95(600ml)',
          url: '',
          group: 1
        }
      ]
    },
    soft_drinks: {
      name: 'Soft Drinks',
      items: [
        {
          name:
            'Coke, Diet Coke, Coke Zero, Iced Tea, Orange crush, Gingerale, Root Beer, Sprite',
          id: 0,
          description: '',
          price1: '$1.85',
          url: '',
          group: 1
        }
      ]
    },
    juice: {
      name: 'Juice',
      items: [
        {
          name: 'Orange, Apple Juice',
          id: 0,
          description: '',
          price1: '$2.25',
          url: '',
          group: 1
        }
      ]
    }
  },
  boat: [
    {
      name: 'Small Boat',
      id: 0,
      description:
        '(2 bowls of miso, Cali, 3pcs salmon, 3pcs tuna of each roll, half orange and 1pc of ebi, tuna, tako, hokkigai, AT salmon, wild salmon, amaebi nigiri)',
      price: 21.95,
      url: '/images/menu/boat/small_boat.jpg',
      group: 1
    },
    {
      name: 'Love Boat',
      id: 0,
      description:
        '(2 bowls of miso, house green salad, cali, 3pcs salmon, 3pcs tuna of each roll, full orange and 1pc of ebi, tuna, tako, hokkigai, AT salmon, wild salmon, amaebi nigiri, assorted sashimi)',
      price: 44.95,
      url: '/images/menu/boat/small_boat.jpg',
      group: 2
    }
  ],
  dessert: {
    icecream: {
      name: 'Ice Cream (3 Scoops)',
      items: [
        {
          name: 'Green Tea',
          id: 0,
          description: '',
          price1: '$5.95',
          url: '',
          group: 1
        },
        {
          name: 'Mango',
          id: 1,
          description: '',
          price1: '$5.95',
          url: '',
          group: 1
        }
      ]
    },
    fruit_plate: {
      name: 'Fruit Plate',
      id: 0,
      description: '',
      price1: '$5.95',
      url: '',
      group: 1
    }
  },
  dinner_box: [
    {
      name: 'Dinner Box A',
      id: 0,
      description:
        '(Chicken teriyaki, Assorted tempura, California Rolls, salad and fruits)',
      price: 18.95,
      url: '',
      group: 1
    },
    {
      name: 'Dinner Box B',
      id: 1,
      description:
        '(Beef teriyaki, Assorted tempura, 1pc of each Ebi, Tuna, AT & Wild Salmon Nigiri, salad and fruits)',
      price: 19.95,
      url: '',
      group: 1
    },
    {
      name: 'Dinner Box C',
      id: 2,
      description:
        '(Salmon teriyaki, Assorted tempura, Appetizer Sashimi, salad and fruits)',
      price: 21.95,
      url: '',
      group: 1
    },
    {
      name: 'Dinner Box D',
      id: 3,
      description:
        '(Vegetable teriyaki, Vegetable tempura, Vegetable rolls, salad and fruits)',
      price: 17.5,
      url: '',
      group: 1
    },
    {
      name: 'Sashimi Dinner',
      id: 4,
      description: '(12pcs assorted sashimi with rice)',
      price: 19.95,
      url: '/images/menu/dinner_box/sashimi_dinner.jpg',
      group: 1
    },
    {
      name: 'Tempura Dinner',
      id: 5,
      description:
        '(2pcs prawn, 2pcs fish and 5pcs vegetable tempura with rice)',
      price: 17.95,
      url: '/images/menu/dinner_box/tempura_dinner.jpg',
      group: 1
    }
  ],
  donburi: [
    {
      name: 'Beef / Seafood Donburi',
      id: 0,
      description: '',
      price: '$12.50 / $13.50',
      url: '',
      group: 2
    },
    {
      name: 'Unagi Donburi',
      id: 1,
      description: '(Sushi rice with unagi, tamago, Katsuobushi)',
      price: 18.95,
      url: '',
      group: 2
    },
    {
      name: 'Chicken Katsu Donburi',
      id: 2,
      description: '(Rice, chicken cutlet, vegetables and steamed egg)',
      price: 12.5,
      url: '/images/menu/donburi/chicken_katsu_donburi.jpg',
      group: 1
    },
    {
      name: 'Chirashi Donburi',
      id: 3,
      description: '(Assorted sashimi with sushi rice)',
      price: 18.95,
      url: '/images/menu/donburi/chirashi_donburi.jpg',
      group: 2
    },
    {
      name: 'Spicy Tuna (Salmon) Donburi',
      id: 4,
      description: '(Sushi rice with SP tuna (salmon))',
      price: 18.95,
      url: '/images/menu/donburi/spicy_tuna_donburi.jpg',
      group: 1
    },
    {
      name: 'Hot Chirashi Donburi',
      id: 5,
      description: '(Chopped sashimi, salad, sushi rice with SP sauce)',
      price: 19.95,
      url: '/images/menu/donburi/hot_chirashi_donburi.jpg',
      group: 2
    }
  ],
  katsu: [
    {
      name: 'Chicken Katsu Combo',
      id: 0,
      description: '',
      price: 13.5,
      url: '/images/menu/katsu/chicken_katsu.jpg',
      group: 1
    },
    {
      name: 'Pork Katsu Combo',
      id: 1,
      description: '',
      price: 13.5,
      url: '',
      group: 1
    }
  ],
  kawa_special_roll: [
    {
      name: 'Crazy Girl Roll(8pcs)',
      id: 0,
      description:
        '(deep fried avocado, cream cheese, smoked salmon, crab with Teri sauce, SP mayo and sweet chili sauce)',
      price: 8.5,
      url: '/images/menu/kawa_special_roll/crazy_girl_roll.jpg',
      group: 1
    },
    {
      name: 'Caterpillar Roll(8pcs)',
      id: 1,
      description:
        '(prawn tempura, cucumber, sliced avocado with Teri sauce and mayo)',
      price: 8.95,
      url: '/images/menu/kawa_special_roll/caterpillar_roll.jpg',
      group: 1
    },
    {
      name: 'Philadelphia Roll(8pcs)',
      id: 2,
      description:
        '(crab, avocado, cucumber, salmon, cream cheese with cream cheese sauce and smoked salmon on top)',
      price: 9.95,
      url: '/images/menu/kawa_special_roll/philadelphia_roll.jpg',
      group: 1
    },
    {
      name: 'Crunchy Calamari Roll(8pcs)',
      id: 3,
      description:
        '(squid tempura, asparagus, sliced onion & pepper, masago with SP mayo sauce and crunchy yam)',
      price: 10.95,
      url: '/images/menu/kawa_special_roll/crunchy_calamari_roll.jpg',
      group: 1
    },
    {
      name: 'Pikachu Roll(8pcs)',
      id: 4,
      description:
        '(cucumber, avocado, red pepper, tuna, salmon with wine sauce. wrapped with egg paper',
      price: 8.5,
      url: '/images/menu/kawa_special_roll/pikachu_roll.jpg',
      group: 1
    },
    {
      name: 'Mango Paradise Roll(8pcs)',
      id: 5,
      description:
        '(avocado, cucumber, crab, red pepper with mango, ebi, tobiko & sweet mango sauce on top)',
      price: 9.95,
      url: '/images/menu/kawa_special_roll/mango_paradise_roll.jpg',
      group: 1
    },
    {
      name: 'Spicy Cheese Tempura Roll(8pcs)',
      id: 6,
      description:
        '(cream cheese, asparagus, deep fried tuna, green onion with Teri & SP sauce)',
      price: 10.95,
      url: '/images/menu/kawa_special_roll/spicy_cheese_tempura_roll.jpg',
      group: 1
    },
    {
      name: 'Tuna Tataki Roll(8pcs)',
      id: 7,
      description:
        '(crab, cucumber, prawn tempura, avocado & seared tuna and crispy garlic on top with ponzu sauce)',
      price: 10.95,
      url: '/images/menu/kawa_special_roll/tuna_tataki_roll.jpg',
      group: 1
    },
    {
      name: 'Salmon Battera(6pcs)',
      id: 8,
      description: '(avocado, furikake & salmon, torched aioli sauce on top)',
      price: 8.5,
      url: '/images/menu/kawa_special_roll/salmon_battera.jpg',
      group: 1
    },
    {
      name: 'Saba Battera(6pcs)',
      id: 9,
      description:
        '(furikake & torched mackerel, ginger and green onions on top)',
      price: 10.5,
      url: '/images/menu/kawa_special_roll/saba_battera.jpg',
      group: 1
    },

    {
      name: 'Salmon Mountain Roll(8pcs)',
      id: 10,
      description:
        '(avocado, cucumber, prawn tempura, chopped salmon, crispy flake, Teri & SP mayo & wine sauce)',
      price: 11.5,
      url: '/images/menu/kawa_special_roll/salmon_mountain_roll.jpg',
      group: 1
    },
    {
      name: 'Dragon Roll(8pcs)',
      id: 11,
      description:
        '(cucumber, avocado, crab, prawn tempura, shirimp, unagi, mayo & teri sauce, tobiko on top)',
      price: 12.5,
      url: '/images/menu/kawa_special_roll/dragon_roll.jpg',
      group: 1
    },
    {
      name: 'Tiger Roll(8pcs)',
      id: 12,
      description:
        '(crab, cucumber, prawn tempura, avocado, ebi with Teri sauce and SP mayo)',
      price: 9.95,
      url: '/images/menu/kawa_special_roll/tiger_roll.jpg',
      group: 1
    },
    {
      name: 'Las Vegas Roll(8pcs)',
      id: 13,
      description:
        '(deep fried, crab, avocado, cream cheese, cucumber, prawn tempura with sauce and crunch yam, Teri & garlic sauce, cream cheese on top)',
      price: 12.5,
      url: '/images/menu/kawa_special_roll/las_vegas_roll.jpg',
      group: 1
    },
    {
      name: 'Volcano Roll(8pcs)',
      id: 14,
      description:
        '(crab, prawn tempura, cucumber, chopped scallop on top with torched mozzarella, cheddar cheese and Teri & SP mayo sauce)',
      price: 13.5,
      url: '/images/menu/kawa_special_roll/volcano_roll.jpg',
      group: 1
    },
    {
      name: 'Spider Roll(8pcs)',
      id: 15,
      description:
        '(soft shell crab, avocado, cucumber, yam tempura, deep fried chop, baby shrimp, Teri & aioli sauce with crunchy yam on top)',
      price: 14.5,
      url: '/images/menu/kawa_special_roll/spider_roll.jpg',
      group: 1
    },
    {
      name: 'Spring Garden Roll(6pcs)',
      id: 16,
      description:
        '(spring mix, onion, carrot, red pepper, beat & wrapped with thin cucumber with ponzu sauce)',
      price: 8.5,
      url: '/images/menu/kawa_special_roll/spring_garden_roll.jpg',
      group: 2
    },
    {
      name: 'Crunchy California Roll(8pcs)',
      id: 17,
      description:
        '(deep fried california roll, Teri & SP mayo, crunchy yam on top)',
      price: 8.95,
      url: '/images/menu/kawa_special_roll/crunchy_california_roll.jpg',
      group: 2
    },
    {
      name: 'Vernon Roll(8pcs)',
      id: 18,
      description:
        '(BBQ salmon, cucumber, cream cheese with crunchy yam, Teri & SP mayo sauce on top)',
      price: 9.95,
      url: '/images/menu/kawa_special_roll/vernon_roll.jpg',
      group: 2
    },
    {
      name: 'Crunchy Roll(8pcs)',
      id: 19,
      description:
        '(deep fried crab, avocado, SP tuna with Teri sauce & SP mayo and crunchy yam on top)',
      price: 10.95,
      url: '/images/menu/kawa_special_roll/crunchy_roll.jpg',
      group: 2
    },
    {
      name: 'Raichu Roll(8pcs)',
      id: 20,
      description:
        '(crab, cucumber, prawn tempura, avocado, cream cheese & yam crunch on top with Teri sauce and SP mayo, wrapped with egg paper)',
      price: 11.5,
      url: '/images/menu/kawa_special_roll/raichu_roll.jpg',
      group: 2
    },
    {
      name: 'Unagi Ten Roll(8pcs)',
      id: 21,
      description:
        '(asparagus, cucumber, mayo, BBQ salmon skin, deep fried unagi, green onions on top with Teri sauce)',
      price: 10.5,
      url: '/images/menu/kawa_special_roll/unagi_ten_roll.jpg',
      group: 2
    },
    {
      name: 'Rainbow Roll(8pcs)',
      id: 22,
      description:
        '(California roll with tuna, salmon, tai, tamago, ebi with Teri sauce and tobiko on top)',
      price: 10.95,
      url: '/images/menu/kawa_special_roll/rainbow_roll.jpg',
      group: 2
    },
    {
      name: 'Crab Mountain Roll(8pcs)',
      id: 23,
      description:
        '(salmon, crab and cucumber inside with salmon, crab, Teri sauce & SP mayo on top)',
      price: 11.5,
      url: '/images/menu/kawa_special_roll/crab_mountain_roll.jpg',
      group: 2
    },
    {
      name: 'Tuna Battera(6pcs)',
      id: 24,
      description:
        '(avocado, furikake, prawn tempura & SP tuna, jalapenos, torched garlic mayo on top)',
      price: 8.95,
      url: '/images/menu/kawa_special_roll/tuna_battera.jpg',
      group: 2
    },
    {
      name: 'Box Sushi(6pcs)',
      id: 25,
      description:
        '(avocado, furikake & smoked salmon, cooked shrimp, scallop, sliced lemon on top)',
      price: 8.5,
      url: '/images/menu/kawa_special_roll/box_sushi.jpg',
      group: 2
    },
    {
      name: 'Krazy Roll(10pcs)',
      id: 26,
      description:
        '(deep fried california roll with baby shrimp, green & red pepper, crispy flake, Teri & SP mayo sauce on top)',
      price: 11.95,
      url: '/images/menu/kawa_special_roll/krazy_roll.jpg',
      group: 2
    },
    {
      name: 'Red Dragon Roll(8pcs)',
      id: 27,
      description:
        '(cucumber, crab, prawn tempura with Teri & SP mayo sauce and torched, SP tuna & crispy flakes on top)',
      price: 12.95,
      url: '/images/menu/kawa_special_roll/red_dragon_roll.jpg',
      group: 2
    },
    {
      name: 'Black Tiger Roll(8pcs)',
      id: 28,
      description:
        '(crab, mango, cucumber, avocado & cream cheese with Teri & cheese sauce and avocado, ebi & tobiko on top)',
      price: 12.95,
      url: '/images/menu/kawa_special_roll/black_tiger_roll.jpg',
      group: 2
    },
    {
      name: 'Popcorn Roll(8pcs)',
      id: 29,
      description:
        '(deep fried scallop, cucumber, avocado, prawn tempura, crab, yam tempura mix on top with unagi and aioli sauce)',
      price: 12.95,
      url: '/images/menu/kawa_special_roll/popcorn_roll.jpg',
      group: 2
    },
    {
      name: 'Beauty & Beast Roll(8pcs)',
      id: 30,
      description:
        '(prawn tempura, avocado, cucumber & bulgogi with special sauce on top)',
      price: 13.5,
      url: '/images/menu/kawa_special_roll/beauty_&_beast_roll.jpg',
      group: 2
    }
  ],
  lunch_box: [
    {
      name: 'Lunch Box A',
      id: 0,
      description:
        '(Chicken teriyaki, 2pcs Prawn, 3pcs Vegetable Tempura, California Rolls and Salad)',
      price: 11.95,
      url: '/images/menu/lunch_box/lunch_box_a.jpg',
      group: 1
    },
    {
      name: 'Lunch Box B',
      id: 1,
      description:
        '(Beef teriyaki, 2pcs Prawn, 3pcs Vegetable Tempura, 1pc of each Ebi, Tuna, Salmon Nigiri and Salad)',
      price: 12.25,
      url: '/images/menu/lunch_box/lunch_box_b.jpg',
      group: 1
    },
    {
      name: 'Lunch Box C',
      id: 2,
      description:
        '(Salmon teriyaki, 2pcs Prawn, 3pcs Vegetable Tempura, 2pcs of each Tuna & Salmon and Salad)',
      price: 12.25,
      url: '/images/menu/lunch_box/lunch_box_c.jpg',
      group: 1
    },
    {
      name: 'Lunch Box D',
      id: 3,
      description:
        '(Vegetable teriyaki, Vegetable Tempura, Vegetable Rolls and Salad)',
      price: 11.25,
      url: '/images/menu/lunch_box/lunch_box_d.jpg',
      group: 1
    }
  ],
  nigiri: [
    {
      name: 'Inari (Seasoned tofu pouch)',
      id: 0,
      description: '',
      price: '$1.75',
      url: '',
      group: 1
    },
    {
      name: 'Amaebi (Sweet shrimp)',
      id: 1,
      description: '',
      price: '$2.25',
      url: '',
      group: 1
    },
    {
      name: 'Smoked Salmon',
      id: 2,
      description: '',
      price: '$2.50',
      url: '',
      group: 1
    },
    {
      name: 'BC Nigiri (BBQ salmon)',
      id: 3,
      description: '',
      price: '$2.25',
      url: '',
      group: 1
    },
    {
      name: 'Hokigai (Surf clam)',
      id: 4,
      description: '',
      price: '$2.50',
      url: '',
      group: 1
    },
    {
      name: 'Chopped Scallop',
      id: 5,
      description: '',
      price: '$2.50',
      url: '',
      group: 1
    },
    {
      name: 'Spicy Tuna',
      id: 6,
      description: '',
      price: '$2.50',
      url: '',
      group: 1
    },
    {
      name: 'Masago (Capelin roe)',
      id: 7,
      description: '',
      price: '$2.25',
      url: '',
      group: 1
    },
    {
      name: 'Tobiko (Flying fish roe)',
      id: 8,
      description: '',
      price: '$2.50',
      url: '',
      group: 1
    },
    {
      name: 'Prawn Tempura Nigiri',
      id: 9,
      description: '',
      price: '$2.50',
      url: '',
      group: 1
    },
    {
      name: 'Saba (Mackerel)',
      id: 10,
      description: '',
      price: '$2.25',
      url: '',
      group: 1
    },
    {
      name: 'Tamago (Egg) / Kani (Stick Crab)',
      id: 11,
      description: '',
      price: 'Each $1.75',
      url: '',
      group: 1
    },
    {
      name: 'Ika (Squid) / Tai (Snapper)',
      id: 12,
      description: '',
      price: 'Each $2.25',
      url: '',
      group: 1
    },
    {
      name: 'Tako (Octopus) / Toro (Tuna belly)',
      id: 13,
      description: '',
      price: 'Each $2.50',
      url: '',
      group: 1
    },
    {
      name: 'Unagi (BBQ eel) / Seared Negitoro',
      id: 14,
      description: '',
      price: 'Each $2.75',
      url: '',
      group: 1
    },
    {
      name: 'Spot prawn / Hotate (Big scallop)',
      id: 15,
      description: '',
      price: 'Each $3.00',
      url: '',
      group: 1
    },
    {
      name: 'Ebi (Prawn) / Tuna',
      id: 16,
      description: '',
      price: 'Each $2.25',
      url: '',
      group: 1
    },
    {
      name: 'Wild Salmon / AT Salmon',
      id: 17,
      description: '',
      price: '$2.50 / $2.25',
      url: '',
      group: 1
    },
    {
      name: 'Aburi sample',
      id: 18,
      description: '',
      price: '',
      url: '/images/menu/nigiri/aburi_sample.jpg',
      group: 1
    },
    {
      name: 'Prawn Tempura',
      id: 19,
      description: '',
      price: '',
      url: '/images/menu/nigiri/prawn_tempura_nigiri.jpg',
      group: 1
    },
    {
      name: 'Saba (Mackerel)',
      id: 19,
      description: '',
      price: '',
      url: '/images/menu/nigiri/saba_nigiri.jpg',
      group: 1
    },
    {
      name: 'Seared Negitoro',
      id: 20,
      description: '',
      price: '',
      url: '/images/menu/nigiri/toro_aburi_nigiri.jpg',
      group: 1
    }
  ],
  noodle: [
    {
      name: 'Vegetable Yakisoba',
      id: 0,
      description: '',
      price: 10.95,
      url: '',
      group: 1
    },
    {
      name: 'beef Yakisoba',
      id: 1,
      description: '',
      price: 12.5,
      url: '/images/menu/noodle/beef_yakisoba.jpg',
      group: 1
    },
    {
      name: 'Chicken Yakisoba',
      id: 2,
      description: '',
      price: 12.5,
      url: '/images/menu/noodle/chicken_yakisoba.jpg',
      group: 1
    },
    {
      name: 'Seafood Yakisoba',
      id: 3,
      description: '',
      price: 13.5,
      url: '/images/menu/noodle/seafood_yakisoba.jpg',
      group: 1
    }
  ],
  party_tray: [
    {
      name: 'Small Tray(25pcs, for 1~2 people)',
      id: 0,
      description:
        '(california & alaska rolls, tuna nigiri(3pcs), AT salmon nigiri(3pcs), ebi nigiri(1pc), wild salmon nigiri(1pc), hokkigai(1pc))',
      price: 28.95,
      url: '/images/menu/party_tray/small_tray.jpg',
      group: 1
    },
    {
      name: 'Large Tray(62pcs, for 3~4 people)',
      id: 1,
      description:
        '(california, dynamite, crunchy house, crunchy california, SP tuna & alaska rolls, ebi nigiri(3pcs), tuna nigiri(3pcs), wild salmon nigiri(3pcs), AT salmon nigiri(3pcs), unagi nigiri(3pcs), chopped scallop(3pcs))',
      price: 76.5,
      url: '/images/menu/party_tray/large_tray.jpg',
      group: 1
    },
    {
      name: 'Medium Tray(50pcs, for 2~3 people)',
      id: 2,
      description:
        '(California, SP tuna, dynamite, crunchy california rolls, tuna nigiri(3pcs), AT salmon nigiri(3pcs), ebi nigiri(2pcs), wild salmon nigiri(2pcs), hokkigai nigiri(2pcs))',
      price: 54.5,
      url: '/images/menu/party_tray/medium_tray.jpg',
      group: 2
    },
    {
      name: 'Roll Tray(52pcs)',
      id: 3,
      description:
        '(california, dynamite, yam, crunchy california, SP tuna, salmon avocado & alaska rolls)',
      price: 38.95,
      url: '/images/menu/party_tray/roll_tray.jpg',
      group: 2
    }
  ],
  roll_cone: {
    small: [
      {
        name: 'Tamago Roll (Egg)',
        id: 0,
        description: '',
        price: 3.0,
        url: '',
        group: 1
      },
      {
        name: 'Kappa Roll (Cucumber)',
        id: 1,
        description: '',
        price: 3.0,
        url: '',
        group: 1
      },
      {
        name: 'Salmon Roll',
        id: 2,
        description: '',
        price: 3.75,
        url: '',
        group: 1
      },
      {
        name: 'Tona Roll',
        id: 3,
        description: '',
        price: 3.75,
        url: '',
        group: 1
      }
    ],
    medium: [
      {
        name: 'California Roll',
        id: 4,
        description: '(Crab, cucumber, avocado)',
        price: 4.75,
        url: '',
        group: 1
      },
      {
        name: 'Vegetable Roll',
        id: 5,
        description: '(yam, carrot, avocado, cucumber)',
        price: 4.75,
        url: '',
        group: 1
      },
      {
        name: 'Avocado Roll',
        id: 6,
        description: '(Avacado & cucumber)',
        price: 4.95,
        url: '',
        group: 1
      },
      {
        name: 'Spicy Tuna Roll',
        id: 7,
        description: '(Cucumber)',
        price: 5.75,
        url: '',
        group: 1
      },
      {
        name: 'Spicy Salmon Roll',
        id: 8,
        description: '(Cucumber)',
        price: 5.75,
        url: '',
        group: 1
      },
      {
        name: 'Tuna Avocado Roll',
        id: 9,
        description: '',
        price: 5.95,
        url: '',
        group: 1
      },
      {
        name: 'Salmon Avocado Roll',
        id: 10,
        description: '',
        price: 5.95,
        url: '',
        group: 1
      },
      {
        name: 'Crispy Avo Roll',
        id: 11,
        description:
          '(avocado, cucumber, spicy mayo, teri sauce, crispy flakes on top)',
        price: 6.5,
        url: '',
        group: 1
      },
      {
        name: 'Deep Fried California Roll',
        id: 12,
        description: '(crab, cucumber, avocado)',
        price: 6.5,
        url: '',
        group: 1
      },
      {
        name: 'BBQ eel Roll',
        id: 13,
        description: '(BBQ eel, avocado, cucumber, masago)',
        price: 6.75,
        url: '',
        group: 1
      },
      {
        name: 'Chopped Scallop Roll',
        id: 14,
        description: '(scallop, masago, crunchy, cucumber)',
        price: 6.75,
        url: '',
        group: 1
      },
      {
        name: 'Spicy Scallop Roll',
        id: 15,
        description: '(scallop, fish egs, crunchy, cucumber)',
        price: 6.75,
        url: '',
        group: 1
      },
      {
        name: 'Alaska Roll',
        id: 16,
        description:
          '(avocado, cucumber, mayonnaise, salmon with dressing on top)',
        price: 6.95,
        url: '',
        group: 1
      },
      {
        name: 'Salmon Cream Cheese Roll',
        id: 17,
        description: '(Cucumber)',
        price: 6.95,
        url: '',
        group: 1
      },
      {
        name: 'Spicy Salmon Cream Cheese Roll',
        id: 18,
        description: '(Cucumber)',
        price: 6.95,
        url: '',
        group: 1
      },
      {
        name: 'Tuna Cream Cheese Roll',
        id: 19,
        description: '(Cucumber)',
        price: 6.95,
        url: '',
        group: 1
      },
      {
        name: 'Spicy Tuna Cream Cheese Roll',
        id: 20,
        description: '(Cucumber)',
        price: 6.95,
        url: '',
        group: 1
      },
      {
        name: 'Smoked Salmon Cream Cheese Roll',
        id: 21,
        description:
          '(cream cheese, red pepper, crab, mayo, mango, smoked salmon on top)',
        price: 7.5,
        url: '',
        group: 1
      },
      {
        name: 'Smoked Salmon Garlic Roll',
        id: 22,
        description:
          '(Cucumber, avocado, prawn tempura & smoked salmon, crispy garlic and spicy mayo on top)',
        price: 7.5,
        url: '',
        group: 1
      }
    ],
    large: [
      {
        name: 'Dynamic Roll',
        id: 23,
        description: '(prawn tempura, crab, avocado, cucumber, Teri sauce)',
        price: 5.95,
        url: '',
        group: 1
      },
      {
        name: 'BC Roll',
        id: 24,
        description: '(BBQ salmon skin, cucumber, crab, Teri sauce on top)',
        price: 5.5,
        url: '',
        group: 1
      },
      {
        name: 'Yam Roll',
        id: 25,
        description: '(deep fried yam, cucumber, Teri sauce on top)',
        price: 5.5,
        url: '',
        group: 1
      },
      {
        name: 'Chicken Teriyaki Roll',
        id: 26,
        description: '(cucumber with teriyaki sauce on top)',
        price: 5.95,
        url: '',
        group: 1
      },
      {
        name: 'Chicken Katsu Roll',
        id: 27,
        description: '(chicken cutlet, cucumber, mayo with Katsu sauce on top)',
        price: 5.95,
        url: '',
        group: 1
      },
      {
        name: 'Beef Roll',
        id: 28,
        description: '(cucumber, mayonnaise with Teri sauce on top)',
        price: 5.95,
        url: '',
        group: 1
      },
      {
        name: 'House Roll',
        id: 29,
        description: '(tuna, salmon, crab, cucumber, avocado, tamago, masago)',
        price: 7.25,
        url: '',
        group: 1
      }
    ],
    withUrl: [
      {
        name: 'Negitoro Roll',
        id: 30,
        description: '(tuna belly & green onion)',
        price: 4.0,
        url: '/images/menu/sushi_rolls_and_cones/negitoro_roll.jpg',
        group: 1
      },
      {
        name: 'Tako Roll',
        id: 31,
        description: '(octopus)',
        price: 4.5,
        url: '/images/menu/sushi_rolls_and_cones/tako_roll.jpg',
        group: 1
      },
      {
        name: 'Gomae Roll',
        id: 32,
        description: '(spinach in black sesame sauce)',
        price: 3.75,
        url: '/images/menu/sushi_rolls_and_cones/gomae_roll.jpg',
        group: 1
      },
      {
        name: 'Real Crab California Roll',
        id: 33,
        description: '(mayo)',
        price: 7.95,
        url: '/images/menu/sushi_rolls_and_cones/real_crab_california_roll.jpg',
        group: 1
      },
      {
        name: 'Crunchy House Roll',
        id: 34,
        description:
          '(deep fried tuna, salmon, crab, avocado, Teri sauce on top)',
        price: 7.5,
        url: '/images/menu/sushi_rolls_and_cones/crunch_house_roll.jpg',
        group: 1
      }
    ]
  },
  sashimi: [
    {
      name: 'Tuna(10pcs)',
      id: 0,
      description: '',
      price: '(half) $8.50 / $16.50',
      url: '',
      group: 1
    },
    {
      name: 'AT Salmon(10pcs)',
      id: 1,
      description: '',
      price: '(half) $8.50 / $16.50',
      url: '',
      group: 1
    },
    {
      name: 'Wild Salmon(10pcs)',
      id: 2,
      description: '',
      price: '(half) $9.50 / $17.95',
      url: '',
      group: 1
    },
    {
      name: 'Spicy Salmon Sashimi',
      id: 3,
      description: '',
      price: '(half) $9.50 / $17.95',
      url: '',
      group: 1
    },
    {
      name: 'Spicy Tuna & Salmon Sashimi',
      id: 4,
      description: '',
      price: '(half) $9.50 / $17.95',
      url: '',
      group: 1
    },
    {
      name: 'Tuna & Salmon Sashimi(5pcs each)',
      id: 5,
      description: '',
      price: '(half) $8.50 / $16.50',
      url: '',
      group: 1
    },
    {
      name: 'Toro Sashimi(10pcs)',
      id: 6,
      description: '',
      price: '(half) $9.50 / $17.95',
      url: '',
      group: 1
    },
    {
      name: 'Unagi Sashimi(BBQ eel) (10pcs)',
      id: 7,
      description: '',
      price: '(half) $9.50 / $17.95',
      url: '',
      group: 1
    },
    {
      name: 'Tako Sashimi(Octopus) (10pcs)',
      id: 8,
      description: '',
      price: '(half) $9.50 / $17.95',
      url: '',
      group: 1
    },
    {
      name: 'Tuna Tataki',
      id: 9,
      description: '(Grilled tuna)',
      price: '(half) $10.95 / $18.50',
      url: '/images/menu/sashimi/tuna_tataki.jpg',
      group: 1
    },
    {
      name: 'Spicy Tuna Sashimi',
      id: 10,
      description: '',
      price: '(half) $9.50 / $17.95',
      url: '/images/menu/sashimi/spicy_tuna_sashimi.jpg',
      group: 1
    },
    {
      name: 'Assorted Sashimi(18pcs)',
      id: 11,
      description: '',
      price: 23.95,
      url: '/images/menu/sashimi/assorted_sashimi.jpg',
      group: 1
    },
    {
      name: 'Deluxe Sashimi(33pcs)',
      id: 12,
      description:
        '( Tuna(3pcs), AT salmon(3pcs), Wild Salmon(3pcs), Hokkigai(3pcs), Tako(3pcs), Red snapper(3pcs), Saba(3pcs), Ika(3pcs), Spot prawn(3pcs), toro(3pcs), Hotategai(2pcs), Tamago(1pc), kani(1pc) )',
      price: 45.95,
      url: '/images/menu/sashimi/assorted_sashimi.jpg',
      group: 1
    }
  ],
  soupAndSalad: [
    {
      name: 'Seafood Salad',
      id: 0,
      description:
        '(fresh mixed vegetables, noodle, masago, smoked salmon, crab meat, tako, tamago, house dressing)',
      price: 9.95,
      url: '/images/menu/soup_and_salad/seafood_salad.jpg',
      alt: 'Seafood Salad'
    },
    {
      name: 'Seaweed Salad',
      id: 1,
      description: '',
      price: 4.95,
      url: '/images/menu/soup_and_salad/seaweed_salad.jpg',
      alt: ''
    },
    {
      name: 'Green Salad',
      id: 2,
      description: '',
      price: '(half) $2.95 / (full) $5.50',
      url: '',
      alt: 'Green Salad'
    },
    {
      name: 'House Green Salad',
      id: 3,
      description: '(With crab meat on top)',
      price: 6.5,
      url: '',
      alt: 'House Green Salad'
    },
    {
      name: 'Crab Sunomono',
      id: 4,
      description: '',
      price: 4.95,
      url: '',
      alt: 'Crab Sunomono'
    },
    {
      name: 'Ebi Sunomono',
      id: 5,
      description: '(Cold noodle vinegar salad with shrimp on top)',
      price: 4.95,
      url: '',
      alt: 'Ebi Sunomono'
    },
    {
      name: 'Veggie Sunomono',
      id: 6,
      description: '(Avocado, cucumber on top)',
      price: 4.5,
      url: '',
      alt: 'Veggie Sunomono'
    },
    {
      name: 'Spicy Sunomono',
      id: 7,
      description: '',
      price: 3.95,
      url: '',
      alt: 'Spicy Sunomono'
    },
    {
      name: 'Tako Sunomono',
      id: 8,
      description: '(Octopus on top)',
      price: 5.95,
      url: '/images/menu/soup_and_salad/tako_sunomono.jpg',
      alt: 'Tako Sunomono'
    },
    {
      name: 'Gyoza Nabe',
      id: 9,
      description: '(Japanese wonton soup)',
      price: 5.0,
      url: '/images/menu/soup_and_salad/gyoza_nabe.jpg',
      alt: 'Gyoza Nabe'
    },
    {
      name: 'Miso Soup',
      id: 10,
      description: '',
      price: 1.95,
      url: '',
      alt: 'Miso Soup'
    }
  ],
  sushi_combo: [
    {
      name: 'California Combo',
      id: 0,
      description:
        '(california roll, 1pc of each tuna, AT & wild salmon, ebi, tai nigiri)',
      price: 13.5,
      url: '/images/menu/sushi_combo/california_combo.jpg',
      group: 1
    },
    {
      name: 'Alaska Combo',
      id: 1,
      description:
        '(Alaska Roll, 1pc of each tuna, AT & wild salmon, smoked salmon, ika nigiri)',
      price: 14.5,
      url: '/images/menu/sushi_combo/alaska_combo.jpg',
      group: 1
    },
    {
      name: 'Spicy Combo',
      id: 2,
      description: '(SP tuna roll, 2pcs tuna, SP tuna sashimi)',
      price: 13.5,
      url: '/images/menu/sushi_combo/spicy_combo.jpg',
      group: 1
    },
    {
      name: 'BC Combo',
      id: 3,
      description:
        '(BC roll, 1pc of each tuna, AT & wild salmon, ebi, BC nigiri)',
      price: 13.75,
      url: '/images/menu/sushi_combo/bc_combo.jpg',
      group: 1
    },
    {
      name: 'Nigiri Sushi Combo(10pcs)',
      id: 4,
      description:
        '(1pc of each tuna, AT & wild salmon, ebi, hokkigai, tai, unagi, ika, tako, SP tuna nigiri)',
      price: 17.95,
      url: '/images/menu/sushi_combo/nigiri_sushi_combo.jpg',
      group: 1
    },
    {
      name: 'Dynamite Combo',
      id: 5,
      description:
        '(dynamite roll, 1pc of each tuna, AT & wild salmon, ebi, tai nigiri)',
      price: 13.95,
      url: '/images/menu/sushi_combo/dynamite_combo.jpg',
      group: 2
    },
    {
      name: 'Tuna & Salmon Combo',
      id: 6,
      description:
        '(tuna roll, salmon roll, 2pc tuna 2pc AT salmon, 1pc wild salmon)',
      price: 13.5,
      url: '/images/menu/sushi_combo/tuna_&_salmon_combo.jpg',
      group: 2
    },
    {
      name: 'Veggie Combo',
      id: 7,
      description:
        '(yam roll, avocado roll, 1pc of each cucumber, inari nigiri)',
      price: 11.5,
      url: '/images/menu/sushi_combo/veggie_combo.jpg',
      group: 2
    },
    {
      name: 'Roll Combo',
      id: 8,
      description: '(California, salmon, kapa)',
      price: 9.95,
      url: '/images/menu/sushi_combo/roll_combo.jpg',
      group: 2
    },
    {
      name: 'Small Roll Combo',
      id: 9,
      description: '(kappa, tamago, tuna, salmon)',
      price: 11.5,
      url: '/images/menu/sushi_combo/small_roll_combo.jpg',
      group: 2
    }
  ],
  tempura: [
    {
      name: 'Yam Tempura(6pcs)',
      id: 0,
      description: '',
      price: 8.25,
      url: '',
      group: 1
    },
    {
      name: 'Prawn Tempura(4pcs)',
      id: 1,
      description: '',
      price: 7.5,
      url: '',
      group: 1
    },
    {
      name: 'Prawn Tempura(6pcs)',
      id: 2,
      description: '',
      price: 9.95,
      url: '',
      group: 1
    },
    {
      name: 'Veggie Tempura(6pcs)',
      id: 3,
      description: '',
      price: 7.75,
      url: '',
      group: 1
    },
    {
      name: 'Ika Tempura(6pcs)',
      id: 4,
      description: '',
      price: 9.5,
      url: '',
      group: 1
    },
    {
      name: 'Assorted Tempura',
      id: 4,
      description: '(2pcs Prawn & 4pcs veggie)',
      price: 8.95,
      url: '',
      group: 1
    },
    {
      name: 'Chicken Tempura(8pcs)',
      id: 5,
      description: '',
      price: 10.95,
      url: '/images/menu/tempura/chicken_tempura.jpg',
      group: 1
    },
    {
      name: 'Deluxe Tempura',
      id: 6,
      description: '(4pcs fish, 4pcs prawn & 8pcs vegie)',
      price: 15.5,
      url: '/images/menu/tempura/deluxe_tempura.jpg',
      group: 2
    },
    {
      name: 'Kani Tempura(6pcs)',
      id: 7,
      description: '',
      price: 5.95,
      url: '/images/menu/tempura/kani_tempura.jpg',
      group: 2
    }
  ],
  teriyaki: [
    {
      name: 'Beef Teriyaki',
      id: 0,
      description: '',
      price: 11.95,
      url: '',
      group: 1
    },
    {
      name: 'Chicken Teriyaki',
      id: 1,
      description: '',
      price: 11.95,
      url: '',
      group: 1
    },
    {
      name: 'Seafood Teriyaki',
      id: 2,
      description: '',
      price: 12.95,
      url: '',
      group: 1
    },
    {
      name: 'Vegetable Teriyaki',
      id: 3,
      description: '',
      price: 9.95,
      url: '',
      group: 1
    },
    {
      name: 'Beef Teriyaki',
      id: 4,
      description: '',
      price: 11.95,
      url: '/images/menu/teriyaki/beef_teriyaki.jpg',
      group: 1
    },
    {
      name: 'Salmon Teriyaki',
      id: 5,
      description: '',
      price: 12.95,
      url: '/images/menu/teriyaki/salmon_teriyaki.jpg',
      group: 1
    },
    {
      name: 'Chicken Teriyaki',
      id: 6,
      description: '',
      price: 11.95,
      url: '/images/menu/teriyaki/chicken_teriyaki.jpg',
      group: 1
    },
    {
      name: 'Tofu Teriyaki',
      id: 7,
      description: '',
      price: 10.95,
      url: '/images/menu/teriyaki/tofu_teriyaki.jpg',
      group: 1
    }
  ],
  udon: [
    {
      name: 'Veggie / Tofu Udon',
      id: 0,
      description: '',
      price: '$9.50 / $9.95',
      url: '',
      group: 1
    },
    {
      name: 'Beef Udon',
      id: 1,
      description: '',
      price: 10.5,
      url: '',
      group: 1
    },
    {
      name: 'Seafood Udon',
      id: 2,
      description: '',
      price: 12.5,
      url: '',
      group: 1
    },
    {
      name: 'Chicken Katsu Udon',
      id: 3,
      description: '',
      price: 11.5,
      url: '/images/menu/udon/chicken_katsu_udon.jpg',
      group: 1
    },
    {
      name: 'Tempura Udon',
      id: 4,
      description: '',
      price: 11.95,
      url: '/images/menu/udon/tempura_udon.jpg',
      group: 1
    }
  ]
};

export default data;
