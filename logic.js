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
/*
+let javaSkill = document.getElementById("java");
let javaSkillLevel = document.getElementById("java_level");

javaSkill.addEventListener("mouseover", function () {
  javaSkillLevel.classList.add("appear");
});

javaSkill.addEventListener("mouseout", function () {
  javaSkillLevel.classList.remove("appear");
});

let javascriptSkill = document.getElementById("javascript");
let javascriptSkillLevel = document.getElementById("javascript_level");

javascriptSkill.addEventListener("mouseover", function () {
  javascriptSkillLevel.classList.add("appear");
});

javascriptSkill.addEventListener("mouseout", function () {
  javascriptSkillLevel.classList.remove("appear");
});

let cplusplusSkill = document.getElementById("cplusplus");
let cplusplusSkillLevel = document.getElementById("cplusplus_level");

cplusplusSkill.addEventListener("mouseover", function () {
  cplusplusSkillLevel.classList.add("appear");
});

cplusplusSkill.addEventListener("mouseout", function () {
  cplusplusSkillLevel.classList.remove("appear");
});

let htmlSkill = document.getElementById("html");
let htmlSkillLevel = document.getElementById("html_level");

htmlSkill.addEventListener("mouseover", function () {
  htmlSkillLevel.classList.add("appear");
});

htmlSkill.addEventListener("mouseout", function () {
  htmlSkillLevel.classList.remove("appear");
});

let cssSkill = document.getElementById("css");
let cssSkillLevel = document.getElementById("css_level");

cssSkill.addEventListener("mouseover", function () {
  cssSkillLevel.classList.add("appear");
});

cssSkill.addEventListener("mouseout", function () {
  cssSkillLevel.classList.remove("appear");
});

let mysqlSkill = document.getElementById("mySQL");
let mysqlSkillLevel = document.getElementById("mySQL_level");

mysqlSkill.addEventListener("mouseover", function () {
  mysqlSkillLevel.classList.add("appear");
});

mysqlSkill.addEventListener("mouseout", function () {
  mysqlSkillLevel.classList.remove("appear");
});
/*

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
*/
