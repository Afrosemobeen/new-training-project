import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { appConstant } from '../app.constant';
import { ApiService } from '../new-services/api.service';
import { CommonService } from '../new-services/common.service';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

product: Product | any = '';
id: number | String = '';
productForm: FormGroup;
maxValue: number = 10;

constructor(
  private activatedRoute: ActivatedRoute,
  private http: HttpClient,
  private fb: FormBuilder,
  private commonService: CommonService,
  private apiService: ApiService
) {}

get appConstant(){
  return appConstant;
};

ngOnInit(): void {
  this.activatedRoute.params.subscribe((data) => {
    this.getProduct((data as any).id);
  });
 // this.initialize();
}

//initialize(){
//  this.initializeForm();
//}

initializeForm(product:any){
  this.productForm = this.commonService.createproductForm(product);
}

getProduct(id: number) {
  this.apiService
    .httpGet(`${appConstant.apiRoute.products}/${id}`)
    .subscribe((data) => {
      this.product = data;
      this.initializeForm(data);
      console.log(data);
    });
}
onSubmit(formValue: any, isValid: boolean){
  if (isValid){
    console.log(formValue);
    console.log(isValid);
    this.apiService.httpPut(`${appConstant.apiRoute.products}/${this.id}`,formValue)
    .subscribe((data) => {
      console.log('data updated');
      console.log(data);
    },(err)=>{
      console.log(err);
    }
    );
  }
}

}