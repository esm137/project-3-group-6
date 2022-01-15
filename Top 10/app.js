
region_array = []
date_array = []

var region_dropdown = d3.select("#selRegion");
var date_dropdown = d3.select("#selDate");

d3.json("http://localhost:5000/regionlist").then((data) => {
    // console.log("data")
    // console.log(data)

    // Region drop-down
    region_array=Object.values(data)

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

})
    //Date drop-down

    d3.json("http://localhost:5000/datelist").then((date) => { 
    
    date_array=Object.values(date);
    

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

   
    songs_array = []

    d3.json("http://localhost:5000/streamslist/"+myRegion+"/"+myDate).then(data=>{
    var x_array=Object.values(data);
    console.log(x_array);
    
    

    d3.json("http://localhost:5000/artistlist/"+myRegion+"/"+myDate).then(data=>{
    var y_array=Object.values(data);
    console.log(y_array);
    
    
        var bar_chart = [{
            x: x_array,
            y: y_array,
            
            type: "bar",
            orientation: "h",

        }
        ];
console.log(bar_chart)
        var layout = {
            title: myRegion + " - " + myDate + " Most Streamed Songs",
            margin: { t: 30, l: 150 }

        }
        Plotly.newPlot("bar", bar_chart, layout);

        /*tbody.html("");

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
        */
    })})
/*

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
    ;*/
}

// The button id="filter-btn" is clicked.
d3.select("#filter-btn").on("click", btnClick);