//Assign the data from 'data.js' to a descriptive variable
var ufo = data;

//Select the button
var button = d3.select("#button");

button.on("click", function() {

    //Select the input element and get the raw HTML node
    var inputUser = d3.select("#datetime");

    //Get the value property of the user input
    var inputDate = inputUser.property("value");

    console.log(inputDate);
    console.log(ufo);

    var filteredData = ufo.filter(i => i.datetime === inputDate);

    console.log(filteredData);

    filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([value]) => {
            var cell = row.append("<td>");
            cell.text(value);
        });
    });
});