import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ITeacher } from '../../models/index';
import Swal from 'sweetalert2';
import { IProduct } from '../../../products/models';
import { ProductsService } from '../../../products/products.service';

@Component({
  selector: 'app-teacher-dialog',
  templateUrl: './teacher-dialog.component.html'
})
export class TeachersDialogComponent implements OnInit{
 teacherForm: FormGroup;
 products: string = '';
 constructor(
  private fromBuilder: FormBuilder,
  private productsService: ProductsService,
  private matDialogRef: MatDialogRef<TeachersDialogComponent>,
  @Inject(MAT_DIALOG_DATA) private editingTeacher?: ITeacher, 
){
  this.teacherForm = this.fromBuilder.group({
    firstName: ['',[Validators.required]],
    lastName: ['',[Validators.required]],
    phone:[,[Validators.required]],
    email:['',[Validators.required]],
    tecnologi:['',[Validators.required]],
  });

  if (editingTeacher){
  this.teacherForm.patchValue(editingTeacher);
  }}
  ngOnInit(): void {
   this.loadProducts()
  }
  get name() {return this.teacherForm.get('firstName')}
  get lastName() {return this.teacherForm.get('lastName')}
  get phone() {return this.teacherForm.get('phone')}
  get email(){return this.teacherForm.get('email')}
  get tecnologi(){return this.teacherForm.get('tecnologi')}

  onSave():void {
    if(this.teacherForm.invalid){
      this.teacherForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.teacherForm.value);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  nuevoArray:IProduct[] = []
  loadProducts(){
    this.productsService.getProducts().subscribe({
      next:(v) => (
      v.forEach((e)=> {
        this.nuevoArray = v
        this.products = e.name
      }) ),
    error:()=> {},
    complete:() =>{},
  })}








}
