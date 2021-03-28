function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
};

// OH MY GODDDD BRACKET NOTATION ILU what a breakthrough
// This was my original approach

// function addBook(library, book) {
//   if (book.genre === 'fantasy') {
//     return library.shelves.fantasy.push(book);
//   } else if (book.genre === 'nonFiction') {
//     return library.shelves.nonFiction.push(book);
//   } else {
//     return library.shelves.fiction.push(book);
//   };
// };


function addBook(library, book) {
  library['shelves'][book.genre].push(book);
};

// function checkoutBook(library, title, genre) {
//   console.log(library['shelves'][genre]); // Array containing book objects!
//   library['shelves'][genre].pop();
//   return `You have now checked out ${title} from the ${library.name}`;
// };


function checkoutBook(library, title, genre) {
  var titlesOnShelf = [];

  for (i = 0; i < library['shelves'][genre].length; i++) {
    titlesOnShelf.push(library['shelves'][genre][i]['title']);
  };

  // WIP code
  // console.log(titlesOnShelf);
  // console.log(library['shelves'][genre]); // Array containing book objects!
  // library['shelves'][genre].pop(); // Removes last book from shelf
    // Could be improved to only check out specified book
  // return `You have now checked out ${title} from the ${library.name}`;

  if (titlesOnShelf.includes(title)) {
    library['shelves'][genre].pop();
    return `You have now checked out ${title} from the ${library.name}`;
  } else {
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
  };
};


// alternate method
// function checkoutBook(library, title, genre) {
//   for (var i = 0; i < library['shelves'][genre].length; i++) {
//     if (library['shelves'][genre][i]['title'] === title) {
//       library['shelves'][genre].pop();
//       return `You have now checked out ${title} from the ${library.name}`;
//     };
//   };
//   return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
// };


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
