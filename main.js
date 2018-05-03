
/*

C est la meme syntax pour tout : 
on crée la function, dans la function on va cibler un id grace a document.getElementById('on met l'id) on dit avec innerhtml qu'on va rajouter du text
*/


var text    = document.querySelector("#text"); 
var epaule  = document.querySelector("#un"); 
var bras = document.querySelector("#deux"); 
var hanche  = document.querySelector("#trois"); 
var pied = document.querySelector("#quatre");
var jambe  = document.querySelector("#cinq"); 
var main = document.querySelector("#six");

epaule.addEventListener("mouseover", function(){ text.innerHTML = "L'EPAULE : L'épaule (nom féminin) est la région morphologique se situant à la jonction du tronc avec le membre supérieur. Elle comporte plusieurs articulations qui concourent à en faire le complexe articulaire le plus mobile du corps humain. Elle permet d'orienter le membre supérieur dans lespace, autorisant en particulier son extrémité effectrice, la main, à assurer ses rôles de préhension et de communication avec l'environnement situé à sa portée.";  });

epaule.addEventListener("mouseout", function(){ text.innerHTML =""; });



bras.addEventListener("mouseover", function(){ text.innerHTML =" LE BRAS : En anatomie, le bras (parfois arrière-bras) est la partie du membre supérieur humain comprise entre l'épaule (qui l'attache au tronc) et le coude (qui l'attache à l'avant-bras). Dans le langage courant, le terme « bras » peut référer au membre supérieur dans sa totalité.";
});

bras.addEventListener("mouseout", function(){ text.innerHTML =""; });


hanche.addEventListener("mouseover", function(){ text.innerHTML= "LA HANCHE :La hanche ou articulation coxo-fémorale est une articulation (énarthrose) qui permet de joindre la cuisse au bassin. Elle met en jeu deux os : l'os iliaque et le fémur. ";
});
 
hanche.addEventListener("mouseout", function(){ text.innerHTML =""; });
  
                        
                       
pied.addEventListener("mouseover", function(){ text.innerHTML= "LA CHEVILLE : La cheville ou cou-de-pied est l'articulation qui relie la jambe et le pied.Elle est parfois sujette à des entorses, le plus souvent externes par flexion plantaire et pied en équin.Une cheville adulte est composée, au point de vue osseux, de l'épiphyse inférieure du tibia (malléole interne et plafond), de l'épiphyse inférieure de la fibula (ou péroné) (malléole externe) et du talus (ou astragale). ";
});
pied.addEventListener("mouseout", function(){ text.innerHTML =""; }); 



jambe.addEventListener("mouseover", function(){ text.innerHTML="LE GENOU: Le genou est une articulation qui permet de joindre la jambe à la cuisse. Elle met en jeu trois os, le fémur, le tibia et la patella, par le biais de trois articulations, l'articulation fémoro-patellaire et la double articulation fémoro-tibiale.";
});
jambe.addEventListener("mouseout", function(){ text.innerHTML =""; });


main.addEventListener("mouseover", function(){ text.innerHTML = "LA MAIN: La main (du latin : manus, « côté du corps1 ») est l’organe préhensile effecteur situé à l’extrémité de l’avant-bras et relié à ce dernier par le poignet. "; });
main.addEventListener("mouseout", function(){ text.innerHTML =""; });

