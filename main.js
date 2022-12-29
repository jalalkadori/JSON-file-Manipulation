// Create an XMLHttpRequest object:
var xhr = new XMLHttpRequest();
let table = document.getElementById('table');
let row = document.createElement('tr');
let cell = document.createElement('td');
let output = document.getElementById('output');

// Open a connection to the JSON file using the open() method:
xhr.open('GET', 'movies.json', true);
xhr.responseType = 'json';
xhr.send();
xhr.addEventListener('load', function() {
    var Movies_data = xhr.response;
    let moviesList = Movies_data ;
    console.log(moviesList);
    console.log(moviesList.movies[0].festivals[1]);
  });


