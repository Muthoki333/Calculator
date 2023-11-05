console.log("Code is being executed");



let number1 = null;
let number2 = null;
let operator=null;
var display = document.getElementById("myDisp");


document.querySelectorAll('.operator').forEach(el=>{
  el.addEventListener("click",()=>{
    handleOperator(el.value);});
  });

document.querySelectorAll('.button').forEach(el=>{
  el.addEventListener("click",()=>{
  
    handleNumber(el.value);});
  });

  document.getElementById("C").addEventListener("click",()=>{clearCalculator()} );
  document.getElementById("equals").addEventListener("click", ()=>{calculate()});

function calculate(){
  if(number1 != null && number2 != null && operator != null){
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    switch(operator){
      case "*":
        displaynumbers = number1 * number2;
        break;

      case "+":
        displaynumbers = number1 + number2;
        
        break;
      case "-":
        displaynumbers = number1 - number2;
        break;

      case "/":
        displaynumbers = number1 / number2;
        break;
      default:
        
        break;


    }

    displayEquation(displaynumbers);
    operator=null;
    number2 = null;
  }

}
let displaynumbers = "";



function displayEquation(value){
  display.innerHTML = value;
  
}
function handleOperator(op){
  if(number1===null){
    alert("You have to enter atleast one number")
  }else{  
    operator = op;
    displaynumbers += operator;
    displayEquation(displaynumbers);
  }
 
}
function handleNumber(number){
  if(operator===null){
    if(number1===null){
      number1 = number;
      displaynumbers = number1;
      displayEquation(displaynumbers);
      
    }else {
      number1 += number;
      displaynumbers = number1;
      displayEquation(displaynumbers);
      console.log(number1);
    }
}else{
   if(number2 === null){
      number2 = number;
      displaynumbers += number2;
      displayEquation(displaynumbers);
    }else{
      number2+=number;
      displaynumbers +=  number2
      displayEquation(displaynumbers);
      console.log("Second" + number2);
    }
  }
}

function clearCalculator(){
  number1 = null;
  number2 = null;
  operator = null;
  displayEquation("0");

}

