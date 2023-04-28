let sc = document.querySelector('#sc');
let mn = document.querySelector('#mn');
let hr = document.querySelector('#hr');

let dy = document.getElementById('day');
let mth = document.getElementById('month');
let yrs = document.getElementById('year');
setInterval(()=>{
    let day = new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes()*6;
    let ss = day.getSeconds()*6;
    
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)}deg)`;
    sc.style.transform = `rotateZ(${(ss)}deg)`;

    //date 

    let d = day.getDay() + ' Oef;';
    let mt = day.getMonth() + ' eldef;';
    let y = day.getFullYear() + ' yD;';
    dy.innerHTML = d;
    mth.innerHTML = mt;
    yrs.innerHTML =y;

//digital 

let hours = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let ampm = document.getElementById('ampm');

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

let ap = h >= 12 ? "Omb;crf;": "umif;egFj";

//addin 0 
h = (h < 10) ? "0" + h: h
m = (m < 10) ? "0" + m: m
s = (s < 10) ? "0" + s: s

//12hr method
if(h>12){
    h = h-12;
}


hours.innerHTML = h;
minute.innerHTML = m;
second.innerHTML =s;
ampm.innerHTML =ap;
}) 



