// let onebox = document.getElementsByClassName("one");
// let twobox = document.getElementsByClassName("two");
// let threebox =document.getElementsByClassName("three");

document.addEventListener('DOMContentLoaded', function  () {
let buttons = document.getElementsByClassName("detailsbutton");
let selectedButton = null;
const myfunction = () =>{
  for(let button of buttons){
    button.addEventListener("click",(event)=>{

        if(selectedButton){
            selectedButton.style.backgroundColor="";
        }
        event.target.style.backgroundColor="#ffff";
        selectedButton=event.target;

    })
  }
};myfunction();

});