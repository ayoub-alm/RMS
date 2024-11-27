import {SellerModel} from "./seller.model";

class float {
}


export class ProductModel {
  constructor(
              public id:number,
              public name:string,
              public img:string,
              public price:float,
              public description:string,
              public sku:string,
              public seller: SellerModel,
              public state:boolean,
              public ref: string,
              public categoryId: number
              ) {
  }


}
