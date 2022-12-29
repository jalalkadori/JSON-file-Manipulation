// Create an XMLHttpRequest object:
var xhr = new XMLHttpRequest();
// Open a connection to the JSON file using the open() method:
xhr.open('GET', 'movies.json', true);
xhr.responseType = 'json';
xhr.send();
xhr.addEventListener('load', function() {
    var data = xhr.response;
    console.log(data)














  });

