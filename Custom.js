//this is just a fucking comment so let it be the one comment

function myFunction(){
	
var hed=document.querySelector('a');
var Name=prompt("enter the name:");
localStorage.setItem('name',Name);
 if (Name=='Anas'||Name=='anas'||Name==ANAS){
	window.location="index2.html";

}
else if(Name!='Anas'||Name!='anas'||Name!="" ||Name!=null){
hed.textContent="Enter the right name";
}
 
}
function dabaFunction(){
	var anchor=document.querySelector('#one');
	if(anchor.style.display!="block")
	anchor.style.display="block";
    else{
    	anchor.style.display="none";
    }
}