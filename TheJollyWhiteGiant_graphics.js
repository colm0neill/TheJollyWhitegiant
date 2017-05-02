function test(){
	alert("foo");
	
}

function refine(){
	
	
}

var rey = ["CleanLogo.png","IllustratorXCeltic.jpg", "LavaLamp.jpg","TheWasp.png",
"G600-X-ILLUSTRATOR.jpg", "GOOFY-ON-LSD.png","Pluto-silhouette.jpg",
"FishBoxes.png", "ManOfTheSmallMoon.png", "Lg comp.png", "KingScratch.png" ,"The-Jolly-White-Giant.png"];
var rey_name =["CleanLogo", "IllustratorXCeltic", "LavaLamp", "TheWasp", "G600-X-ILLUSTRATOR","GOOFY-ON-LSD",
"Pluto-silhouette", "FishBoxes", "ManOfTheSmallMoon", "LG Comp", "King Scratch","The Jolly White Giant"];




function load_images(){
	
	var local = document.getElementById("graphics_c");
	
	for(var i = 0; i < rey.length; i++){
		
		var img = document.createElement("div");
		img.setAttribute("class",rey_name[i]);
		img.setAttribute("id", "img");
		img.setAttribute("name", rey_name[i]);
		img.setAttribute("onclick","showImg(className)");
		
		
		local.appendChild(img);
	}
	insert_imgs();
}

function insert_imgs(){
	
	for(var i = 0; i < rey.length; i++){
	var img_box = document.getElementsByClassName(rey_name[i])[0];
	img_box.style.backgroundImage = "url('Resources/Images/Library/"+rey[i]+"')";
	img_box.style.backgroundSize = "100% 100%";
	}
	

}



function showImg(className){
	var class_name = className;
	
	var name_pos = 0;
	for (var i = 0; i < rey_name.length; i++){
		
		if(class_name == rey_name[i]){
			name_pos = i;
			i=name_pos+1;	
		}
		
	}
	
	
	
	var bod = document.getElementById("graphics_c");
	
	var body_overlay = document.createElement("div");
	body_overlay.setAttribute("id", "overlay");
	body_overlay.style.width = window.innerWidth + "px";
	body_overlay.style.height = (window.innerHeight +810)+ "px";
	body_overlay.style.background ="rgba(0,0,0,0.7)";
	body_overlay.style.position = "absolute";
	body_overlay.style.left ="0px";
	body_overlay.style.top ="175px";
	
	
	var close_img = document.createElement("input");
	close_img.setAttribute("type", "button");
	close_img.setAttribute("id", "close");	
	close_img.setAttribute("onclick", "close_x()");
	close_img.setAttribute("value", "x");
	close_img.style.fontSize = "50px";
	close_img.style.position = "absolute";
	close_img.style.top = "0px";
	close_img.style.left = "95%";
	
	
	
	var img_display = document.createElement("img");
	img_display.src = "Resources/Images/Library/"+rey[name_pos];
	img_display.setAttribute("id" , "ImageDis");
	img_display.style.width = "70%";
	img_display.style.border = "solid white 2px";
	img_display.style.position ="absolute";
	img_display.style.margin = 10+"%";
	img_display.style.marginLeft = 15+"%";
	
	
	
	bod.appendChild(body_overlay);
	body_overlay.appendChild(img_display);
	body_overlay.appendChild(close_img);
	
	
}

function close_x(){
	
 var imgx = document.getElementById("overlay");
	imgx.remove(0);
}