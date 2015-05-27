    //the object for the player
var player = {
    elem: document.getElementById("player"),
    xpos: 0,
    ypos: 0,
}
    //this enables the "keydown" event
document.addEventListener("keydown", move);

var myPoints=0;
var myPoints2=0;
var myPoints3=0;
//this function moves the player object with the arrow keys
function move(event){
    player.elem.innerHTML ="Gold Digger";
    //change x or y position acordingly
    //left arrow
  if(event.keyCode===37 && player.xpos>0){
      player.xpos--;
  } //right arrow
  if(event.keyCode===39 && player.xpos<4 ){
      player.xpos++;
  }//up arrow
  if(event.keyCode===38 && player.ypos>0){
      player.ypos--;
  } //down arrow
  if(event.keyCode===40 && player.ypos<4){
     player.ypos++ 
  }
    
    //make it dissapear
    player.elem.parentNode.removeChild(player.elem);
    
    
    //makes it apear 
    document.getElementById("spot" + player.xpos + player.ypos).appendChild(player.elem);
    
    position1();
    position2();
    position3();    
}
                                                                                                                                                                                                 
    //this counts points for the first gold piece
function position1(){
    if(player.xpos===3 && player.ypos===0){
        myPoints++;
       document.getElementById("points1").innerHTML= myPoints;
  }


}
    //this counts points for the second gold piece
function position2(){
    if(player.xpos===4 && player.ypos===2){
        myPoints2++;
       document.getElementById("points2").innerHTML= myPoints2;
  }


}
    //this counts points for the third gold peice
function position3(){
    if(player.xpos===1 && player.ypos===4){
        myPoints3++;
       document.getElementById("points3").innerHTML= myPoints3;
  }


}






