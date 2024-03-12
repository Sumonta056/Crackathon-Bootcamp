document.addEventListener("DOMContentLoaded", function () {
  // Selecting elements
  const parentElement = document.getElementById("parent");
  const childList = document.getElementById("childList");
  const changeTextBtn = document.getElementById("changeTextBtn");

  console.log(childList.children);
  console.log(childList.children[0]);

  // Adding event listener to the button
  changeTextBtn.addEventListener("click", function () {
    const newChild = document.createElement("li");
    
    newChild.textContent = "New Child 4";
    childList.appendChild(newChild);

    // Changing text of the parent element
    parentElement.querySelector("h2").textContent = "New Parent Title";

    // Changing text of the child elements
    const children = childList.children;
    for (let i = 0; i < children.length; i++) {
      children[i].textContent = "New Child " + (i + 1);
    }
  });
});
