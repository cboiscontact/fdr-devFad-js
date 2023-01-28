// ** addEventListener - load
// TODO 1: récupérer toutes les images dans une variable lesImages
// TODO 2: Dans une v ariable tabImg on transforme lesImages en tableau avec Array.from()
// TODO 3-1: Sur tabImg on utilise la fonction map().
// TODO 3-2: Dans map(), on lui passe une F => qui prend 2 params : uneImage et index
// TODO 3-3: Dansla F =>, sur uneImage on place un addEventListener qui écoute "load" et éxecute une Fonction
// TODO 3-4: Dans la F du addEventListener, on affiche index en console 

let lesImages = document.querySelectorAll('img');
let tabImg = Array.from(lesImages);

tabImg.map(function(uneImage,index){
    uneImage.addEventListener('load',function(){
        console.log(index);
    });
});


