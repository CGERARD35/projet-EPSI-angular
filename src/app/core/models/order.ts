import {OrderI} from "../interface/order-i";

export class Order implements OrderI{
  "id": 0;
  "company": '';
  "date_commande": '';
  "prix": 0;
  "duree": '';
  "statut" : '';
  "nomClient" : '';
  "prenomClient" :'';
  "nomUser" : '';
  "nomProduit" : '';
  "client": {
    "nom": '';
    "prenom": '';
  }
  "produit": {
    "nomProduit" : '';
  }


  constructor(obj? : Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }

}
