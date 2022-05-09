function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

  //let response = await fetch("https://anapioficeandfire.com/api/books")
  //let commits = await response.json(); // read response body and parse as JSON
  //renderBooks(commits);

  fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then( json => {
      console.log('total num pages is ' + totalNumPages(json));  // 6626
      return renderBooks(json);
    })
}

function totalNumPages(books) {
  return books.reduce(
    (acc, curr) => acc = (acc + curr['numberOfPages'])
  ,0);  // where this is the initial amount
}

/*
  1) index.js
       fetchBooks()
         renders book titles into the DOM by passing a JSON object to renderBooks():
     TypeError: Cannot read properties of undefined (reading 'then')


    it( "renders book titles into the DOM by passing a JSON object to renderBooks()", async () => {
      chai.spy.on( window, 'renderBooks' );
      await fetchBooks().then(() => {
        expect( window.renderBooks ).to.have.been.called();
      })
    } )
  } )
*/

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    //h2.innerHTML = book.name;
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
