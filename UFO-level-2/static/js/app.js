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

var dataFilter = {};

// create button click function
function filterData() {

  let data = tableData;

  // iterate through the filter and remove non matching data
  Object.entries(dataFilter).forEach(([key, value]) => {
    data = data.filter(row => row[key] === value);
  });

  createTab(data);
}

function clickButton() {

  var updatedVal = d3.select(this).select("input");
  var elementVal = updatedVal.property("value");
  var fliter_id = updatedVal.attr("id");

  if (elementVal) {
    dataFilter[fliter_id] = elementVal;
  }
  else {
    delete dataFilter[fliter_id];
  }

  // Call function to apply all filters and rebuild the table
  filterData();
}

// create button event
//document.getElementById("filter-btn").onclick = clickButton;
d3.selectAll(".filter").on("change", clickButton);

createTab(tableData);
