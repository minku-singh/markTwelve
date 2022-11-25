const angleOfTriangleIp = document.querySelectorAll(".angle-of-triangle");
const isTriangleBtn = document.querySelector("#is-triangle");
const msg = document.querySelector("#msg");

function findSum(angle1, angle2, angle3){
    let sum = 0;
    for(let i = 0; i < angleOfTriangleIp.length; i++){
        sum += Number(angleOfTriangleIp[i].value);
    }
    return sum;
}

function showMsg(message){
    msg.innerText = message;
    msg.style.display = "block";
}

function findIsTriangle(){
    const sum = findSum(angleOfTriangleIp[0].value, angleOfTriangleIp[1].value, angleOfTriangleIp[2].value);
    
    msg.style.display = "none";

    if(sum === 180){
        showMsg("🎉 Yess, these angles form a triangle!!")
    }else{
        showMsg("❌ Oh Oh, these angles don't form a triangle!!")
    }
}

isTriangleBtn.addEventListener("click", findIsTriangle);