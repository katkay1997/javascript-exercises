const getTheTitles = function(books) {

  const titles = books.map(book => { 
     return book.title;
  });
     
   return titles;
 };
 



// Do not edit below this line
module.exports = getTheTitles;



/*
   const value = books[0].title + books[1].title
    const empty = [' '];
    return empty.push(value);

*/