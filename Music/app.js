var ctx = document.getElementById('myChart').getContext('2d');
ctx.canvas.parentNode.style.width = "800px";
ctx.canvas.parentNode.style.height = "600px";
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Ed Sheeran', 'Drake', 'The Chainsmokers', 'Post Malone',
       'Kendrick Lamar', 'Luis Fonsi', 'J Balvin', 'Calvin Harris',
       'Imagine Dragons', 'DJ Khaled', 'The Weeknd', 'Clean Bandit', 'ZAYN',
       'Kygo', 'Bruno Mars', 'Lil Uzi Vert', 'Martin Garrix', 'Charlie Puth',
       'Maroon 5', 'Migos'],
      datasets: [
        { 
          data: [8914,4524,4293,3700,3571,3556,2495,2398,2323,2236,2225,2059,2019,2017,1916,1904,1867,1815,1771,1769],
          label: "Sportify Stream by Atrists",
          borderColor: "rgb(201,76,76,0.3)",
          backgroundColor: "rgb(51,255,51,10)",
          borderWidth:1
        }
      ]
    },
  });



  