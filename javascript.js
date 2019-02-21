// aftelklok
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// lijn
window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer-lijn", {
    animationEnabled: true,
    theme: "dark1",
    backgroundColor:"#4e5754",  
    title:{
      text: "Fuel",
      fontFamily:"monospace"
    },
    axisX:{
      title: "Days",
      fontFamily:"monospace",
      
    },
    axisY:{
      title: "Fuel",
      fontFamily:"monospace",
      titleFontColor: "white",
      includeZero: false
    },
    data: [
    {        
      type: "line",
      lineColor:"red",
      stipColor:"white",
      markerColor:"white",
      dataPoints: [

          { x: 1, y: 8000, indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross"},
          { x: 2, y: 16000 },
          { x: 3, y: 24000 },
          { x: 4, y: 32000 },
          { x: 5, y: 40000 },
          { x: 6, y: 48000 },
          { x: 7, y: 56000 },
          { x: 8, y: 64000 },
          { x: 9, y: 72000},
          { x:10, y: 80000, indexLabel: "highest",markerColor: "red", markerType: "triangle"},

        ]
    }]
  });
  chart.render();


  // // Oxygen in an area(staaf)
    
  var chart2 = new CanvasJS.Chart("chartContainer-staaf", {
    animationEnabled: true,
    theme: "dark1",
    backgroundColor:"#4e5754",
    title: {
      fontFamily:"monospace",
      text: "Oxygen in an area"
    },
    axisX: {
      interval: 1
    },
    axisY: {
      title: "Liters x 1000",
      scaleBreaks: {
        type: "wavy",
        customBreaks: [{
          startValue: 80,
          endValue: 210
          },
          {
            startValue: 230,
            endValue: 600
          }
      ]}
    },
    data: [{
      type: "bar",
      dataPoints: [
        { label: "Dining room", y: 10.3, color:"red" },
        { label: "Playingground", y: 13.5, color:"pink"},
        { label: "Sleepingroom", y: 8.0, color:"orange"},
        { label: "Sportsroom", y: 13.2, color:"yellow" },
        { label: "Study room", y: 8.5, color:"blue"},
        { label: "Readingroom", y: 8.5, color:"purple" },
        { label: "meeting room", y: 12.6, color:"green"},
        { label: "SpaceX-hall", y: 11.1, color:"brown" }
        
      ]
    }]
  });
  chart2.render();

  // Food supply (cirkel):eten/water

   var chart3 = new CanvasJS.Chart("chartContainer-circle", {
    theme: "dark1",
    backgroundColor:"#4e5754",
    fontFamily:"monospace",
    animationEnabled: true,

    title: {
     
      text: "Food supply",
      fontFamily:"monospace",

    },
    subtitles: [{
      text: "",
      fontSize: 16
    }],
    data: [{
      
      type: "pie",
      indexLabelFontSize: 18,
      radius: 80,
      indexLabel: "{label} - {y}",
      yValueFormatString: "###0.0\"%\"",
      click: explodePie,
      dataPoints: [

        { y: 98, label: "water", color:"red"},
        { y: 89, label: "meats", color:"blue"},
        { y: 80.2, label: "potatoes", color:"green" },
        { y: 87.6, label: "vegetables", color:"pink"},
        { y: 99.01, label: "bread", color:"orange"}
      ]
    }]
  });
  chart3.render();

  function explodePie(e) {
  for(var i = 0; i < e.dataSeries.dataPoints.length; i++) {
    if(i !== e.dataPointIndex)
      e.dataSeries.dataPoints[i].exploded = false;
    }
  }

}








































