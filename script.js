const  select = document.querySelectorAll("select");
const timer = document.querySelector(".display-time");
const btn = document.querySelector("button");
const rington =  new Audio ("./files/a..mp3");
const content = document.querySelector(".content");
let alarmstate = "noset";
let alarm_btn;
for(let i = 23 ; i >=0 ; i--){
i = i < 10 ? "0" + i : i ;
let option = `<option value="${i}">${i}</option>` ;
select[0].firstElementChild.insertAdjacentHTML(`afterend`,option)
//console.log(option);
}
for(let i = 0 ; i <= 59 ; i ++){
i = i < 10 ? "0" + i : i ;
let option = `<option value="${i}">${i}</option>` ;
select[1].lastElementChild.insertAdjacentHTML("afterend",option)
//console.log(option);
}
setInterval(() => {
var date = new Date();
var hour = date.getHours();  
var minute = date.getMinutes();  
var seconds = date.getSeconds(); 
hour = hour < 10 ? "0" + hour : hour ; 
minute = minute < 10 ? "0" + minute : minute ;
seconds = seconds < 10 ? "0" + seconds : seconds ;
//console.log(`${hour}:${minute}:${seconds}`);
timer.innerHTML = `${hour}:${minute}:${seconds}` ;
if(alarm_btn == `${hour}:${minute}`){
 rington.play();
 rington.loop = true;
}
}, 1000);
btn.addEventListener(`click`,()=>{
alarm_btn = `${select[0].value}:${select[1].value}`;
if(alarm_btn.includes("ساعت") || alarm_btn.includes("دقیقه")){
    return alert("یک ساعت و دقیقه تنظیم کن مهندس");
}
   togglealarm(alarmstate)
})
function togglealarm(state){
    if(state == "noset"){
        content.classList.add("disable");
        btn.innerText = "ساعت کوک شد";
        alarmstate = "set";
    }
    else{
        content.classList.remove("disable");
        alarm_btn = "";
        rington.pause();
        alarmstate = "noset";
        btn.innerText = "تنظیم"
}
}