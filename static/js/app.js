// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create a function
function buildTable(data) {
    // Add code to clear table
    tbody.html("");
    // Add a forEach loop
    data.forEach((dataRow) => {
        // Create a variable that will allow us to append each row to the table
        let row = tbody.append("tr");
        // Create a forEach function that iterates through each object in the array and appends the row
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}
