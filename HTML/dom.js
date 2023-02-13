/** @format */

// document.getElementById("id");
// document.getElementsByClassName("classname");
// document.getElementsByTagName("tagName");

//query selector does not acces the element with ID
// document.querySelector("symbolName"); //return single elemenet
// document.querySelectorAll(""); //return array

const changeBodyText = () => {
  //   const h1Content = document.getElementsByTagName("h1")[0];
  //   const classdomMani = document.getElementsByClassName("dom-mani")[0];
  //   h1Content.innerHTML = "after changed text";
  //   classdomMani.innerHTML = "Hello for DOM manipulation changed";
  const classdomMani = document.querySelector(".dom-mani");
  classdomMani.style.color = "blue";
};
