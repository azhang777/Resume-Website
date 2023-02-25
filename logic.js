let javaSkill = document.getElementById("java");
let javaSkillLevel = document.getElementById("java_level");

var skillLevel = document.getElementsByClassName("skill_level");
var skillText = document.getElementsByClassName("skills_text");
for (let i = 0; i < skillText.length; i++) {
  skillText[i].addEventListener("mouseover", function () {
    skillText[i].style.animation = "none";
    skillLevel[i].classList.add("appear");
  });
  skillText[i].addEventListener("animationend", function () {
    skillLevel[i].classList.remove("appear");
    skillLevel[i].style.opacity = 1;
  });
}

console.log(skillLevel);
console.log(skillText);
