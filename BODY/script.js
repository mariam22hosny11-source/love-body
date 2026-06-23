const secretPassword = "love";

function checkPassword(){

    let password = document.getElementById("pass").value;

    if(password === secretPassword){

        document.getElementById("content").style.display = "block";

        // 💖 تشغيل الأغنية
        document.getElementById("song").play();

        startEffects();
    }
    else{
        alert("Wrong Password ❤️");
    }
}



// 💖 قلوب طايرة
setInterval(() => {

    let heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}, 300);


// ⏳ العداد
const startDate = new Date("2025-5-22");

setInterval(() => {

    const now = new Date();
    const diff = now - startDate;

    document.getElementById("days").innerHTML =
        Math.floor(diff / (1000*60*60*24));

    document.getElementById("hours").innerHTML =
        Math.floor(diff / (1000*60*60)) % 24;

    document.getElementById("minutes").innerHTML =
        Math.floor(diff / (1000*60)) % 60;

    document.getElementById("seconds").innerHTML =
        Math.floor(diff / 1000) % 60;

}, 1000);


// 💌 الرسالة (آخر حاجة بعد 30 ثانية)
const message =
"❤️ ،بحبك يبودي ونفسي نفضل مع بعض دايما ومنبعدش ابدا كل يوم بيعدي بحبك اكتر ‘ بحبك اوي اوي اوي ❤️";

let i = 0;

function typeWriter(){

    if(i < message.length){

        document.getElementById("typing").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 70);
    }
}

function startEffects(){

    setTimeout(() => {
        typeWriter();
    }, 5000); 
}