function shelfBook(title, shelfName) {
  if (shelfName.length < 3) {
    return shelfName.unshift(title);
  } else {
    return;
  };
};

function unshelfBook(title, shelfName) {
  for (var i = 0; i < shelfName.length; i++) {
    if (shelfName[i].title === title) {
      shelfName.splice(i, 1);
      return shelfName;
    };
  };
};

// listTitles Round 1!
// function listTitles(shelfName) {
//   return `${shelfName[0].title}, ${shelfName[1].title}, ${shelfName[2].title}`;
// };

function listTitles(shelfName) {
  var titles = [];
  for (var i = 0; i < shelfName.length; i++) {
    titles.push(shelfName[i].title);
  };
  return titles.join(", ");
};

// searchShelf Round 1!
// function searchShelf(shelfName, title) {
//   for (var i = 0; i < shelfName.length; i++) {
//     if (shelfName[i].title === title) {
//       return true;
//     } else {
//       continue;
//     };
//   };
//   return false;
// };

function searchShelf(shelfName, title) {
  var titles = [];
  for (var i = 0; i < shelfName.length; i++) {
    titles.push(shelfName[i].title);
  };
  return titles.includes(title);
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
