var chart = new SmoothieChart({millisPerPixel:100,grid:{strokeStyle:'#7f7e80'},labels:{fontSize:12},maxValue:10000,minValue:-10000}),
    canvas = document.getElementById('smoothie-chart'),
    series = new TimeSeries();

chart.addTimeSeries(series, {lineWidth:2.8,strokeStyle:'#00fdff'});
chart.streamTo(canvas, 0);
