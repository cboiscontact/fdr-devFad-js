// ** addEventListener - focus - blur
// TODO 1: récupérer l'input dans une variable leInput
// TODO 2-1: sur leInput, utiliser addEventListener pour surveiller "focus" 
// TODO 2-2:et execute une fonction qui modif la bg color de leInput en (couleur au choix)
// TODO 3-1: sur leInput, utiliser addEventListener pour surveiller "blur"
// TODO 3-2: et execute une fonction qui modif la bg color de leInput en blanc ou transparent


let leInput = document.querySelector('input');

// document.addEventListener('DOMContentLoaded',function(){

// })
leInput.addEventListener('focus',function(){
    leInput.style.backgroundColor='yellow';    
});
leInput.addEventListener('blur',function(){
    leInput.style.backgroundColor='transparent';
})
