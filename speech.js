//responsiveVoice.speak("Bonjour", "French Female");



var btDire = document.getElementById('dire');






btDire.addEventListener("click", function (e) {
    var nb = 0;
    var tot = 0;
    var say = "Ce médicament est à prendre: ";
    
    //counting
    if (document.getElementById("matin").checked) {
        tot = tot + 1;
    }
    if (document.getElementById("midi").checked) {
        tot = tot + 1;
    }
    if (document.getElementById("soir").checked) {
        tot = tot + 1;
    }

    //making the sentence
    if(tot===1){
        say = say + "le ";
    }
    if (document.getElementById("matin").checked) {
        //console.log("matin");
        say = say + "matin, ";
        nb = nb + 1;
    }
    if (document.getElementById("midi").checked) {
        //console.log("midi");
        nb = nb + 1;
        if (nb === tot && tot > 1) {
            say = say + 'et ';
        }
        say = say + "midi, ";
    }
    if (document.getElementById("soir").checked) {
        //console.log("soir");
        nb = nb + 1;
        if (nb === tot && tot > 1) {
            say = say + 'et ';
        }
        say = say + "soir, ";
    }
    
    var voieEle = document.getElementsByName("voie");
    for (var i = 0; i < voieEle.length; i++) {
        if (voieEle[i].checked && voieEle[i].value!="") {
            say = say + "par voie " + voieEle[i].value
        }
        
    }
    
    var position_repasEle = document.getElementsByName("position_repas");
    for (var i = 0; i < position_repasEle.length; i++) {
        if (position_repasEle[i].checked) {
            say = say + ", " + position_repasEle[i].value
        }
        
    }
    
    console.log(say);
    responsiveVoice.speak(say, "French Female");

});




