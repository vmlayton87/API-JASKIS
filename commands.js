// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis
use jaskis
db

// 2. Create a collection called bounties
db.createCollection(`bounties`)
show collections

// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
db.bounties.insertOne({
    name: "Thanoceros",
    species: "Rhinoceros",
    location: "Grasslands",
    wantedFor: "Eating too much grass",
    client: "Songbird",
    reward: 10000,
    captured: false
  })

// 2. Query for all bounties in the bounties collection
db.bounties.find()

// 3. Insert many bounties at once using the given objects
db.bounties.insertMany([
    {
      "name": "Lokinkajou",
      "species": "Kinkajou",
      "location": "Tropical rainforest",
      "wantedFor": "Partying too late at night",
      "client": "White tiger",
      "reward": 1000,
      "captured": false
    },
    {
      "name": "Nebullama",
      "species": "Llama",
      "location": "Grasslands",
      "wantedFor": "Drinking all the water from the ocean",
      "client": "Songbird",
      "reward": 2500,
      "captured": false
    },
    {
      "name": "Polarwind",
      "species": "Polar Bear",
      "location": "Arctic",
      "wantedFor": "Not hibernating",
      "client": "Sabertooth",
      "reward": 4000,
      "captured": false
    },
    {
      "name": "Wrecking Crows",
      "species": "Crow",
      "location": "Grasslands",
      "wantedFor": "Cawing too loudly",
      "client": "Red wolf",
      "reward": 40000,
      "captured": false
    },
    {
      "name": "Grandhog",
      "species": "Groundhog",
      "location": "Woodlands",
      "wantedFor": "Not coming out of the hole on time and prolonging winter",
      "client": "Songbird",
      "reward": 50000,
      "captured": false
    },
    {
      "name": "Grim Panda",
      "species": "Giant Panda",
      "location": "Temperate forest",
      "wantedFor": "Eating all the bamboo",
      "client": "Red wolf",
      "reward": 5000,
      "captured": false
    }
  ])

// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
db.bounties.find({location:`Grasslands`})

// 2. Query for all bounties with a reward worth 10000 or more
db.bounties.find({reward:{$gt: 10000}})

// 3. Query for all bounties, but exclude the client attribute from being shown
db.bounties.find({},{client:0})

// 4. Query for a Groundhog in the Woodlands
db.bounties.find({
    $and: [
      {species:`Groundhog`},
      {location:`Woodlands`}
    ]
    })

// Update and Delete
// 1. Update the reward for Polarwind to 10000
db.bounties.updateOne(
    {name:`Polarwind`},
    {$set: {reward:10000}}
)
// 2. Remove Lokinkajou
db.bounties.deleteOne({name:`Lokinkajou`})

// 3. Delete all bounties sent by Songbird
db.bounties.deleteMany({client:`Songbird`})

// 4. Update all captured statuses to true
db.bounties.updateMany({},{$set:{captured:true}})

//  BONUS
// Make a new collection called scavengers
db.createCollection(`scavengers`)

// Insert all the given data
db.scavengers.insertMany([
  {
    "name": "Captain A'Meerkat",
    "joined": new Date('2011-07-22'),
    "power": "Thermoregulation",
    "weapon": "Shovel",
    "captured": [
      {
        "name": "Grim Panda",
        "species": "Giant Panda",
        "location": "Temperate forest",
        "wantedFor": "Eating all the bamboo",
        "client": "Red wolf",
        "reward": 5000,
        "captured": true
      }
    ]
  },
  {
    "name": "The Hamster",
    "joined": new Date('2011-07-22'),
    "power": "Stealth",
    "weapon": "Giant rolling ball",
    "captured": [
      {
        "name": "Polarwind",
        "species": "Polar Bear",
        "location": "Arctic",
        "wantedFor": "Not hibernating",
        "client": "Sabertooth",
        "reward": 10000,
        "captured": true
      }
    ]
  },
  {
    "name": "Thowl",
    "joined": new Date('2011-07-22'),
    "power": "Night vision",
    "weapon": "Lasers",
    "captured": [
      {
        "name": "Thanoceros",
        "species": "Rhinoceros",
        "location": "Grasslands",
        "wantedFor": "Eating too much grass",
        "client": "Songbird",
        "reward": 10000,
        "captured": true
      },{
        "name": "Polarwind",
        "species": "Polar Bear",
        "location": "Arctic",
        "wantedFor": "Not hibernating",
        "client": "Sabertooth",
        "reward": 10000,
        "captured": true
      }
    ]
  },
  {
    "name": "Brown Recluse",
    "joined": new Date('2011-07-22'),
    "power": "Inciting fear into the heart of enemies",
    "weapon": "Webs",
    "captured": [
      {
        "name": "Thanoceros",
        "species": "Rhinoceros",
        "location": "Grasslands",
        "wantedFor": "Eating too much grass",
        "client": "Songbird",
        "reward": 10000,
        "captured": true
      },{
        "name": "Wrecking Crows",
        "species": "Crow",
        "location": "Grasslands",
        "wantedFor": "Cawing too loudly",
        "client": "Red wolf",
        "reward": 40000,
        "captured": true
      }
    ]
  },
  {
    "name": "Falconeye",
    "joined": new Date('2011-07-22'),
    "power": "Flight",
    "captured": [
      {
        "name": "Wrecking Crows",
        "species": "Crow",
        "location": "Grasslands",
        "wantedFor": "Cawing too loudly",
        "client": "Red wolf",
        "reward": 40000,
        "captured": true
      }
    ]
  },
  {
    "name": "Scarlet Wolf",
    "joined": new Date('2015-05-01'),
    "power": "Hunting",
    "captured": [
      {
        "name": "Grim Panda",
        "species": "Giant Panda",
        "location": "Temperate forest",
        "wantedFor": "Eating all the bamboo",
        "client": "Red wolf",
        "reward": 5000,
        "captured": true
      }
    ]
  },
  {
    "name": "Black Jaguar",
    "joined": new Date('2018-04-23'),
    "power": "Camoflauge",
    "captured": [
      {
        "name": "Grim Panda",
        "species": "Giant Panda",
        "location": "Temperate forest",
        "wantedFor": "Eating all the bamboo",
        "client": "Red wolf",
        "reward": 5000,
        "captured": true
      },{
        "name": "Thanoceros",
        "species": "Rhinoceros",
        "location": "Grasslands",
        "wantedFor": "Eating too much grass",
        "client": "Songbird",
        "reward": 10000,
        "captured": true
      }
    ]
  }
])

// Find all scavengers who joined the team after December 31, 2011
db.scavengers.find( { joined: { $gte: new Date(2011-12-31) } }, { name: 1 }  )

// Find all scavengers who helped catch Thanoceros
db.scavengers.find( { "captured.name": `Thanoceros` } , { name: 1 }  )

// Find all scavengers who helped catch an animal bounty with a reward greater than $11000
db.scavengers.find( { "captured.reward": {$gte: 11000} }, {name:1} )

// Find all Scavengers that don't have a weapon
db.scavengers.find( { weapon: null } , { name: 1 }  )