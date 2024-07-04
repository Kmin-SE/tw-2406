// get html elements

let parentDiv = document.getElementById("myDIV");
let inputEl = parentDiv.querySelector("input");
let addBtn = parentDiv.querySelector(".addBtn");

// get list parent element
let tdParentEl = document.getElementById("myUL");

// util function

// validation
let isEmptyString = (str) => str.trim().length === 0;
let isCorrectTargetTag = (elTag, targetElTag) => elTag === targetElTag;

// create new task element
let createTaskEl = (taskContent) => {
  let newLiEl = document.createElement("li");
  let newTaskContent = document.createTextNode(taskContent);
  let newDeleteBtn = createDeleteBtn();
  newLiEl.appendChild(newTaskContent); 
  newLiEl.appendChild(newDeleteBtn);
  return newLiEl; // <li>Content <span class="close">x<span/><li/>
};

// create new delete button element
let createDeleteBtn = () => {
  let deleteBtn = document.createElement("span");
  let deleteBtnContent = document.createTextNode("X");
  deleteBtn.appendChild(deleteBtnContent);
  deleteBtn.classList.add("close");

  return deleteBtn; // <span class="close">x<span/>
};

// callback function
let newElement = () => {
  let inputValue = inputEl.value;
  try {
    if (isEmptyString(inputValue)) {
      // throwError("Input can not be empty");
      throw new Error("Input can not be empty");
    }

    // create new list item
    let newLiEl = createTaskEl(inputValue); // <li>Content <span class="close">x<span/><li/>

    // add event for new list item
    assignSingleClickEvent(newLiEl);
    // add new task to current task list
    tdParentEl.appendChild(newLiEl);

    // clear input after add new task
    inputEl.value = "";
  } catch (error) {
    console.log(error.message);
    console.log(error.stack);
  }
};

let checkedEvent = (li) => {
  li.classList.toggle("checked");
};

let deleteEvent = (deleteBtn) => {
  // get parent single list element of btn
  let parentEl = deleteBtn.parentElement;

  // remove the list element from the list
  tdParentEl.removeChild(parentEl);
};

// assign event listener

// click event
let assignClickEvent = () => {
  let tdList = Array.from(tdParentEl.querySelectorAll("li"));
  for (const td of tdList) {
    assignSingleClickEvent(td);
  }
};

let assignSingleClickEvent = (li) => {
  li.addEventListener("click", function (e) { // Event Object
    if (isCorrectTargetTag(e.target.tagName.toLowerCase(), "li")) {
      checkedEvent(li);
    }

    if (e.target.classList.contains("close")) {
      deleteEvent(e.target);
    }
  });
};

assignClickEvent();
