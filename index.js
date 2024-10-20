for (let i = 0 ; i < document.querySelectorAll("button").length ; i++)
    {
        document.addEventListener("keypress", function(event) {
            buttonAnimation(event.key);
            switch(event.key) {
                case "w":
                    tom1();
                    break;
                case "a":
                    tom2();
                    break;
                case "s":
                    tom3();
                    break;
                case "d":
                    tom4();
                    break;
                case "j":
                    snare();
                    break;
                case "k":
                    kick();
                    break;
                case "l":
                    crash();
                    break;
                default:
                    break;
            }
        });
        break;
    }
for (let i = 0 ; i < document.querySelectorAll("button").length ; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        buttonAnimation(document.querySelectorAll("button")[i].innerHTML);
        switch ( document.querySelectorAll("button")[i].innerHTML) {
            case "w":
                tom1();
                break;
            case "a":
                tom2();
                break;
            case "s":
                tom3();
                break;
            case "d":
                tom4();
                break;
            case "j":
                snare();
                break;
            case "k":
                kick();
                break;
            case "l":
                crash();
                break;
            default:
                break;
        };
    });
        
       
      
    }
function handleClick() {
    alert("I got clicked");
}
function tom1() {
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
}
function tom2() {
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
}
function tom3() {
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
}
function tom4() {
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
}
function snare() {
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
}
function kick() {
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
}
function crash() {
    var drum = new Audio("sounds/crash.mp3");
    drum.play();
}
document.addEventListener("keypress", function(event) {
    console.log(event);
});
function buttonAnimation(currentkey)
{
    var activeButton = document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        button.classList.remove("pressed");
      }, 300); 
    
}
