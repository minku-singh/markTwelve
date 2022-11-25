const lengthIp = document.querySelectorAll(".length-ip");
const calculateAreaBtn = document.querySelector("#calculate-area");
const msg = document.querySelector("#msg");

function showMsg(message){
    msg.innerText = message;
    msg.style.display = "block";
}

function calculateArea(){
    const base = Number(lengthIp[0].value);
    const height = Number(lengthIp[1].value);

    if(base === 0 || height === 0){
        showMsg(`❌ Enter valid Input`);
    } else{
        const area = (1/2)*(base*height);
        showMsg(`🔺 Area of the triangle is ${area} square units`);
    }
}

calculateAreaBtn.addEventListener("click", calculateArea);