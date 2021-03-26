function shelfBook(title, shelfName) {
  if (shelfName.length < 3) {
    return shelfName.unshift(title);
  } else {
    return;
  };
}

function unshelfBook(title, shelfName) {
  for (var i = 0; i < shelfName.length; i++) {
    if (shelfName[i].title === title) {
      shelfName.splice(i, 1);
      return shelfName;
    };
  };
}

function listTitles(shelfName) {
  return `${shelfName[0].title}, ${shelfName[1].title}, ${shelfName[2].title}`;
}

function searchShelf(shelfName, title) {
  for (var i = 0; i < shelfName.length; i++) {
    if (shelfName[i].title === title) {
      return true;
    } else {
      continue;
    };
  };
  return false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
