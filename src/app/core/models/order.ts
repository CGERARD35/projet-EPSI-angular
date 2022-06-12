import {ClientOrderI, OrderI, ProduitOrderI} from "../interface/order-i";

export class Order implements OrderI {
  id = 0;
  dateCommande = '';
  prix = 0;
  duree = 0;
  statut = '';
  notes = '';
  clientId = 0;
  produitId = 0;
  client: ClientOrderI = new Cli();
  produit : ProduitOrderI= new Produit();

  constructor(obj?: Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }

}

export class Cli implements ClientOrderI {
  nom = '';
  prenom = '';
  company = '';
}

export class Produit implements ProduitOrderI {
  nom = '';
  prix = 0;
}
