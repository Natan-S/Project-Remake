function mudaLargura() {
if (check.checked == true){
        document.getElementById("main_Container").style.width = "98%"; 
        document.getElementById("right-content").style.width = "27%"; 
        document.getElementById("text-label").style.width = "45%"; 
        document.getElementById("text-label").style.left = "100px"; 
        document.getElementById("user-icon").style.width = "19%";
        document.getElementById("left-content").style.left = "80px";
        document.getElementById("galery-Body").style.height = "100%"; 
        document.getElementById("galery-Body").style.margin = "0px 60px"; 
  } else {
    document.getElementById("main_Container").style.width = "78%";
    document.getElementById("right-content").style.width = "27%"; 
    document.getElementById("text-label").style.left = "45%"; 
    document.getElementById("text-label").style.left = "65px";
    document.getElementById("user-icon").style.width = "25%";
    document.getElementById("left-content").style.left = "20px";
    document.getElementById("galery-Body").style.height = "85%"; 
    document.getElementById("galery-Body").style.margin = "0px 35px"; 
  }
}





