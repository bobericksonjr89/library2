let myLibrary = [];

function Book(title, author, pages, haveRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead ? 'has been read' : 'not read yet'}`
}

// DOM CAPTURE //

const body = document.querySelector('body');
const main = document.querySelector('main');

// DUMMY DATA //

const hobbit = new Book('The Hobbit', 'Tolkein', 295, false);
const phenomenology = new Book('Phenomenology of Spirit', 'Hegel', 689, false);
const cien = new Book('Cien Anos de Solidad', 'Gabriel Garcia Marquez', 451, true);

addBookToLibrary(hobbit);
addBookToLibrary(phenomenology);
addBookToLibrary(cien);

// FUNCTIONS //

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(books) {
  books.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('card')
    main.appendChild(card);

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    card.appendChild(cardHeader);

    const cardTitle = document.createElement('h2');
    cardTitle.classList.add('card-title')
    cardTitle.textContent = book.title;
    cardHeader.appendChild(cardTitle);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    const cardAuthor = document.createElement('p');
    cardAuthor.classList.add('card-author');
    cardAuthor.textContent = book.author;
    cardBody.appendChild(cardAuthor);

    const cardPages = document.createElement('p');
    cardPages.classList.add('card-pages');
    cardPages.textContent = `${book.pages} pages`;
    cardBody.appendChild(cardPages);

    const cardButton = document.createElement('button');
    cardButton.classList.add('card-button');
    cardButton.textContent = `${book.haveRead ? "Read" : "Unread"}`;
    cardBody.appendChild(cardButton);

  })
}

displayBooks(myLibrary);
