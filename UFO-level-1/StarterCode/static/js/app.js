
var tableData = data;


var tbody = d3.select("tbody");

console.log(data);

data.forEach(function(reportSightings) {
  console.log(reportSightings);
  var row = tbody.append("tr");

  Object.entries(reportSightings).forEach(function([key, value]){
    console.log(key, value);

    var cell = row.append("td");
    cell.text(value);
        });
});

var button = d3.select("#filter-btn");

var form = d3.select("#form");

button.on("click",runEnter);
form.on("submit",runEnter);

function runEnter(){
  d3.event.preventDefault();

  var inputElement = d3.select("date");

  var inputValue = inputElement.property("value");
  
  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(tableData=> tableData.datetime===inputValue);
  
  console.log(filteredData);

};
