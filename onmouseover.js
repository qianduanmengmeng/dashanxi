// JavaScript Document
var aDiv = document.getElementById("listheight");
	var aLi = aDiv.getElementsByTagName("li");
	for(var i = 0;i<aLi.lenght;i++){
		aLi[i].onmouseover = function (){
			this.style.backgroundColor = "red";
		}
	}