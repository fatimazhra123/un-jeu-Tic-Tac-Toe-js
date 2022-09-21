let tac ='x';
function box(id){


let element =document.getElementById(id)


    if (tac ==="x" && element.innerHTML=='')

{

 element.innerHTML="x" ;
 tac="o"  ;
}
else if(tac=="o"&& element.innerHTML==''){
    element.innerHTML='o';

}
}
