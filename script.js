var counter = 0;
var numofguests = 7;
function keyCheck(event){
    if(counter < 1 && event.which == 65){  //A
        counter = 1;
        for(var i = 0; i < numofguests; i++){
            var flame = document.createElement("div");
            flame.className="flame";
            flame.id = "flame"+i;
            document.getElementById("lamp").appendChild(flame);
        }
        
    }
    if(event.which == 65){  //A
       var flame = document.getElementById("flame"+ 0);
       flame.style.visibility = "visible";
       flame.style.backgroundPosition = 40 + "%" + "" + 14 + "%";
    }
    if(event.which == 66){ //B
        var flame = document.getElementById("flame"+ 1);
        flame.style.visibility = "visible";
        flame.style.backgroundPosition = 43.5 + "%" + "" + 19 + "%";
    }
    if(event.which == 67){  //C
        var flame = document.getElementById("flame"+ 2);
        flame.style.visibility = "visible";
        flame.style.backgroundPosition = 50.5 + "%" + "" + 20 + "%";
    }
    if(event.which == 68){  //D
       var flame = document.getElementById("flame"+ 3);
       flame.style.visibility = "visible";
       flame.style.backgroundPosition = 56 + "%" + "" + 18 + "%";
    }
    if(event.which == 69){
       var flame = document.getElementById("flame"+ 4);
       flame.style.visibility = "visible";
       flame.style.backgroundPosition = 40 + "%" + "" + 14 + "%";
    }
    if(event.which == 70){
       var flame = document.getElementById("flame"+ 5);
       flame.style.visibility = "visible";
       flame.style.backgroundPosition = 40 + "%" + "" + 14 + "%";
    }
    if(event.which == 71){
       var flame = document.getElementById("flame"+ 6);
       flame.style.visibility = "visible";
       flame.style.backgroundPosition = 40 + "%" + "" + 14 + "%";
    }
    
    

}

    
