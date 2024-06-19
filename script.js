var counter = 0;
var numofguests = 18;
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
       flame.style.backgroundPosition = 43 + "%" + "" + 25 + "%";
    }
    if(event.which == 66){ //B
        var flame = document.getElementById("flame"+ 1);
        flame.style.visibility = "visible";
        flame.style.backgroundPosition = 48 + "%" + "" + 23 + "%";
    }
    if(event.which == 67){  //C
        var flame = document.getElementById("flame"+ 2);
        flame.style.visibility = "visible";
        flame.style.backgroundPosition = 53.5 + "%" + "" + 23 + "%";
    }
    if(event.which == 68){  //D
       var flame = document.getElementById("flame"+ 3);
       flame.style.visibility = "visible";
       flame.style.backgroundPosition = 58.5 + "%" + "" + 25 + "%";
    }
    if(event.which == 69){//E
       var flame = document.getElementById("flame"+ 4);
       flame.style.visibility = "visible";
       flame.style.backgroundPosition = 45.5 + "%" + "" + 27 + "%";
    }
    if(event.which == 70){//F
       var flame = document.getElementById("flame"+ 5);
       flame.style.visibility = "visible";
       flame.style.backgroundPosition = 55 + "%" + "" + 27 + "%";
    }
    if(event.which == 71){//G
       var flame = document.getElementById("flame"+ 6);
       flame.style.visibility = "visible";
       flame.style.backgroundPosition = 42 + "%" + "" + 44 + "%";
    }
    if(event.which == 72){//h
        var flame = document.getElementById("flame"+ 7);
        flame.style.visibility = "visible";
        flame.style.backgroundPosition = 47.5 + "%" + "" + 42 + "%";
     }
     if(event.which == 73){//i
        var flame = document.getElementById("flame"+ 8);
        flame.style.visibility = "visible";
        flame.style.backgroundPosition = 54 + "%" + "" + 42 + "%";
     }
     if(event.which == 74){//j
        var flame = document.getElementById("flame"+ 9);
        flame.style.visibility = "visible";
        flame.style.backgroundPosition = 59 + "%" + "" + 44 + "%";
     }
     if(event.which == 75){//k
        var flame = document.getElementById("flame"+ 10);
        flame.style.visibility = "visible";
        flame.style.backgroundPosition = 45 + "%" + "" + 46.5 + "%";
     }
     if(event.which == 76){//l
        var flame = document.getElementById("flame"+ 11);
        flame.style.visibility = "visible";
        flame.style.backgroundPosition = 56 + "%" + "" + 46.5 + "%";
     }
     if(event.which == 77){//m
        var flame = document.getElementById("flame"+ 12);
        flame.style.visibility = "visible";
        flame.style.backgroundPosition = 40.5 + "%" + "" + 65 + "%";
     }
     if(event.which == 78){//n
        var flame = document.getElementById("flame"+ 13);
        flame.style.visibility = "visible";
        flame.style.backgroundPosition = 46.5 + "%" + "" + 62 + "%";
     }
     if(event.which == 79){//o
        var flame = document.getElementById("flame"+ 14);
        flame.style.visibility = "visible";
        flame.style.backgroundPosition = 54.5 + "%" + "" + 62 + "%";
     }
     if(event.which == 80){//p
        var flame = document.getElementById("flame"+ 15);
        flame.style.visibility = "visible";
        flame.style.backgroundPosition = 61 + "%" + "" + 65 + "%";
     }
     if(event.which == 81){//q
        var flame = document.getElementById("flame"+ 16);
        flame.style.visibility = "visible";
        flame.style.backgroundPosition = 44 + "%" + "" + 68.5 + "%";
     }
     if(event.which == 82){//r
        var flame = document.getElementById("flame"+ 17);
        flame.style.visibility = "visible";
        flame.style.backgroundPosition = 56.5 + "%" + "" + 68.5 + "%";
     }
    
    

}

    
