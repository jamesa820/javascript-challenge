const reportSightings = window.data;
const tbodyToWipe = document.getElementById('ufo-table');

function handleFilterButtonClick() {
  const userFilterValue = d3.select('#datetime').property('value');
  const filteredSightings = reportSightings.filter(reportSighting => reportSighting.datetime === userFilterValue);
  resetTable();
  filterReportSightingsIntoTable(filteredSightings);
}

function handleFilterInputKeyup(event) {
  if (event.keyCode === 13) {
    handleFilterButtonClick();
  }
}

function resetTable() {
  tbodyToWipe.innerHTML = `<thead>
      <tr>
        <th class="table-head">Date</th>
        <th class="table-head">City</th>
        <th class="table-head">State</th>
        <th class="table-head">Country</th>
        <th class="table-head">Shape</th>
        <th class="table-head">Duration</th>
        <th class="table-head">Comments</th>
      </tr>
    </thead>
    <tbody></tbody>`;
}

function filterReportSightingsIntoTable(sightings) {
  var tbody = d3.select('tbody');
  sightings.forEach(sighting => {
    const row = tbody.append('tr');
    Object.entries(sighting).forEach(([key, value]) => {
      row.append('td').text(value);
    });
  });
}

filterReportSightingsIntoTable(reportSightings);
