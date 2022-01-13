
region_array = []
date_array = []

var region_dropdown = d3.select("#selRegion");
var date_dropdown = d3.select("#selDate");

d3.csv("spotify.csv").then((data) => {
    // console.log("data")
    // console.log(data)

    // Region drop-down
    data.forEach((row) => {
        if (region_array.indexOf(row.Region) == -1) {
            region_array.push(row.Region)
        }
    })

    console.log("Region")
    console.log(region_array)

    region_dropdown.append("option")
        .text("Select Region")
        .property("value", "");

    region_array.sort()

    region_array.forEach((region) => {
        region_dropdown.append("option")
            .text(region)
            .property("value", region);
    });

    //Date drop-down
    data.forEach((row) => {
        if (date_array.indexOf(row.Date) == -1) {
            date_array.push(row.Date)
        }
    })

    date_dropdown.append("option")
        .text("Select Date")
        .property("value", "");

    date_array.forEach((date) => {
        date_dropdown.append("option")
            .text(date)
            .property("value", date);
    });

})

var tbody = d3.select("tbody");

// function that updates the dashboard
function btnClick() {
    const myRegion = d3.select("#selRegion").property("value");
    const myDate = d3.select("#selDate").property("value");
    console.log("myRegion + myDate");
    console.log(myRegion + "  " + myDate);

    x_array = []
    y_array = []
    songs_array = []

    d3.csv("spotify.csv").then((data) => {
        region_results = data.filter(row => row.Region == myRegion);
        console.log("region_results");
        console.log(region_results);

        date_results = region_results.filter(row => row.Date == myDate);
        console.log("date_results");
        console.log(date_results);

        for (var i = 0; i < 10; i++) {
            x_array.push(date_results[i]["Streams"])
            y_array.push(date_results[i]["Artist"])
            songs_array.push(date_results[i]["Track Name"])
        }

        console.log("x_array");
        console.log(x_array);

        var bar_chart = [{
            x: x_array.reverse(),
            y: y_array.reverse(),
            text: songs_array.reverse(),
            type: "bar",
            orientation: "h",

        }
        ];

        var layout = {
            title: myRegion + " - " + myDate + " Top 10 Artists & Hit Songs",
            margin: { t: 30, l: 150 }

        }
        Plotly.newPlot("bar", bar_chart, layout);

        tbody.html("");

        const tbl_header = tbody.append("tr");
        let header = tbl_header.append("th");
        header.text("Rank");
        header = tbl_header.append("th");
        header.text("Song");
        header = tbl_header.append("th");
        header.text("Artist");
        header = tbl_header.append("th");
        header.text("Streams");
        header = tbl_header.append("th");
        header.text("URL");



        for (var i = 0; i < date_results.length; i++) {
            const tbl_data = tbody.append("tr");
            let cell = tbl_data.append("td");
            cell.text(date_results[i]["Position"]);
            cell = tbl_data.append("td");
            cell.text(date_results[i]["Track Name"]);
            cell = tbl_data.append("td");
            cell.text(date_results[i]["Artist"]);
            cell = tbl_data.append("td");
            cell.text(date_results[i]["Streams"]);
            cell = tbl_data.append("td");
            cell.text(date_results[i]["URL"]);
        }
    });
}

// The button id="filter-btn" is clicked.
d3.select("#filter-btn").on("click", btnClick);