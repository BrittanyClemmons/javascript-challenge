var table = d3.select("tbody");

//Assign the data from 'data.js' to a descriptive variable

var ufo = data;

//Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    table.selectAll("tr").remove();

    //Select the input element and get the raw HTML node
    var inputUser = d3.select("#datetime");

    //Get the value property of the user input
    var inputDate = inputUser.property("value");

    console.log(inputDate);
    console.log(ufo);

    var filteredData = ufo.filter(i => i.datetime === inputDate);

    console.log(filteredData);
    
    var tbody = d3.select("tbody");

    filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});