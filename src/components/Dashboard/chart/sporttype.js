// quickchart-js https://github.com/typpo/quickchart-js

import QuickChart from 'quickchart-js';

const SportType = new QuickChart();

SportType.setWidth(840)
SportType.setHeight(30);
SportType.setVersion('3');
SportType.setBackgroundColor('transparent');

SportType.setConfig({
    type: 'bar',
    data: {
        labels: ['Q1'],
        datasets: [
            {
                label: 'Users',
                data: [100,50,150,10,30],
                backgroundColor: QuickChart.getGradientFillHelper('horizontal', [
                    '#25EAE7',
                    '#98FF98',
                    '#EEF221',
                    '#FF8C01',
                    '#FF0000',
                ]),
            },
        ],
    },
    options: {
        indexAxis: 'y',
        layout: {
            padding: 5,
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                display: false,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            annotation: {
                clip: false,
                common: {
                    drawTime: 'afterDraw',
                },
            },
        },
    },
});

export default SportType


