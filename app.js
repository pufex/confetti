let loopTimes = 0, i = 100;

const toPixel = (arg) => {
    return arg.toString() + "px";
}

const removePreviousConfettis = () => {
    let confettis = document.querySelectorAll(".confetti");
    confettis.forEach((confetti) => {
        confetti.remove();
    })
}

const createNewConfettis = (amount) =>{
    const confettiContainer = document.querySelector(".confetti-container");
    for(let i = 0; i < amount; i++){
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confettiContainer.appendChild(confetti);
    }
}

const setConfettis = () => {
    const confettis = document.querySelectorAll(".confetti");
    confettis.forEach((confetti) =>{
        confetti.offsetInitialX = 30;
        confetti.style.left = toPixel(confetti.offsetInitialX);
        confetti.offsetLeft = confetti.offsetInitialX; 
        confetti.offsetRandomX = 10;
        confetti.offsetInitialY = 30;
        confetti.style.top = toPixel(confetti.offsetInitialY);
        confetti.offsetTop= confetti.offsetInitialY; 
        confetti.offsetRandomY = 10;

        // confetti.offsetInitialX = Math.floor((Math.random()*confettiContainer.clientWidth));
        // confetti.offsetLeft = confetti.offsetInitialX; 
        // confetti.offsetRandomX = Math.floor((Math.random()*50 + 50));
        // confetti.offsetInitialY = Math.floor((Math.random()*confettiContainer.clientWidth));
        // confetti.offsetTop= confetti.offsetInitialY; 
        // confetti.offsetRandomY = Math.floor((Math.random()*50 + 50));
    })

    return confettis;
}

const startAnimation = (a, amount, SpeedX, confettis) => {
    for(loopTimes = 0; loopTimes < 100; loopTimes++){
        setTimeout(() => {
            confettis.forEach((confetti) =>{ 
                // confetti.offsetTop <= confettiContainer.clientHeight && confetti.offsetLeft <= confettiContainer.clientWidth
                let x = confetti.style.left;
                let y = confetti.style.top;
                if(i > 0){
    
                    x = Number(x.slice(0, x.length-2));
                    y = Number(y.slice(0, y.length-2));
    
                    console.log(confetti.offsetLeft);
                    console.log(confetti.offsetInitialX);
                    console.log(confetti.offsetRandomX);
                    console.log(confetti.offsetTop);
                    console.log(confetti.offsetInitialY);
                    console.log(confetti.offsetRandomY);
    
                    x = x + SpeedX;
                    y = a*Math.pow((confetti.offsetLeft + (confetti.offsetInitialX + confetti.offsetRandomX)),2)+confetti.offsetInitialY - confetti.offsetRandomY;
    
                    x = x.toString() + "px";
                    y = y.toString() + "px";
    
                    confetti.style.left =  x;
                    confetti.style.top = y;
    
                    console.log(confetti.style.top);
                    console.log(confetti.style.left);
                    i--;
                }else{
                    amount--;
                }
            })
        confettis = document.querySelectorAll(".confetti");
        console.log(amount);
        }, 20*loopTimes);
    }
}

const animateConfettis = (amount, SpeedX, a) => {
    const confettiContainer = document.querySelector(".confetti-container");

    removePreviousConfettis();
    createNewConfettis(amount);

    let confettis = setConfettis();

    startAnimation(a, amount, SpeedX, confettis);
    loopTimes = 0, i = 100;
}



// const confetti = document.querySelector(".confetti");
// confetti.style.left = "200px";
// confetti.style.top = "400px";

// let i = 0, direction = -1;

// const moveElement = () => {
//     let Left = confetti.style.left;
//     let newPosition = Number(Left.slice(0, Left.length-2))+5;
//     confetti.style.left = newPosition.toString()+"px";

//     i++;
//     console.log(i);
//     if(i < 22){
//         window.setTimeout(moveElement(), 1000);
//     }
// }


const trigger = document.querySelector("#confetti-trigger");

trigger.addEventListener("click", () => {
    animateConfettis(1, 5, 0.005);
});

// const back = document.querySelector("#go-back");

// back.addEventListener("click", () => {
//     i = 0, direction = -1;
//     console.log(i);
//     moveElement(5);
// })

// const forward = document.querySelector("#go-forward");

// forward.addEventListener("click", () => {
//     i = 0, direction = 1;
//     console.log(i);
//     moveElement(-5);
// })