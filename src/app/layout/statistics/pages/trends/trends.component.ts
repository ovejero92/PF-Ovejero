import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrl: './trends.component.scss'
})
export class TrendsComponent implements OnInit{
  public chart: any;

  constructor() {
    // Registrar todos los componentes de Chart.js
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('lineCanvas', {
      type: 'line',
      data: {
        labels: ["01-01", "02-01", "03-01", "04-01", "05-01", "06-01", "07-01"],
        datasets: [
          {
            label: 'Ventas Diarias',
            data: [100, 200, 150, 300, 250, 400, 350],
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Evolución de Ventas Diarias'
          }
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Días'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Ventas'
            }
          }
        }
      }
    });
  }
}
