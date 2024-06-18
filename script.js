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
       flame.style.backgroundPosition = 45 + "%" + "" + 22 + "%";
    }
    if(event.which == 66){ //B
        var flame = document.getElementById("flame"+ 1);
        flame.style.visibility = "visible";
        flame.style.backgroundPosition = 47 + "%" + "" + 25 + "%";
    }
    if(event.which == 67){  //C
        var flame = document.getElementById("flame"+ 2);
        flame.style.visibility = "visible";
        flame.style.backgroundPosition = 54 + "%" + "" + 25 + "%";
    }
    if(event.which == 68){  //D
       var flame = document.getElementById("flame"+ 3);
       flame.style.visibility = "visible";
       flame.style.backgroundPosition = 56 + "%" + "" + 22 + "%";
    }
    if(event.which == 69){//E
       var flame = document.getElementById("flame"+ 4);
       flame.style.visibility = "visible";
       flame.style.backgroundPosition = 44 + "%" + "" + 42 + "%";
    }
    if(event.which == 70){//F
       var flame = document.getElementById("flame"+ 5);
       flame.style.visibility = "visible";
       flame.style.backgroundPosition = 47 + "%" + "" + 45 + "%";
    }
    if(event.which == 71){//G
       var flame = document.getElementById("flame"+ 6);
       flame.style.visibility = "visible";
       flame.style.backgroundPosition = 54 + "%" + "" + 45 + "%";
    }
    
    

}

    
