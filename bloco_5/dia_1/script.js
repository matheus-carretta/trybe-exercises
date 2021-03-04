document.getElementById('container').style.backgroundColor = "lightgray";

document.getElementById('header-container').style.backgroundColor = "green";

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = "orange";

document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = "yellow";

let EmergencyTaskDivH3 = document.querySelectorAll(".emergency-tasks div h3");

for (let index = 0; index < EmergencyTaskDivH3.length; index +=1){
  EmergencyTaskDivH3[index].style.backgroundColor = "pink";
}

let noEmergencyTaskDivH3 = document.querySelectorAll(".no-emergency-tasks div h3");

for(let index = 0; index < noEmergencyTaskDivH3.length; index +=1){
  noEmergencyTaskDivH3[index].style.backgroundColor = "black";
}

document.getElementById('footer-container').style.backgroundColor = "darkgreen";