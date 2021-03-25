function createTitle(bookTitle) {
  return "The " + bookTitle;
}

function buildMainCharacter(charName, charAge, charPronouns) {
  return {
    name: charName,
    age: charAge,
    pronouns: charPronouns,
  };
}

function saveReview(reviewText, reviewArr) {
  for (var i = 0; i <= reviewArr.length; i++) {
    if (reviewText === reviewArr[i]) {
      return;
    } else {
      return reviewArr.push(reviewText);
    };
  };
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(bookTitle, mainChar, bookGenre) {
  return {
    title: bookTitle,
    mainCharacter: mainChar,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre,
  };
}

function editBook(bookTitle) {
  bookTitle.pageCount = bookTitle.pageCount * 0.75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
