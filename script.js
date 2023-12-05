const myLibrary = [
  {
    title: "Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    status: "read",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    status: "read",
  },
];

function Book(title, author, year, status) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.status = status;
}

let bookContainer = document.querySelector('tbody');


function addBookToLibrary(myLibrary) {
    for(let book of myLibrary ) {

    }
}
