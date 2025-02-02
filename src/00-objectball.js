
function gameObject(){
   return {
       "home":{
          "teamName":"Brooklyn Nets",
          "colors":["black","white"],
          "players":{
             "Alan Anderson":{
                 Number :0,	
                 Shoe:16,	
                Points:22,	
                Rebounds:12,	
                Assists:12,	
                Steals:3,	
                Blocks:1,	
                SlamDunks:1
            },
             "Reggie Evans":{
                Number :30,	
                Shoe:14,	
                Points:12,	
                Rebounds:12,	
                Assists:12,	
                Steals:12,	
                Blocks:12,	
                SlamDunks:7
            },
             "Brook Lopez":{
                Number :11,	
                Shoe:17,	
                Points:17,	
                Rebounds:19,	
                Assists:10,	
                Steals:3,	
                Blocks:1,	
                SlamDunks:15 
             },
             "Mason Plumlee":{
                Number :1,	
                Shoe:19,	
                Points:26,	
                Rebounds:12,	
                Assists:6,	
                Steals:3,	
                Blocks:8,	
                SlamDunks:5
             },
             "Jason Terry":{
                Number :31,	
                Shoe:15,	
                Points:19,	
                Rebounds:2,	
                Assists:2,	
                Steals:4,	
                Blocks:11,	
                SlamDunks:1
            },

        },
    },
     "away":{
        "teamName":"Charlotte Hornets",
        "colors":["Turquoise", "Purple"],
        "players":{
            "Jeff Adrien":{
                Number :4,	
                Shoe:18,	
               Points:10,	
               Rebounds:1,	
               Assists:1,	
               Steals:2,	
               Blocks:7,	
               SlamDunks:2
           },
            "Bismak Biyombo":{
               Number :0,	
               Shoe:16,	
               Points:12,	
               Rebounds:4,	
               Assists:7,	
               Steals:7,	
               Blocks:15,	
               SlamDunks:10
           },
            "DeSagna Diop":{
               Number :2,	
               Shoe:14,	
               Points:24,	
               Rebounds:12,	
               Assists:12,	
               Steals:4,	
               Blocks:5,	
               SlamDunks:5 
            },
            "Ben Gordon":{
               Number :8,	
               Shoe:15,	
               Points:33,	
               Rebounds:3,	
               Assists:2,	
               Steals:1,	
               Blocks:1,	
               SlamDunks:0
            },
            "Brendan Haywood":{
               Number :33,	
               Shoe:15,	
               Points:6,	
               Rebounds:12,	
               Assists:12,	
               Steals:22,	
               Blocks:5,	
               SlamDunks:12
            }
        }

    }
  }
}
const game = gameObject()
const homeTeam = game.home
const awayTeam = game.away
const players = [game.home.players,game.away.players]

function allPlayers(){
    const all = players.map(function(team){
        const newArr = []
        for (const player in team ){
            newArr.push({nameOfPlayer:player, ...team[players]})
        }
        return newArr
    })
    return all.flat()
}


function findPlayers(playerName){
   return allPlayers().find(player => {
    return player.nameOfPlayer === playerName
  })
}

function numPointsScored(playersName){
   return findPlayers(playersName).points
}

function shoeSize(playersName){
    return findPlayers(playersName).shoe
}

function teamColors(teamName){
    if(teamName === homeTeam.teamName){
        return homeTeam.colors
    }
    return awayTeam.colors
}

function longesName(){
    const longesName = { length: 0 , player: ""}
    for(const player of allPlayers()){
        if (player.nameOfPlayer.length > longesName.length){
            longesName.length = player.nameOfPlayer.length
            longesName.length = player.nameOfPlayer
        }
    }
    return longesName.player
}
function mostSteals(){
    const mostSteals = { steals:0, player:""}
    for (const player of allPlayers){
        if (player.steals > mostSteals.steals){
            mostSteals.steals = player.steals
            mostSteals.player = player.nameOfPlayer

        }
    }
    return mostSteals.player
}

function doesLongStealAton(){
    return mostSteals() === longesName()
}