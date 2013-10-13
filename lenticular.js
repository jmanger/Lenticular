(function(){
	
	if(window.orientation){
		
		window.addEventListener("deviceorientation", function(event){
			
			document.getElementById("alpha").innerHTML=event.beta;
			document.getElementById("gamma").innerHTML=event.gamma;
			document.body.style.backgroundPosition=(event.beta)+"px "+(event.gamma)+"px";
				});	
	} else {
	document.write("nah");
		
	}

})();