function validateform(){
    x=document.forms["myform"]["email"].value;
    if (x==""){
        document.getElementById('email').placeholder ="Enter Your Email";
        document.getElementById('email').style.border="3px solid red";
        var x=document.getElementById('vaild');
        x.innerHTML="*enter your email";
        x.style.color="red";
        return false;
    }
}
function crelement(){
    x=document.getElementsByClassName("myname");
    console.log(x);
    x[0].innerHTML="HII";
    x=document.createElement("input");
    z=document.createElement("label");
    x.setAttribute("class","myname");
    y=document.getElementById("mydiv");
    y.appendchild(x);
    y.appendchild(z);
}