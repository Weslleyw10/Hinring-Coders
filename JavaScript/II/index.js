const books = require('./data')
const readlineSync = require('readline-sync');


const filterByCategory = readlineSync.question('Buscar por categoria (s/n)? ');

if (filterByCategory == 's') {
    console.log("Categorias disponíveis: ")

    books.forEach((category, index) => {
        console.log(`${index} - ${category.category}`)        
    });

    const categoryBook = readlineSync.question('Escreva o nome de uma categoria: ');

    // filter books
    const booksFiltered = books.filter(book => (book.category === categoryBook))
    console.table(booksFiltered)

} else {

    // const booksSorted = books.sort((a, b) => {
    //     if (a.pages > b.pages) {
    //         return 1;
    //       }
    //       if (a.pages < b.pages) {
    //         return -1;
    //       }
    // })

    const booksSorted = books.sort((a,b) => a.pages - b.pages)

    console.table(booksSorted)
}

