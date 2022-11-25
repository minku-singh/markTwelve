const lengthIp = document.querySelectorAll(".length-ip");
const calculateHypotenuseBtn = document.querySelector("#calculate-hypotenuse");
const msg = document.querySelector("#msg");

function calculateH(base, height){
    const h = Math.sqrt(base*base + height*height);
    return h;
}

function showMsg(message){
    msg.innerText = message;
    msg.style.display = "block";
}

function findHypotenuse(){
    const base = Number(lengthIp[0].value);
    const height = Number(lengthIp[1].value);

    if(base === 0 || height === 0){
        showMsg("❌ Enter valid Input");
    }else{
        const h = calculateH(base, height);
    
        showMsg("🔺The length of Hypotenuse is "+h+" units");
    }

}

calculateHypotenuseBtn.addEventListener("click", findHypotenuse);
