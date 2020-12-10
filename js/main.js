var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
ourRequest.open('Get','https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
ourRequest.onload = function(){
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
  //console.log(ourData[0]); 
    // console.log(ourRequest.responseText);
};
ourRequest.send();
pageCounter++;
if(pageCounter > 3){
  
}
});
function renderHTML(data){
  var htmlString = "";
for(i=0; i < data.length; i++){
  htmlString += "<p>" + data[i].name + " is a " + data[i].species + "that likes to eat";

for (ii=0; ii < data[i].foods.likes.length; ii++){
  if (ii==0){
    htmlString += data[i].foods.likes[ii];
  } else {
    htmlString += " and " + data[i].foods.likes[ii];
  }
}
htmlString += '.<p>';
}

  animalContainer.insertAdjacentHTML("beforeend",htmlString);
}

