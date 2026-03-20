const books = [
  {
    title: "Nineteen Eighty-Four",
    authorName: "George Orwell",
    releaseYear: 1949,
    pages: 328,
  },
  {
    title: "Quiet",
    authorName: "Fearne Cotton",
    releaseYear: 2018,
    pages: 256,
  },
  {
    title: "The Power of Your Subconscious Mind",
    authorName: "Joseph Murphy",
    releaseYear: 1963,
    pages: 320,
  },
  {
    title: "The Hobbit",
    authorName: "J.R.R. Tolkien",
    releaseYear: 1937,
    pages: 310,
  },
  {
    title: "Atomic Habits",
    authorName: "James Clear",
    releaseYear: 2018,
    pages: 320,
  }
];

// Write sortByYear here
function sortByYear(a, b) {
  if (a.releaseYear < b.releaseYear) {
    return -1;
  }
  if (a.releaseYear > b.releaseYear) {
    return 1;
  }
  return 0;
}

// Create classicBooks here
const classicBooks = books.filter((book => book.releaseYear <=2000))
classicBooks.sort(sortByYear);
// Write getBookTitles here
function getBookTitles(catalog){
    return catalog.map((books => books.title))
}
// Write getTotalPages here
function getTotalPages(catalog){
    return catalog.reduce((acc, curVal) => acc + curVal.pages)
}
// Write findBookIndex here
function findBookIndex(arr, year){
    book.sort(sortByYear)
    const index = arr.findindex(value => value >=year)
    if (index === -1){
        return arr.length;
    } else {
        return index;
    }
}
console.log(classicBooks);
console.log(getBookTitles(books));
console.log(getTotalPages(books));
console.log(findBookIndex(classicBooks, 1950));