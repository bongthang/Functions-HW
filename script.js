var wrap = document.body.querySelector(".wrapper");
var fire = document.body.querySelector(".fire");
var ice = document.body.querySelector(".ice");
var poison = document.body.querySelector(".poison");
var box = document.createElement("div");
var dragonDamage= 0;
function attack(dmg, atk) {
  
  
  if(atk==="fire"){
   dragonDamage = dragonDamage + dmg-1;
    
  }else if(atk==="ice"){
    dragonDamage = dragonDamage + dmg+1;
    
  }else if(atk==="poison"){
    dragonDamage = dragonDamage + dmg;
  }
  
  box.innerHTML = "Dragon Damage:" + dragonDamage;
  
  if(dragonDamage>=10){
    box.innerHTML = "You Win!";
  }
}

fire.addEventListener("click", function(){
 attack(3,"fire");
})
ice.addEventListener("click", function(){
 attack(1,"ice");
}) 

poison.addEventListener("click", function(){
 attack(4,"poison");
})

wrap.appendChild(box);