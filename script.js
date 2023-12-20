const myLibrary = [];

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

function removeBook(index) {
  return myLibrary.splice(index, 1);
}

const tbody = document.querySelector("tbody");

let redraw = function () {
  tbody.innerHTML = "";
  for (let [i, book] of myLibrary.entries()) displayBook(i);
};

let creation = document.createElement("tbody");

function displayBook(index) {
  let { author, title, year, status } = myLibrary[index];
  let newTr = `<tr data-index=${index}>
  <th>${title}</th>
  <th>${author}</th>
  <th>${year}</th>
  <th><button type="button" class="change-status-${index}">${
    status ? "Read" : "Unread"
  }</button></th>
  <th><button type="button" class="remove-${index}">Remove</button></th>
  </tr>`;

  creation.innerHTML = newTr;
  tbody.appendChild(creation.firstChild);

  let removeBtn = document.querySelector(`.remove-${index}`);

  removeBtn.addEventListener("click", function (e) {
    removeBook(index); // сохраняться closure from diplayBook
    // обновить список книг через новую отрисовку dislayBook
    redraw();
  });

  let changeStatus = document.querySelector(`.change-status-${index}`);

  changeStatus.addEventListener("click", function (e) {
    myLibrary[index].status = !myLibrary[index].status;
    redraw();
  });
}

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
  // или можно for (let i = 0; i < myLibrary.length; i++) displayBook(i)
  // если хочется все нарисовать - это думала так.

  title.value = "";
  author.value = "";
  year.value = "";
});

//two pointers technic
// function theirMoveZero (nums) {
//   let left = 0;
//   let right = 0;

//   while(right < nums.length) {
//     if(nums[right] !== 0){
//       [nums[left], nums[right]] = [nums[right], nums[left]];
//       left++
//     }
//     right++
//   }
//   return nums;
// }

// function addingShifted(arrayOfArrays, shift) {
//   let result = [];
//   for (let i = 0; i < arrayOfArrays.length; i++) {
//     for (let j = 0; j < arrayOfArrays[i].length - shift; j++) {
//       let elem = arrayOfArrays[i][j + shift] + arrayOfArrays[i + 1][j];

//       console.log(elem);
//       result.push(elem);
//     }
//   }
//   return result;
// }

// console.log(

//   addingShifted(
//     [
//       [1, 2, 3, 4, 5, 6],
//       [7, 7, 7, 7, 7, 7],
//     ],
//     3
//   )
// );
