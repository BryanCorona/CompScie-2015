/**
* Created with Shrek Simulator.
* User: SuperPowerDonkey
* Date: 2015-02-25
* Time: 06:23 PM
* To change this template use Tools | Templates.
*/
 
$(document).ready(function(){
//instructions
document.getElementById("count").innerHTML = "Click Shrek a scrub to earn points and buy more things. Buy everything to win!";

//these functions count up the code and have different effects
//this adds one point whenever you click
    var counter = 0
    function countUpByOne(){
        counter=counter+1
        return counter
    }  
    //this subtracts 100 points when you buy sunglasses
    function subtractOnehundred(){
        counter=counter-100
        return counter
    }
    //this multiplies the points
   //function dankx2(){
        //counter=counter*2
        //return counter
    //}
    


    $('#button').click(function(){
        $('#count').html(countUpByOne) 
    });

    $('#dankButton').click(function(){
        if(counter>=100){
            $('#dankShades').css('visibility','visible');
        
        }
    });
    
    
    $('#dankButton').click(function(){
        if(counter>=100){
            $('#dankShades').css('visibility','visible');
        }
    });
    
    
    $('#dankButton').click(function(){
        if(counter>=100){
        $('#count').html(subtractOnehundred)
        }
    });
   
       //if 
       //('#dankButton').click(function(){
         //  $('#count').html(dankx2)
       //});                              
            
});


       