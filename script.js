//your JS code here. If required.
let levelElement = document.getElementById("level");
let level = 1;
while(levelElement.parentElement){
  level++;
  levelElement = levelElement.parentElement;
}
alert(`The level of the element is:  ${level}`);
