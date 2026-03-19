const books = [
  {
    title: "Nineteen Eighty-Four",
    authorName: "George Orwell",
    releaseYear: 1949,
  },
  {
    title: "Quiet",
    authorName: "Fearne Cotton",
    releaseYear: 2018,
  },
  {
    title: "The Power of Your Subconscious Mind",
    authorName: "Joseph Murphy",
    releaseYear: 1963,
  }
];

function sortByYear(a, b) {
  if (a.releaseYear < b.releaseYear) {
    return -1;
  }
  if (a.releaseYear > b.releaseYear) {
    return 1;
  }
  return 0;
}

const filteredBooks = books.filter(book => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);