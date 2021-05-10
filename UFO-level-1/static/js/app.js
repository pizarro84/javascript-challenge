// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function createTab(data) {
  tbody.html("");

  data.forEach((dataRow) => {
    const row = tbody.append("tr");

    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

// create button click function
function clickButton() {

  const sighting_date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  if (sighting_date) {
    filteredData = filteredData.filter(row => row.datetime === sighting_date);
  }

  createTab(filteredData);
}

// create button event
document.getElementById("filter-btn").onclick = clickButton;

createTab(tableData);
