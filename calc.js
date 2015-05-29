button = document.getElementById("submitButton");
var num1, num2, answer;
var dropDown = document.getElementById("DropdownMenu1");
var input1 = document.getElementById('Number1');
var input2 = document.getElementById('Number2');var display = document.getElementById('Answer');
button.addEventListener("click", doMath);
dropDown.addEventListener("change", hideMe);

function hideMe(){
   if(dropDown.value === "T"){
       input1.style.display = "none";
   }
   else input1.style.display = "inline-block";
}


function hideMe(){
   if(dropDown.value === "√"){
       input1.style.display = "none";
   }
   else input1.style.display = "inline-block";
}



function doMath(){
       console.log("hi");
   if (dropDown.value == "+"){
      num1 = input1.value;
      num2 = input2.value;answer = parseInt(num1) + parseInt(num2);
      display.innerHTML = answer;
  }
   if (document.getElementById("DropdownMenu1").value == "-"){
      var num1 = document.getElementById('Number1').value;
      var num2 = document.getElementById('Number2').value;
      var answer = parseInt(num1) - parseInt(num2);
       document.getElementById('Answer').innerHTML = answer;
  }
 if (document.getElementById("DropdownMenu1").value == "x"){
   var num1 = document.getElementById('Number1').value;
   var num2 = document.getElementById('Number2').value;
   var answer = parseInt(num1) * parseInt(num2);
    document.getElementById('Answer').innerHTML = answer;
 }
  if (document.getElementById("DropdownMenu1").value == "÷"){
   var num1 = document.getElementById('Number1').value;
   var num2 = document.getElementById('Number2').value;
   var answer = parseInt(num1) / parseInt(num2); document.getElementById('Answer').innerHTML = answer;
  }
       if (document.getElementById("DropdownMenu1").value == "√"){
   
   var num2 = document.getElementById('Number2').value;
   var answer = Math.sqrt(parseInt(num2));document.getElementById('Answer').innerHTML = answer;
  }
 if (document.getElementById("DropdownMenu1").value == "T"){
   
   var num2 = document.getElementById('Number2').value;
   var answer = Math.tan (parseInt(num2));document.getElementById('Answer').innerHTML = answer;
  }
}