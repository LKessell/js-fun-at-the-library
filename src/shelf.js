function shelfBook(bookTitle, shelfName) {
  if (shelfName.length < 3) {
    return shelfName.unshift(bookTitle);
  } else {
    return;
  };
}

function unshelfBook(bookTitle, shelfName) {
  for (i = 0; i < shelfName.length; i++) {
    if (shelfName[i].title === bookTitle) {
      shelfName.splice(i, 1);
      return shelfName;
    };
  };
}



module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
