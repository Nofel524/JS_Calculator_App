function DeleteMe(){
document.getElementById("myresult").value=""
}
function Caculator(Newvalue){
document.getElementById("myresult").value += Newvalue;
}
function Answer(){
 var a=document.getElementById("myresult").value;
 var b=eval(a);
 document.getElementById("myresult").value=b
}