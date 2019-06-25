var filter =document.getElementById("filter").getElementsByTagName("dl");
var lis=[];
for(var i=0;i<filter.length;i++){
	filter[i].onclick=moves;
}
function moves(){
	if(this.getAttribute('class')=="active"){		
		this.setAttribute('class',"");
	}else{
		for(var i=0;i<filter.length;i++){
		if(filter[i]===this){				
			lis=filter[i].getElementsByTagName('li');
	        for(var j=0;j<lis.length;j++){	           	
		       lis[j].onclick=movesp;
	        }
			filter[i].setAttribute('class','active');	
		}else{
			filter[i].setAttribute('class',"");	
		}	
     }	
	}

}
function movesp(){		
	for(var i=0;i<lis.length;i++){
		if(lis[i]===this){			
			lis[i].setAttribute('class',"active");				
           
		}else{
			lis[i].setAttribute('class',"");
		}
	
     }
	

}