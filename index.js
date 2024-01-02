let cards=[];
let sum=0;
let islive=false;
let hasBlackJack=false;
let massage=" ";
let massageEl=document.getElementById("massage-el");
let sumEl=document.getElementById("sum-el");
let cardEl=document.getElementById("card-el");
let outEl= document.getElementById("out_game");
function randomcard(){
  let x=Math.floor(Math.random()*12)+1;
  console.log(x);
  if(x==1) return 11;
  else if(x>10) return 10;
  return x;
}
function startGame(){
  islive=true;
  let firstcard=randomcard();
  let secondcard=randomcard();
  sum=firstcard+secondcard;
  cards=[firstcard, secondcard];
  cardEl.innerText="Cards: " + cards[0] + " "+cards[1];
  randerGame();
    outEl.innerText="";
}
function randerGame(){
  sumEl.innerText="Sum: "+sum;
  if(sum<21){ 
    massage="Do you want to draw a new card?"
  }
  else if(sum==21){
    massage="You've got Blackjack."
    hasBlackJack=true;
    islive=false;
  }
  else{
    massage="You are out of the game."
    islive=false;
    hasBlackJack=false;
  }
  massageEl.innerText=massage;
}
function newcard(){
  if(islive===true){
    let new_cards=randomcard();
    sum+=new_cards;
    cards.push(new_cards);
    randerGame();
     cardEl.innerText+=" "+new_cards;
  }
  else if(hasBlackJack){
       outEl.innerText="You have won the Game, Start new Game";
  }
  else {
    outEl.innerText="You are out of the game, Start new Game";
  }
}