(function(){
	
	if(window.devicemotion){
		
		window.addEventListener("devicemotion", function(){
			
			document.write("yay");
			
		});
	
	} else {document.write("nah")}
})();