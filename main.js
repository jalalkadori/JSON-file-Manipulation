var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Parse the JSON file
    var json = JSON.parse(this.responseText);
    var moviesList = json.movies;
    // printing the array to the console for testing
    console.log(moviesList);
    // calling the display function with the array moviesList as a paramettre
    displayData(moviesList);
  }
};

xhr.open("GET", "movies.json", true);
xhr.send();

function displayData(data) {
  //display the data in the table html
  var table = document.getElementById('table');
  var tableData = '';
  for(let i=0; i < data.length; i++) {
    let actorsList = '';
    for(let k = 0; k< data[i].actors.length; k++) {
      actorsList+= 
      `<ul class="list-group mt-1 list-group-flush">
        <li class="list-group-item">Name : ${data[i].actors[k].name}</li>
        <li class="list-group-item">First Name : ${data[i].actors[k].firstname}</li>
        <li class="list-group-item">Nationality: ${data[i].actors[k].nationality}</li>
      </ul>`
    }
    let festivalsList = '';
    for(let j = 0; j < data[i].festivals.length; j++) {
      festivalsList+= 
      `<ul class="list-group list-group-flush">
        <li class="list-group-item">${data[i].festivals[j]}</li>
      </ul>`
    }
    tableData+= 
      `<tr>
        <td scope="col">${i+1}</td>
        <td scope="col">${data[i].title}</td>
        <td scope="col"><img src="${data[i].poster}" width="100px"></td>
        <td scope="col">${data[i].director}</td>
        <td scope="col">${data[i].duration} Min</td>
        <td scope="col">${data[i].year}</td>
        <td scope="col">${festivalsList}</td>
        <td scope="col">${actorsList}</td>
      </tr>`
  }
  table.innerHTML = tableData;
}

function search() {
  // Declare variables
  var td;
  var cellTxtValue;
  var input = document.getElementById("searchInput");
  var error = document.getElementById("error");
  // Forma user input to upper case 
  var filter = input.value.toUpperCase();
  var table = document.getElementById("table");
  var tr = table.getElementsByTagName("tr");
  // Loop through all table rows, and hide those who don't match the search query
  for (let i = 0; i < tr.length; i++) {
    error.innerHTML = '';
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      cellTxtValue = td.innerText;
      //formating table cell text to uppercase to match the user input
      if (cellTxtValue.toUpperCase().indexOf(filter) > -1) {
        // if the index of the filter var is greater than -1, table cells that matches the search will be displyed 
        tr[i].style.display = "";
        
      } else {
        // table cells that matches the search will be displyed 
        tr[i].style.display = "none";
        error.innerHTML = `NO films matches your search : ${input.value}`;
      }
    }
  }
}


