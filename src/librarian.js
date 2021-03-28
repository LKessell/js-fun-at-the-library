class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  };

  greetPatron(name, isMorning) {
    if (isMorning) {
      return 'Good morning, Amy!';
    } else {
      return 'Hello, ' + name + '!';
    };
  };

  findBook(title) {
    for (var i = 0; i <= this.library['shelves']['fantasy'].length; i++) {
      if (this.library['shelves']['fantasy'][i].title === title) {
        this.library['shelves']['fantasy'].pop();
        return `Yes, we have ${title}`;
      } else {
        return `Sorry, we do not have ${title}`;
      };
    };
  };

  calculateLateFee(days){
    return Math.ceil(days * 0.25);
  };
};

module.exports = Librarian;
