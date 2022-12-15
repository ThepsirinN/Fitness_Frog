
// quickchart-js https://github.com/typpo/quickchart-js

import QuickChart from 'quickchart-js';

const Completion = new QuickChart();

Completion.setWidth(100)
Completion.setHeight(100);
Completion.setVersion('2');
Completion.setBackgroundColor('transparent');


Completion.setConfig({
    type: 'radialGauge',
    data: {
        datasets: [{
            data: [75],
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

export default Completion;


