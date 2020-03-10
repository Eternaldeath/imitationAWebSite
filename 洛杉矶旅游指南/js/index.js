function init(){
	setInterval("changeImg()",1000);
}
var i=1;
function changeImg(){
	i++;
	document.getElementById("lunbotu").src="img/img-pagehome/"+i+".jpg";
	if(i==4){
		i=0;
	}
}
