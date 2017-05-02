var run = false;
var loadCount = 0;
var menu_width;


function mainLoader(){
document.getElementById("loader").style.visibility = "visible";





	var kookie= document.cookie;
    var hasRunBool = kookie.indexOf("loaderRun");
    if (hasRunBool != -1)
 {
 	var startpos = kookie.indexOf ("=", hasRunBool);
 	startpos++;
 	var endpos = kookie.indexOf (";", startpos);
	
	 if (endpos == -1) endpos = kookie.length;
 		run = kookie.substring (startpos, endpos);
 	}

if(run == false){

run = true;

var d = new Date();
    d.setTime(d.getTime() + (.5*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "loaderRun=" + run + "; " + expires;

var timing = setTimeout(dot1, 1000);
}

else{
document.getElementById("loader").remove();
		menuDisplay();

}




}




function dot1(){

document.getElementById("dot1").style.visibility = "hidden";
document.getElementById("dot2").style.visibility = "hidden";
document.getElementById("dot3").style.visibility = "hidden";
document.getElementById("dot1").style.visibility = "visible";
loadCount++;

	if(loadCount<9)
	{
		var timing = setTimeout(dot2, 1000);
	}
	else
	{
		document.getElementById("loader").remove();
		menuDisplay();
	}
}

function dot2(){
document.getElementById("dot2").style.visibility = "visible";
loadCount++;
	
if(loadCount<3)
	{
		var timing = setTimeout(dot3, 1000);
	}
	else
	{
		document.getElementById("loader").remove();
		menuDisplay();
	}
}

function dot3(){
document.getElementById("dot3").style.visibility = "visible";
loadCount++;
	if(loadCount<9)
	{
		var timing = setTimeout(dot1, 1000);
	}
	else
	{
		document.getElementById("loader").remove();
		menuDisplay();
	}
}

var items = ["<b>Graphics</b>", "<b>Code</b>", "<b>Projects</b>", "<b>About</b>"];
var menuImg = ["Resources/Images/Crysis of the Moon.png","Resources/Images/Code.png","Resources/Images/HAND AND OCTOPUS VECTOR 1-01 copy.jpg","Resources/Images/The Jolly White Giant (blue) Final copy.png"];
var linktopage = ["TheJollyWhiteGiant-Graphics.html", "TheJollyWhiteGiant-Code.html","null", "TheJollyWhiteGiant-About.html"];

function menuDisplay(){
	
	
	var x = window.innerWidth;
	menu_width = (x / 100)*20;

	



var Menu = document.getElementById("body");

var options = document.createElement("table");
	options.setAttribute("id","menu");
	

for(var i = 0; i<items.length; i++){

var block = document.createElement("tr");
	block.setAttribute("id","block"+i);
	block.setAttribute("width", 100+"%");
	
var item = document.createElement("td");
	item.setAttribute("id","item"+i);
	item.setAttribute("width", 100+"%");
	
	Menu.appendChild(options);
	options.appendChild(block);
	block.appendChild(item);

			
			var link = document.createElement("a");
				link.setAttribute("href", linktopage[i]);
				link.setAttribute("id", "link");
				link.setAttribute("class", "link"+i);
				
			var option = document.createElement("li");
				option.setAttribute("id","menuOpt");
				option.setAttribute("class","item"+[i]);
			
			var overlay = document.createElement("div");
				overlay.setAttribute("id", "oLay");
				overlay.setAttribute("class", "oLay"+i);
				overlay.setAttribute("onclick", "dothis()");
			
			
			item.appendChild(link);
			link.appendChild(option);
			link.appendChild(overlay);
			
			
		
		}
	
writeStyles();	
	
}

function writeStyles(){

	for(var i = 0; i<items.length; i++){
		var menuItem = document.getElementsByClassName("item"+i)[0];
		var menuItemDiv = document.getElementsByClassName("oLay"+i)[0];

		menuItemDiv.innerHTML = items[i];
		menuItem.style.backgroundImage= "url('"+menuImg[i]+"')";
		
		

	}
}

function dothis(){


}


function gallery(){



}