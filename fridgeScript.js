
    
function displayFridgeLocations (){
    document.getElementById("input1").value;
    var value = document.getElementById("input1").value;
    var fridgeId = document.getElementById("fridges");
    var var1=document.getElementById("input1").value;
    if (var1 == 10471) {
    document.createElement("div");
    var divTag = document.createElement("div");
    divTag.className ="card";
    fridgeId.appendChild(divTag);
    var p=document.createElement("p");
    var fridgeName=document.createTextNode("The Friendly Fridge Bronx");
    p.appendChild(fridgeName);
    p.className ="cardTitle";
    divTag.appendChild(p);
    divTag.className ="card cardText1";
    var p1=document.createElement("p");
    var fridgeName=document.createTextNode("5977 Broadway, The Bronx, NY 10471");
    p1.appendChild(fridgeName);
    divTag.appendChild(p1);
    var p2=document.createElement("p");
    var fridgeName=document.createTextNode("@thefriendlyfridgebx");
    p2.appendChild(fridgeName);
    divTag.appendChild(p2);
         
    } else {
        alert("Nothing found");
    }
    
console.log(inputtext);
console.log(value);
}
