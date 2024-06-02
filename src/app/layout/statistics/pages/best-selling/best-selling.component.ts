import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-best-selling',
  templateUrl: './best-selling.component.html',
  styleUrl: './best-selling.component.scss'
})
export class BestSellingComponent implements OnInit{
public chart: any;

constructor(){
  Chart.register(...registerables);
}
  ngOnInit(): void {
    this.createChart()
  }
  createChart(){
    this.chart = new Chart('pieCanvas', {
      type: 'pie',
      data: {
        labels: ["Producto A", "Producto B", "Producto C", "Producto D", "Producto E"],
        datasets: [
          {
            label: 'Productos más vendidos',
            data: [30, 50, 20, 10, 40],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Productos más vendidos mensualmente'
          }
        }
      }
    });
  }

}
