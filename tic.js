function gamer() 
{
    let user1 =document.getElementById("Player1").value;
    let user2 =document.getElementById("Player2").value;
     

                localStorage.setItem("Player",user1);
                localStorage.setItem("Player_",user2);

            


}
 if (localStorage.getItem('Player')){

    user1= localStorage.getItem('Player_')
    user2=localStorage.getItem('Player')

    teste.innerHTML=` ${user1} vs ${user2}
    `;

 }


 
     
    
 
 let title = document.getElementById('title');
let turn ='x';
let squares=[];
let x =[];
let o= [];
let j=[];




let sqs = document.querySelectorAll('.square')

sqs.forEach((s, i) => { 
    s.addEventListener('click', function(){
    
    game(s,i)
    checkWinner(i)

    },{once:true})    

});




function game(s,i){
console.log(i)
// let element =document.getElementById(id)


    if (turn ==="x" && s.innerHTML=='')

{
 s.innerHTML="x" ;
 x.push(i);
 j.push(i)
 turn='o';
 title.innerHTML='o';
}

else if(turn =="o" && s.innerHTML ==''){
    
    s.innerHTML='o';
     o.push(i);
     j.push(i);
    turn='x';
    title.innerHTML='x';

}
// winner();
}

function winner(){
  if(x.includes(0) && x.includes(1) && x.includes(2) || x.includes(3) && x.includes(4) && x.includes(5)){
    // alert('X')
    document.getElementById('restare').textContent="X winner";
    document.getElementById('restare').style.color="white";
    

  }else if(x.includes(6) && x.includes(7) && x.includes(8) ||x.includes(0) && x.includes(3) && x.includes(6)){
    document.getElementById('restare').textContent="X winner";
    document.getElementById('restare').style.color="white";
   

  }else if(x.includes(1) && x.includes(4) && x.includes(7) || x.includes(2) && x.includes(5) && x.includes(8)){
    document.getElementById('restare').textContent="X winner";
    document.getElementById('restare').style.color="white";
    

    // console.log(localStorage.getItem('player1'))
  }else if(x.includes(0) && x.includes(4) && x.includes(8) || x.includes(2) && x.includes(4) && x.includes(6)){
    // alert('Fati');
    // alert(localStorage.getItem('player1'))
    

    document.getElementById('restare').textContent="X winner";
    document.getElementById('restare').style.color="white";
   

}
if(o.includes(0) && o.includes(1) && o.includes(2) || o.includes(3) && o.includes(4) && o.includes(5)){
    document.getElementById('restare').textContent="O winner";
    document.getElementById('restare').style.color="white";
   
   
  }else if(o.includes(6) && o.includes(7) && o.includes(8) ||o.includes(0) && o.includes(3) && o.includes(6)){
    document.getElementById('restare').textContent="O winner";
    document.getElementById('restare').style.color="white";
   

  }else if(o.includes(1) && o.includes(4) && o.includes(7) || o.includes(2) && o.includes(5) && o.includes(8)){
    // alert(localStorage.getItem('player2'));
    // console.log()
    document.getElementById('restare').textContent="O winner";
    document.getElementById('restare').style.color="white";
   

  }else if(o.includes(0) && o.includes(4) && o.includes(8) || o.includes(2) && o.includes(4) && o.includes(6)){
    // alert('Fati');
    // alert(localStorage.getItem('player2'))
    

    document.getElementById('restare').textContent="O winner";
    document.getElementById('restare').style.color="white";
   
    
}

}

function checkWinner(){
    if(!winner()&& j.length==9){
        document.getElementById('restare').textContent=" is DRAW !!";
        document.getElementById('restare').style.color="white";
        
    }
}




console.log(x)
console.log(o)
