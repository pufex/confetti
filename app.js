let loopTimes = 0, i = 100;



const fromPixel = (arg = "") => {
    return Number(arg.slice(0, arg.length-2));
}

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
    const confettiContainer = document.querySelector(".confetti-container")
    let colours = ["#FF0000", "#00FF00", "#0000FF", "FFFFFF"];
    confettis.forEach((confetti) =>{
        let pickedColor = Math.floor(Math.random()*5);
        if(pickedColor != 5) {
            confetti.style.background = colours[Math.floor(Math.random()*5)];
        }else{
            pickedColor = Math.floor(Math.random()*5);
            confetti.style.background = colours[Math.floor(Math.random()*5)];
        }

        let sidePick, toggleX, toggleY;
        
        sidePick = Math.round(Math.random()-1);
        // console.log(sidePick);
        toggleX = Math.floor(Math.random()*200+50);
        // console.log(toggleX);
        toggleY = Math.floor(Math.random()*confettiContainer.clientHeight/2)
        // console.log(toggleY);
        
        confetti.offsetInitialX = toggleX;
        // console.log(confetti.offsetInitialX);
        confetti.style.left = toPixel(confetti.offsetInitialX);
        confetti.offsetRandomX = Math.floor(Math.random()*50);

        confetti.offsetInitialY = toggleY;
        confetti.style.top = toPixel(confetti.offsetInitialY);
        confetti.offsetRandomY = Math.floor(Math.random()*50);

        // console.log()
    })

    return confettis;
}

const startAnimation = (a, amount, SpeedX, confettis) => {
    const confettiContainer = document.querySelector(".confetti-container");
    for(loopTimes = 0; loopTimes < 1000; loopTimes++){
        let setTimeoutId = setTimeout(() => {
            // console.log(setTimeoutId);
            confettis.forEach((confetti) =>{ 
                let x = fromPixel(confetti.style.left);
                let y = fromPixel(confetti.style.top);
                if(y <= confettiContainer.clientHeight && x <= confettiContainer.clientWidth){
    
    
                    // console.log(confetti.offsetLeft);
                    // console.log(confetti.offsetInitialX);
                    // console.log(confetti.offsetRandomX);
                    // console.log(confetti.offsetTop);
                    // console.log(confetti.offsetInitialY);
                    // console.log(confetti.offsetRandomY);
    
                    x = x + SpeedX;
                    y = a*Math.pow((x + (confetti.offsetInitialX + confetti.offsetRandomX)),2)+confetti.offsetInitialY - confetti.offsetRandomY;
    
                    x = x.toString() + "px";
                    y = y.toString() + "px";
    
                    confetti.style.left =  x;
                    confetti.style.top = y;
    
                    i--;
                }else{
                    amount--;
                    confetti.remove();
                }
            })
        }, 0);
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



const trigger = document.querySelector("#confetti-trigger");

trigger.addEventListener("click", () => {
    clearInterval(1);
    animateConfettis(50, 1, 0.001);
});

