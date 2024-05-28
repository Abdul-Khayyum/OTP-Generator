var allinp=document.querySelectorAll("input")
document.querySelector("span").addEventListener("click",function(){
    document.querySelector("#otp_container").style.display="none"
})
allinp[2].addEventListener("click",function(){
    document.querySelector("#otp_container").style.display="flex"
})
var otp
function generateotp(){
    var num1=Math.floor(Math.random()*10)
    var num2=Math.floor(Math.random()*10)
    var num3=Math.floor(Math.random()*10)
    var num4=Math.floor(Math.random()*10)
    otp=`${num1}${num2}${num3}${num4}`
    document.querySelector("#otp").innerHTML=otp
}
function accessingoffile(){
    var userotp=allinp[0].value
    if(userotp==otp){
        document.querySelector("#status").innerHTML="Access Granted"
        document.querySelector("#status").style.color="lawngreen"
    }
    else{
        document.querySelector("#status").innerHTML="Access Denied"
        document.querySelector("#status").style.color="red"
    }
}