	//script
		
window.onload=function(){
	

	var bannerdiv = document.getElementById("boardimg");
	var banli = bannerdiv.getElementsByTagName("li");
	
	var ban = document.getElementById("boardimg");
	var k = 0;
	var timer = null;
	timer=setInterval(function(){
		
		kk();
	},1000);
function kk(){
	for(var i=0;i<4;i++){
	banli[i].style.display="none";			
		}
	if(k<3){
		k++;
		
	}else{
		k=0;
	}

	banli[k].style.display="block";
}

	}