//pull data
var tableData = data;

// table variable

var tbody = d3.select("tbody");

  console.log(data);

 //append rows 
data.forEach(function(reportSightings) {
  console.log(reportSightings);
  var row = tbody.append("tr");

  // append key value pairs
  Object.entries(reportSightings).forEach(function([key, value]){
    console.log(key, value);

    // show text
    var cell = row.append("td");
    cell.text(value);
        });
});

