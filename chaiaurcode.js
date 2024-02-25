const buttons=document.querySelectorAll('.button')

buttons.forEach((button)=>{
   console.log(button);
   button.addEventListener('click',(ev)=>{
       console.log(ev)
       console.log(ev.target);
       if(ev.target.id==='grey'){
         document.body.style.backgroundColor = 'grey'
       }
       else if(ev.target.id==='white'){
        document.body.style.backgroundColor = 'white'
       }
       else if(ev.target.id==='blue'){
        document.body.style.backgroundColor = 'blue'
       }
       else if(ev.target.id==='yellow'){
        document.body.style.backgroundColor = 'yellow'
       }
       else{
        document.body.style.backgroundColor = 'red'
       }
   })
})