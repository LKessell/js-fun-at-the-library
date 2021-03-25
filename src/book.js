function createTitle(title) {
  return "The " + title;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns,
  };
}

function saveReview(reviewText, reviews) {
  for (var i = 0; i <= reviews.length; i++) {
    if (reviewText === reviews[i]) {
      return;
    } else {
      return reviews.push(reviewText);
    };
  };
}

function calculatePageCount(title) {
  return title.length * 20;
}

function writeBook(title, mainCharacter, genre) {
  return {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
  };
}

function editBook(title) {
  title.pageCount = title.pageCount * 0.75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
