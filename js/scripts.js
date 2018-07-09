//Backend logic
 let firstplayer ="";
 let secondplayer ="";

 let rollDice = function(){
   return Math.floor(6*random()) + 1;
 }

//Frontend logic
$(document).ready(function(){
  $(#start).click(function(event){
    event.preventDefault();
    firstplayer = new player(true);
    secondplayer = new player(false);
    $(#game).show();
    $(#bdy).hide();

    let player1 =$().val(.player1Name);
    $(#player1Name).text(player1);

    let player2 =$().val(.player2Name);
    $(#player2Name).text(player2);

    firstplayer.player = player1;
    secondplayer.player = player2;
  })
})
