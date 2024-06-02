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
    document.getElementById('applyStylesButton')?.addEventListener('click',()=>{
      const bgColor = document.getElementById('bgColor')?.nodeValue;
      const fontFamily = document.getElementById('fontFamily')?.nodeValue;
      const boxShadowValue = document.getElementById('boxShadow')?.nodeValue;
      const buttonColor = document.getElementById('buttonColor')?.nodeValue;
      const buttonSize = document.getElementById('buttonSize')?.nodeValue + 'px';

      const root = document.documentElement
      

      root.style.setProperty('--card-bg-color',`${bgColor}`);
      root.style.setProperty('--card-font-family', `${fontFamily}`);
      root.style.setProperty('--card-box-shadow', `0px 0px ${boxShadowValue}px rgba(0, 0, 0, 0.5)`);
      root.style.setProperty('--button-bg-color', `${buttonColor}`);
      root.style.setProperty('--button-font-size', buttonSize);

      const fileInput = document.getElementById('fileInput') as HTMLInputElement | null;
const cardImage = document.getElementById('cardImage') as HTMLImageElement | null;

if (fileInput && fileInput.files && fileInput.files[0] && cardImage) {
  const reader = new FileReader();

  reader.onload = function(e) {
    const target = e.target as FileReader;
    if (target && target.result) {
      cardImage.src = target.result as string;
      cardImage.style.display = 'block';
    } else {
      console.error('Error: target.result is null');
    }
  };

  reader.readAsDataURL(fileInput.files[0]);
} else {
  console.error('Error: fileInput, fileInput.files[0], or cardImage is null');
}

    })
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
