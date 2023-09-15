import React, { Component } from 'react';
import Chart from 'chart.js';

class MyChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.buildChart();
  }

  buildChart() {
    const myChartRef = this.chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: 'bar', // Choose the chart type you need (e.g., 'line', 'bar', 'pie', etc.)
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            label: 'Dataset Label',
            data: [10, 20, 30], // Your data values
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Specify colors
            borderColor: 'rgba(75, 192, 192, 1)', // Specify border colors
            borderWidth: 1, // Specify border width
          },
        ],
      },
      options: {
        // Specify chart options here (e.g., scales, tooltips, legends)
      },
    });
  }

  render() {
    return <canvas ref={this.chartRef} />;
  }
}

export default MyChart;
