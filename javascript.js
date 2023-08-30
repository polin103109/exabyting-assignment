window.onload = function () {
  var options = {
    theme: "light2",

    // toolTip: {
    //   shared: true,
    // },

    data: [
      {
        type: "line",

        dataPoints: [
          { x: new Date(2017, 10, 1), y: 63 },
          { x: new Date(2017, 10, 2), y: 69 },
          { x: new Date(2017, 10, 3), y: 65 },
          { x: new Date(2017, 10, 4), y: 70 },
          { x: new Date(2017, 10, 5), y: 71 },
          { x: new Date(2017, 10, 6), y: 65 },
          { x: new Date(2017, 10, 7), y: 73 },
          { x: new Date(2017, 10, 8), y: 96 },
          { x: new Date(2017, 10, 9), y: 84 },
          { x: new Date(2017, 10, 10), y: 85 },
          { x: new Date(2017, 10, 11), y: 86 },
          { x: new Date(2017, 10, 12), y: 94 },
          { x: new Date(2017, 10, 13), y: 97 },
          { x: new Date(2017, 10, 14), y: 86 },
          { x: new Date(2017, 10, 15), y: 89 },
        ],
      },
      {
        type: "line",

        dataPoints: [
          { x: new Date(2017, 10, 1), y: 60 },
          { x: new Date(2017, 10, 2), y: 57 },
          { x: new Date(2017, 10, 3), y: 51 },
          { x: new Date(2017, 10, 4), y: 56 },
          { x: new Date(2017, 10, 5), y: 54 },
          { x: new Date(2017, 10, 6), y: 55 },
          { x: new Date(2017, 10, 7), y: 54 },
          { x: new Date(2017, 10, 8), y: 69 },
          { x: new Date(2017, 10, 9), y: 65 },
          { x: new Date(2017, 10, 10), y: 66 },
          { x: new Date(2017, 10, 11), y: 63 },
          { x: new Date(2017, 10, 12), y: 67 },
          { x: new Date(2017, 10, 13), y: 66 },
          { x: new Date(2017, 10, 14), y: 56 },
          { x: new Date(2017, 10, 15), y: 64 },
        ],
      },
    ],
  };
  $("#graphchart").CanvasJSChart(options);

  function toogleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }
};
