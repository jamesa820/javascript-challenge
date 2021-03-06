// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

console.log(data);

// Loop through the data append table rows
data.forEach(function(reportSightings) {
  console.log(reportSightings);
  var row = tbody.append("tr");

  // console.log sightings data
  Object.entries(reportSightings).forEach(function([key, value]){
    console.log(key, value);

    // append cell values
    var cell = row.append("td");
    cell.text(value);
        



    // Get the value property of the input element
    var button = d3.select("#filter-btn");

    //  Select the form
    var form = d3.select(".filter list-group-item");

    // Create event handlers 
    button.on("click", runEnter);
    form.on("submit",runEnter);

    // Complete the event handler function for the form
    function runEnter() {

      // Prevent the page from refreshing
     d3.event.preventDefault();
          
      // Select the input element and get the raw HTML node
      var inputElement = d3.select("#datetime");

      // Get the value property of the input element
      var inputValue = inputElement.property("value");

      console.log(inputValue);
      console.log(tableData);

      var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);

      console.log(filteredData);

    

    };
  });     
});      
