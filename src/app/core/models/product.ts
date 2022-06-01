import {ProductI} from "../interface/product-i";

export class Product implements ProductI {

  id = 0;
  nom = '';
  prix = 0;
  type = '';
  statut = '';


  constructor(obj?: Partial<Product>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }

}
