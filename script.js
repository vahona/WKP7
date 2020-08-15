console.log('work');

// Creating an object

const books = [
    {
        id: 'rowling',
        pages: 323,
        title: 'Harry Potter and philosother stone',
        author: 'JK Rowling',
        genre: 'Fantasy',
        read: true,
    },
    {
        id: 'rober',
        pages: 434,
        title: 'Clean code: A handbook of Software Engenering',
        author: 'Rober C. Martin',
        genre: 'IT',
        read: false,
    },
    {
        id: 'adam',
        pages: 200,
        title: 'Refactoring UI',
        author: 'Adam wathan',
        genre: 'Desing',
        read: true,
    },
    {
        id: 'min',
        pages: 496,
        title: 'Panchico',
        author: 'Min Jin Lee',
        genre: 'Fiction',
        read: true,
    },
    {
        id: 'tara',
        pages: 400,
        title: 'Educated',
        author: 'Tara Westover',
        genre: 'Memoir',
        read: false,
    },
];

const lists = [];

// Grabing some Element I might need

const list = document.querySelector('.detail_book');
const addButton = document.querySelector('.add-button');


// Creating html (generate the html)

const loadSomeBook = () => {

const html = books.map(book => {
     return `
      <ul class="list-detail" >
            <li class = "title-book">
             ${book.title}
            </li>
            <li class = "author-book">
             ${book.author}
            </li>
            <li class = "genre-book">
              ${book.genre}
            </li>
            <li class = "page-book">
              ${book.pages}
            </li>
            <li class = "check-book">
              <fieldset>
                <input type="checkbox" id="${book.id}" />
              </fieldset>
            </li>
            <li>
            <img class = "icon" src = "./assets/delete.png" alt = "delete">
            </li>
      </ul>
    `
   
}).join('');
    list.innerHTML = html;
};

loadSomeBook();


// Grabe some element in html which relate to the input form

const form = document.querySelector('.select');


const newTitle = document.querySelector('#title-store');
const newAuthor = document.querySelector('#author-store');
const newgenre = document.querySelector('#genre-store');
const newpage = document.querySelector('#pagenumber-store');
const newStatus = document.querySelector('#status-store');

// Array 

let newBs = [];

// Function to generate the new list of book
const addSomeBook = (e) => {

  e.preventDefault();

  // Creat a copy of the 
  
  let filterBook = [...books];
  
    const newB = {
      
      title: title.value,
      author: author.value,
      genre: genre.value,
      page: page.value,
      

    };
    newBs.push(newB);

   
    addSomeBook();
  }
  
  

// Creat html for the new list

  const myHtml = `
  <ul class="list-new-detail" >
            <li class = "title-book">
             ${title.value}
            </li>
            <li class = "author-book">
             ${author.value}
            </li>
            <li class = "genre-book">
              ${genre.value}
            </li>
            <li class = "page-book">
              ${pages.value}
            </li>
            <li class = "check-book">
              <fieldset>
                <input type="checkbox" id="${book.id}" />
              </fieldset>
            </li>
            <li>
            <img class = "icon" src = "./assets/delete.png" alt = "delete">
            </li>
      </ul>
  `

  list.innerHTML = myHtml;

// Fuction for deleting the items


const deleteItime = () => {
  newBs = newBs
}



// Listen to the button 

form.addEventListener('click', addSomeBook)

