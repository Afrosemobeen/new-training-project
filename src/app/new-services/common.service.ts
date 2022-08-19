import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appConstant } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private fb: FormBuilder,) { }

  createproductForm(product: any){
   return this.fb.group({
      [appConstant.forms.product.title]: [product.title,[Validators.required]],
      [appConstant.forms.product.description]: [product.description, [Validators.required]],
      [appConstant.forms.product.category]: [product.category, [Validators.required]],
      [appConstant.forms.product.price]: [product.price, [Validators.required]],
      [appConstant.forms.product.stock]: [product.stock, [Validators.required]],
      [appConstant.forms.product.brand]: [product.brand, [Validators.required]],
      [appConstant.forms.product.rating]: [product.rating,[ Validators.compose([Validators.required, Validators.max(10)])]],
    });
  }
}
