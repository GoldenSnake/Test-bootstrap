$(function (){
  'use strict';

  var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
  var lineChartData = {
    labels : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль'],
    datasets : [
      {
        label: 'Текст1',
        backgroundColor : 'rgba(102, 102, 255,0.2)',
        borderColor : 'rgba(102, 102, 255,1)',
        pointBackgroundColor : 'rgba(102, 102, 255,1)',
        pointBorderColor : '#fff',
        data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
      },
      {
        label: 'Текст2',
        backgroundColor : 'rgba(255, 217, 102,0.2)',
        borderColor : 'rgba(255, 217, 102,1)',
        pointBackgroundColor : 'rgba(255, 217, 102,1)',
        pointBorderColor : '#fff',
        data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
      }
    ]
  }

  var ctx = document.getElementById('canvas-1');
  var chart = new Chart(ctx, {
    type: 'line',
    data: lineChartData,
    options: {
      responsive: true
    }
  });


  var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
  var barChartData = {
    labels : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль'],
    datasets : [
      {
          label: 'Текст1',
        backgroundColor : 'rgba(102, 153, 0,0.5)',
        borderColor : 'rgba(102, 153, 0,0.8)',
        highlightFill: 'rgba(102, 153, 0,0.75)',
        highlightStroke: 'rgba(102, 153, 0,1)',
        data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
      },
      {
          label: 'Текст2',
        backgroundColor : 'rgba(0, 115, 153,0.5)',
        borderColor : 'rgba(0, 115, 153,0.8)',
        highlightFill : 'rgba(0, 115, 153,0.75)',
        highlightStroke : 'rgba(0, 115, 153,1)',
        data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
      }
    ]
  }
  var ctx = document.getElementById('canvas-2');
  var chart = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: {
      responsive: true
    }
  });

    
    
    

  var doughnutData = {
    labels: [
      'Красный',
      'Синий',
      'Желтый'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  };
  var ctx = document.getElementById('canvas-3');
  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: doughnutData,
    options: {
      responsive: true
    }
  });


  var radarChartData = {
    labels: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль'],
    datasets: [
      {
        label: 'Текст 1',
        backgroundColor: 'rgba(0, 153, 102,0.2)',
        borderColor: 'rgba(0, 153, 102,1)',
        pointBackgroundColor: 'rgba(0, 153, 102,1)',
        pointBorderColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(0, 153, 102,1)',
        data: [65,59,90,81,56,55,40]
      },
      {
        label: 'Текст 2',
        backgroundColor: 'rgba(151,187,205,0.2)',
        borderColor: 'rgba(151,187,205,1)',
        pointBackgroundColor: 'rgba(151,187,205,1)',
        pointBorderColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: [28,48,40,19,96,27,100]
      }
    ]
  };
  var ctx = document.getElementById('canvas-4');
  var chart = new Chart(ctx, {
    type: 'radar',
    data: radarChartData,
    options: {
      responsive: true
    }
  });


  var pieData = {
    labels: [
      'Красный',
      'Синий',
      'Желтый'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  };
  var ctx = document.getElementById('canvas-5');
  var chart = new Chart(ctx, {
    type: 'pie',
    data: pieData,
    options: {
      responsive: true
    }
  });


  var polarData = {
    datasets: [{
      data: [
        11,
        16,
        7,
        3,
        14
      ],
      backgroundColor: [
        '#FF6384',
        '#4BC0C0',
        '#FFCE56',
        '#E7E9ED',
        '#5db4ef'
      ],
      label: 'My dataset' // for legend
    }],
    labels: [
      'Красный',
      'Зеленый',
      'Желтый',
      'Серый',
      'Синий'
    ]
  };
  var ctx = document.getElementById('canvas-6');
  var chart = new Chart(ctx, {
    type: 'polarArea',
    data: polarData,
    options: {
      responsive: true
    }
  });
});





$(function (){
  'use strict';

  var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
  var lChartData = {
    labels : ['','','','','','',''],
    datasets : [
      {
        label: 'Текст1',
        
        borderColor : '#fff',
        pointBackgroundColor : '#fff',
        pointBorderColor : '#fff',
        data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
      },
      {
        label: 'Текст2',
        
        borderColor : '#fff',
        pointBackgroundColor : '#fff',
        pointBorderColor : '#fff',
        data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
      }
    ]
  }

  var ctx = document.getElementById('canvas-8');
  var chart = new Chart(ctx, {
    type: 'line',
    data: lChartData,
    options: {
      responsive: true
                
    }
      
  });});


$(function (){
  'use strict';

  var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
  var lChartData = {
    labels : ['','','','','','',''],
    datasets : [
      {
        label: 'Текст1',
        
        borderColor : '#fff',
        pointBackgroundColor : '#fff',
        pointBorderColor : '#fff',
        data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
      },
      {
        label: 'Текст2',
        
        borderColor : '#fff',
        pointBackgroundColor : '#fff',
        pointBorderColor : '#fff',
        data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
      }
    ]
  }

  var ctx = document.getElementById('canvas-9');
  var chart = new Chart(ctx, {
    type: 'line',
    data: lChartData,
    options: {
      responsive: true
                
    }
      
  });});

