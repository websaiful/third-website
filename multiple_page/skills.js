var skill = document.getElementById('skill-lavel');
var count = 0;
var set = setInterval(fun,100)
function fun(){
    count++
    skill.innerHTML = count + '%';
    if (count == 80){
        clearInterval(set);
    };


};
var skill2 = document.getElementById('skill-lavel2');
var count2 = 0;
var set2 = setInterval(fun2,100)
function fun2(){
    count2++
    skill2.innerHTML = count2 + '%';
    if (count2 == 70){
        clearInterval(set2);
    };


};
var skill3 = document.getElementById('skill-lavel3');
var count3 = 0;
var set3 = setInterval(fun3,100)
function fun3(){
    count3++
    skill3.innerHTML = count3 + '%';
    if (count3 == 50){
        clearInterval(set3);
    };


};
var skill4 = document.getElementById('skill-lavel4');
var count4 = 0;
var set4 = setInterval(fun4,100)
function fun4(){
    count4++
    skill4.innerHTML = count4 + '%';
    if (count4 == 50){
        clearInterval(set4);
    };
};
var skill5 = document.getElementById('skill-lavel5');
var count5 = 0;
var set5 = setInterval(fun5,100)
function fun5(){
    count5++
    skill5.innerHTML = count5 + '%';
    if (count5 == 60){
        clearInterval(set5);
    };
};