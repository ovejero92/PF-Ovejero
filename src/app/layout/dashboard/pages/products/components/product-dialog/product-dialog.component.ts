import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProduct } from '../../models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrl: './product-dialog.component.scss'
})
export class ProductDialogComponent {
 productForm: FormGroup;

 constructor(
  private fromBuilder: FormBuilder, 
  private matDialogRef: MatDialogRef<ProductDialogComponent>,
  @Inject(MAT_DIALOG_DATA) private editingProduct?: IProduct)
  {
  this.productForm = this.fromBuilder.group({
    name: ['',[Validators.required]],
    price:[,[Validators.required]],
    categori:['',[Validators.required]],
  });

  if (editingProduct){
  this.productForm.patchValue(editingProduct);
  }}
  get name() {return this.productForm.get('name')}
  get price() {return this.productForm.get('price')}
  get categori(){return this.productForm.get('categori')}

  onSave():void {
    if(this.productForm.invalid){
      this.productForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.productForm.value);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      })
    }
  }








}
