const enter=()=>{
    let temp1=document.getElementById("in").value;
    document.getElementById("para").innerHTML=temp1;
}
document.getElementById("in").addEventListener("input",enter);