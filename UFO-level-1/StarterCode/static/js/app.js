
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
