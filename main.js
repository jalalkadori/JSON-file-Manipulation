var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Parse the JSON file
    var json = JSON.parse(this.responseText);
    var moviesList = json.movies;
    // Do something with the JSON data
    console.log(moviesList);
    // For example, you could display the data in a table or list
    displayData(moviesList);
  }
};

xhr.open("GET", "movies.json", true);
xhr.send();

function displayData(data) {
  // Code to display the data goes here
  var table = document.getElementById('table');
  var tableData = '';
  for(let i=0; i < data.length; i++) {
    tableData+= 
      `<tr>
        <td scope="col">${i+1}</td>
        <td scope="col">${data[i].title}</td>
        <td scope="col">${data[i].director}</td>
        <td scope="col">${data[i].duration}</td>
        <td scope="col">${data[i].year}</td>
        <td scope="col"><img src="${data[i].poster}" width="100px"></td>
        <td scope="col">${data[i].festivals}</td>
        <td scope="col">
          <ul class="list-group">
            <li class="list-group-item">Name : ${data[i].actors[0].name}</li>
            <li class="list-group-item">First Name : ${data[i].actors[0].firstname}</li>
            <li class="list-group-item">Nationality: ${data[i].actors[0].nationality}</li>
          </ul>
        </td>
      </tr>`
  }
  table.innerHTML = tableData;
  
}


