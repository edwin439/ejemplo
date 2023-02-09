const button_name = document.querySelector("#click-name")
const npet_name = document.querySelector(".pet-name")
const input_name = document.querySelector("#newNam")
const newImg=document.querySelector("#image-tamagokchit")
let hambre = 0;
let vida = 100;
const health_bar = document.querySelector(".progress-bar-health")
const hunger_bar = document.querySelector(".progress-bar-hunger")
const button_play= document.querySelector("#play-button")
const button_eat = document.querySelector("#feed-button")
const button_clean = document.querySelector("#clean-button")
const nVida= document.querySelector(".porcentaje")
const nHambre = document.querySelector(".porcentaje-2")





button_name.addEventListener("click", function(){
    npet_name.innerHTML= input_name.value;
});


button_play.addEventListener("click",function(){



let intervaloHambre = setInterval(function(){
    
 hambre = hambre + 10;
 if(hambre > 100){
    hambre = 100;
    clearInterval();
 }
 updateHambre();
},2000);



let intervalovida = setInterval(function(){
    vida = vida - 10;
    if(vida < 0 ){
        vida = 0;
        clearInterval();
        
    }
    updateVida()
   
    },2000);


button_eat.addEventListener("click",function(){
    hambre = hambre - 10;
    if(hambre < 0){
        hambre = 0
        
    }
    updateHambre();
});
button_clean.addEventListener("click",function(){
    vida = vida + 10;
    if(vida > 100){
        vida = 100;
    }
    updateVida();
})
function updateHambre(){
    hunger_bar.style.width = hambre + "%";
    if(hambre <=50){
        hunger_bar.style.width = hambre + "%";
        hunger_bar.style.backgroundColor ="green";
       
     }
     else if ( hambre > 50 && hambre <= 80){
        hunger_bar.style.width = hambre + "%";
        hunger_bar.style.backgroundColor = "yellow";
     }
     else if(hambre > 80){
        hunger_bar.style.width = hambre + "%";
        hunger_bar.style.backgroundColor = "red";
     }
       
}
function updateVida(){
    health_bar.style.width = vida + "%";
    if(vida > 51){
        health_bar.style.width = vida + "%";
        health_bar.style.backgroundColor ="green";
        newImg.src = "./images/200w.webp";
     }
    else if(vida >21 && vida <= 50 ){
        health_bar.style.width = vida + "%";
        newImg.src = "./images/sad.gif";
        health_bar.style.backgroundColor="yellow";
       
    }
    else if(vida <= 20 && vida > 0 ){
        health_bar.style.width = vida + "%";
        newImg.src = "./images/die.gif";
        health_bar.style.backgroundColor="red";
        
        
    }else if(vida <=0){
        alert("tu mascota ha muerto")
        
      
        }
    nVida.innerHTML=vida + "%";
    nHambre.innerHTML = hambre + "%";

    
        
    
}});
   



        
    
    




