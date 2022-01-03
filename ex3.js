//OBJECTS AND OBJECT CONSTRUCTORS//

function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(`${this.title} by ${this.author}, ${this.pages}, ${this.read}`);
  };
  return console.log(this.info);
}

const theHobbit = new Books(
  "The Hobbit",
  "J.R.R. Tolkien",
  "295",
  "not read yet"
);
