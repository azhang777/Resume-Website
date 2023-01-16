let btn = document.getElementById("b1");
btn.addEventListener("click", describeUser);

function describeUser() {
  console.log("Button has been pressed.");
  let fullName = document.getElementById("fullName").value;
  let age = document.getElementById("age").value;
  // let ageReference = +document.getElementById("age").value + +9;
  if (fullName === "" || age === "") {
    alert("please enter both name and age!");
  } else {
    alert(`Hello, ${fullName}! You are ${age} years old.`);
    document
      .getElementById("log")
      .replaceWith(`Hello, ${fullName}! You are ${age} years old.`);
    // console.log(`${age} + ${ageReference}`);
  }
}

//both js and html file need to be saved for it to work.
//if both html and js file are in the same directory, src=jsfile, no need for / or ./
