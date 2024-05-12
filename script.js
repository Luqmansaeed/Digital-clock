let hour = document.getElementById("hrs");
let mints = document.getElementById("min");
let second = document.getElementById("sec");


setInterval(()=>{  
    let currentTime = new Date();

    hour.innerHTML = (currentTime.getHours()<10?"0":"") +currentTime.getHours();
    mints.innerHTML = (currentTime.getMinutes()<10?"0":"")  + currentTime.getMinutes();
    second.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

},1000) ;