import {OrderI} from "../interface/order-i";

export class Order implements OrderI{
  adresse = '';
  id = 0;
  nom = '';
  prenom = '';
  societe = '';


  constructor(obj? : Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }

}
