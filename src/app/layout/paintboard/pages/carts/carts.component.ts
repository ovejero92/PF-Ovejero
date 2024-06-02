import { Component, OnInit } from '@angular/core';
import { CartsService } from './carts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent implements OnInit{
styles = {
  background:'',
  textColor:''
};
appliedStyles = {};

constructor(private cartsService:CartsService){}
  ngOnInit(): void {
    this.loadStyles()
  }

saveStyles(){
  this.cartsService.createCatrs(this.styles).subscribe(res => {
    this.loadStyles();
  })
}
loadStyles(){
  this.cartsService.getCarts().subscribe((data:any)=> {
    this.appliedStyles = {
      'background':data.background,
      'color':data.textColor
    }
  })
}



}
