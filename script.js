const myLibrary = [];
const tbody = document.querySelector("tbody");
let creation = document.createElement("tbody");

function Book(title, author, year, status) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.status = status;
}

const addBookToLibrary = function (newBook) {
  myLibrary.push(newBook);
  return myLibrary;
};

const removeBook = function (index) {
  return myLibrary.splice(index, 1);
};

const redraw = function () {
  tbody.innerHTML = "";
  for (let [i, book] of myLibrary.entries()) displayBook(i);
};

tbody.addEventListener("click", function (e) {
  let index;
  let currentElem = e.target;
  while (currentElem.parentNode) {
    currentElem = currentElem.parentNode;
    if (currentElem.tagName === "TR") {
      index = +currentElem.dataset.index;
      break;
    }
  };
  
  if (e.target.classList.contains(`remove`)) {
    console.log(index);
    removeBook(index);
    redraw();
  } else if (e.target.classList.contains("status")) {
    myLibrary[index].status = !myLibrary[index].status;
    redraw();
  }
});

const displayBook = function (index) {
  let { author, title, year, status } = myLibrary[index];
  let newTr = `<tr data-index="${index}">
  <th>${title}</th>
  <th>${author}</th>
  <th>${year}</th>
  <th><button type="button" class="status">${
    status ? "Read" : "Unread"
  }</button></th>
  <th><button type="button" class="remove">Remove</button></th>
  </tr>`;

  creation.innerHTML = newTr;
  tbody.appendChild(creation.firstChild);
};

const dialog = document.querySelector("dialog");
const newBookBtn = document.querySelector(".new-book");
const addNewBookBtn = document.querySelector(".add");

newBookBtn.addEventListener("click", function () {
  dialog.showModal();
});

addNewBookBtn.addEventListener("click", function (e) {
  e.preventDefault();
  dialog.close();
  let title = document.querySelector('[name="title"]');
  let author = document.querySelector('[name="author"]');
  let year = document.querySelector('[name="year"]');
  let status = document.querySelector('[name="status"]');

  let newBook = new Book(
    title.value,
    author.value,
    year.value,
    !!status.checked
  );

  addBookToLibrary(newBook);

  displayBook(myLibrary.length - 1);

  title.value = "";
  author.value = "";
  year.value = "";
});

