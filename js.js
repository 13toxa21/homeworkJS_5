var body = document.getElementById('body');
var timer = document.getElementById('timer');
var startBtn = document.getElementById('start');
var stoporBtn = document.getElementById('stopor');
var tamer;
var time = 0;
var timeStart = Date.now();
var pauseTime;
var contTime;
var hour, min, sec, msec;

// переделать функцию из переменной в функцию

function starting(){
    tamer = setTimeout(starting, 10);
    time++;
    msec = time % 100;
            min = Math.floor(time / 100 / 60);
            sec = Math.floor(time / 100 % 60);
            hour = Math.floor(time / 100 /60 /60 % 24);
            if(sec < 10){
                sec = "0" + sec;
                bod.style.backgroundColor ="red";
            } else if(sec >=10 && sec < 20){
                bod.style.backgroundColor ="orange";
            }
            else if(sec >=20 && sec < 30){
                bod.style.backgroundColor ="yellow";
            }
            else if(sec >=30 && sec < 40){
                bod.style.backgroundColor ="green";
            }
            else if(sec >=40 && sec < 50){
                bod.style.backgroundColor ="blue";
            }
            else if(sec >=50 && sec < 60){
                bod.style.backgroundColor ="purple";
            }
            else if(min < 10){
                min = "00" + min;
            } else if(hour < 10){
                hour = "0" + hour;
            }
document.getElementById('timer').innerHTML = hour + ":" + min + ":" + sec + "." + msec;
}


// функция запуска/остановки
startBtn.addEventListener('click', function(){
    if(start.innerText == "Старт"){
        startTim = Date.now();
        starting();
        start.innerText = "Пауза";
        stopor.innerText = "Очистить";
    } else if(start.innerText == "Пауза"){
        start.innerText = "Продолжить"; 
        stoping();
    } else if(start.innerText == "Продолжить"){
        starting();
        pausedTime = Date.now();
        timeStart =  startTim - pausedTime;
        start.innerText = "Пауза";
        console.log(timeStart);
    }
});


function stoping(){
    clearTimeout(tamer);
} 

function cliner(){
    document.getElementById('timer').innerHTML = "0" + ":" + "0" + ":" + "0" + "." + "00";
    time = 0;
}

stoporBtn.addEventListener('click', function(){
     if(stopor.innerText == "Очистить"){
        start.innerText = "Старт";
        //stopor.innerText = "Стоп"
        cliner();
        stoping();
    }
    });

    //время круга:
    var circleBtn = document.getElementById('circle');
    var infCircle = document.getElementById('infoCircle');
    
       function circling(){
        var newLi = document.createElement('li');
        var newSp = document.createElement('span')
        var tr = hour + ":" + min + ":" + sec + "." + msec;
        newSp.innerHTML = tr;
        infCircle.appendChild(newLi).append(newSp);
       };
    

    circleBtn.addEventListener('click',function(){
         circling()});

       