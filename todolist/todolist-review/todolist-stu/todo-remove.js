// them nut xoa cho moi the li
for (li of liList) {
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
}

// them su kien xoa cho moi the li
const close = document.getElementsByClassName("close");
for (c of close) {
  c.addEventListener("click", function () {
    const div = this.parentElement;
    div.style.display = "none";
  });
}
