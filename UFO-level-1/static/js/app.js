// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Loop through table & add values to table
function displayData(data){
    tbody.text("")
    data.forEach(function(ufo_sighting){
    new_table_row = tbody.append("tr")
    Object.entries(ufo_sighting).forEach(function([key, value]){
        new_table_cell = new_table_row.append("td").text(value)
    })    
    })}

    displayData(tableData)

// Select user input and the filter button
var dateInputText = d3.select("#datetime")
var button = d3.select("#filter-btn")

// Filter data within table to display user input
function buttonClick(){
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Create & display new table with filtered/searched data
    var filtered_table = tableData.filter(ufo_sighting => ufo_sighting.datetime===dateInputText.property("value"))
    displayData(filtered_table);
}

// Event listener
button.on("click", buttonClick);

