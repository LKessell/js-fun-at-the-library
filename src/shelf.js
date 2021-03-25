function shelfBook(bookTitle, shelfName) {
  if (shelfName.length < 3) {
    return shelfName.unshift(bookTitle);
  } else {
    return;
  };
}


module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};
