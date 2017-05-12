function dropBall(){
	//alert("foo");
var logo = document.getElementById("about_me");
var pos = 0;
var id = setInterval(frame, 2);

var lm = document.getElementById("learnM");
lm.remove(0);

function frame(){
	if(pos == 500){
		clearInterval(id)
		
	}else{
		pos++;
		pos++;
		logo.style.top = pos+"px";
	}
	
	
}
var wText = document.getElementById("left-text");
	
		wText.style.transition= "all 3s";
		
	var wText = document.getElementById("right-text");
		
		wText.style.transition = "all 3s";


blindText();
}

function blindText(){
	
	var wText = document.getElementById("left-text");
		wText.style.opacity = ".0";
		wText.style.filter  = "blur(5px)";
		
		
	var wText = document.getElementById("right-text");
		wText.style.opacity = ".0";
		wText.style.filter  = "blur(5px)";
		
	var derp = document.getElementById("a-welcome");
		derp.style.transition = "all 4s ease";

setTimeout(removeImg, 1000);	
}

function removeImg(){
	
	var img = document.getElementById("about_me");
	img.remove(0);
	
	var main = document.getElementById("a-welcome");
	main.style.height = "550px";
	
flickerin();
}


var textS = 200;

function flickerin(){
	
	var text = document.getElementById("about-T");
		text.style.visibility = "visible";
		text.style.position = "relative";
		text.style.top = "-80px";
		
	
		
	
	
		
		for (i = 0; i <= 170; ++i) {
		setDelay(i);
		
		}

	function setDelay(i) {
		setTimeout(function(){
			var box = document.getElementById("about-T");
				box.style.fontSize = textS + "px";
				textS--;
				
				if(i == 170){
					var cont = document.getElementById("contactInfo");
					cont.style.opacity = "1";
					cont.style.position = "relative";
					cont.style.visibility = "visible";
				}
    console.log(textS);
		}, i * 30);
}
	

}
