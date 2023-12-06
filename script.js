const myLibrary = [];

function Book(title, author, year, status) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.status = status;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
  return myLibrary;
}

let newBook1 = new Book("1984", "George Orwell", 1949, "Read");

let newBook2 = new Book("Demons", "Fyodor Dostoevsky", 1872, "Read");

addBookToLibrary(newBook1);
addBookToLibrary(newBook2);

const tbody = document.querySelector("tbody");

function displayBook(myLibrary) {
  
  for (let i = 0; i < myLibrary.length; i++) {
    const newTr = document.createElement("tr");
    const tdAuthor = document.createElement("td");
    const tdTitle = document.createElement("td");
    const tdYear = document.createElement("td");
    const tdStatus = document.createElement("td");
    const removeBtn = document.createElement('button');
    const changeStatus = document.createElement('button')
    tbody.appendChild(newTr);
    tdAuthor.textContent = myLibrary[i].author;
    tdTitle.textContent = myLibrary[i].title;
    tdYear.textContent = myLibrary[i].year;
    tdStatus.textContent = myLibrary[i].status;
    newTr.appendChild(tdTitle);
    newTr.appendChild(tdAuthor);
    newTr.appendChild(tdYear);
    newTr.appendChild(tdStatus);
    newTr.appendChild(removeBtn);
    newTr.appendChild(changeStatus);
  }
}

 const dialog = document.querySelector('dialog');
 const newBookBtn = document.querySelector('.new-book');
 const addBtn = document.querySelector('.add')

 newBookBtn.addEventListener('click', function() {
  dialog.showModal()
 })

 addBtn.addEventListener("click", function(e){
  e.preventDefault();
  dialog.close();
  let title = document.querySelector('[name="title"]');
  let author = document.querySelector('[name="author"]')
  let year = document.querySelector('[name="year"]')
  let status = document.querySelector('[name="status"]')

  let newBook = new Book(title.value, author.value, year.value, status.value );
  addBookToLibrary(newBook)
  displayBook(myLibrary)
 })
