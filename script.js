const myLibrary = [];


function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.status = status;
}

const addBookToLibrary = function (newBook) {
  myLibrary.push(newBook);
  return myLibrary;
};


let newTr = `<tr>
<th>${title}</th>
<th>${author}</th>
<th>${year}</th>
<th><button>${bookStatus}</button></th>
<th><button>Remove</button></th>
</tr>`;


function removeBook() {}

const tbody = document.querySelector("tbody");

function displayBook(myLibrary) {
  
  document.tbody.innerHTML(newTr);
  tdAuthor.textContent = myLibrary[myLibrary.length - 1].author;
  tdTitle.textContent = myLibrary[myLibrary.length - 1].title;
  tdYear.textContent = myLibrary[myLibrary.length - 1].year;
  tdStatus.textContent = myLibrary[myLibrary.length - 1].status;
  newTr.appendChild(tdTitle);
  newTr.appendChild(tdAuthor);
  newTr.appendChild(tdYear);
  newTr.appendChild(tdStatus);
  tdStatus.appendChild(statusBtn);
  newTr.appendChild(tdRemove);
  tdRemove.appendChild(removeBtn);

  removeBtn.addEventListener("click", function (e) {
    e.preventDefault();

    newTr.removeChild(tdTitle);
    newTr.removeChild(tdAuthor);
    newTr.removeChild(tdYear);
    newTr.removeChild(tdStatus);
    tdStatus.removeChild(statusBtn);
    newTr.removeChild(tdRemove);
    tdRemove.removeChild(removeBtn);
  });

  statusBtn.addEventListener("click", function (e, statusBtn) {
    e.preventDefault();
    myLibrary[myLibrary.length - 1].toggleStatus();
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

  let newBook = new Book(title.value, author.value, year.value);

  addBookToLibrary(newBook);
  displayBook(myLibrary);

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