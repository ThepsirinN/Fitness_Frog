
// quickchart-js https://github.com/typpo/quickchart-js

import QuickChart from 'quickchart-js';


const Sportmobile = new QuickChart();

Sportmobile.setWidth(500)
Sportmobile.setHeight(300);
Sportmobile.setVersion('undefined');
Sportmobile.setBackgroundColor('transparent');

Sportmobile.setConfig({
  "type": "outlabeledPie",
  "data": {
    "labels": ["SWIMMING", "WALKING", "HIKING", "WALKING", "RUNNING"],
    "datasets": [{
        "backgroundColor": ["#25EAE7", "#98FF98", "#EEF221", "#FF8C01", "#FF0000"],
        "data": [1, 2, 3, 4, 5]
    }]
  },
  "options": {
    "plugins": {
      "legend": false,
      "outlabels": {
        "text": "%l %p",
        "color": "black",
        "stretch": 35,
        "font": {
          "resizable": true,
          "minSize": 12,
          "maxSize": 18,
          "weight": "bold"
        }
      }
    }
  }
});


export default Sportmobile