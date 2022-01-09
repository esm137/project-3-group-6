var ctx = document.getElementById('myChart').getContext('2d');
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
          label: "Total",
          borderColor: "rgb(62,149,205)",
          backgroundColor: "rgb(62,149,205,0.1)",
          borderWidth:2
        }
      ]
    },
  });