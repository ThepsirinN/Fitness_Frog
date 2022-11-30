
// quickchart-js https://github.com/typpo/quickchart-js

import QuickChart from 'quickchart-js';

const Days = new QuickChart();

Days.setWidth(70)
Days.setHeight(70);
Days.setVersion('2');
Days.setBackgroundColor('transparent');


Days.setConfig({
    type: 'radialGauge',
    data: {
        datasets: [{
            data: [80],
            backgroundColor: QuickChart.getGradientFillHelper('vertical',
                ['#0000FF', '#25EAE7', 'purple']),

        }]
    },

    options: {
        // See https://github.com/pandameister/chartjs-chart-radial-gauge#options
        domain: [0, 100],
        trackColor: '#ccddee',
        centerPercentage: 75,
        centerArea: {
            text: (val) => val + '%',
        },
    },


});

export default Days;


