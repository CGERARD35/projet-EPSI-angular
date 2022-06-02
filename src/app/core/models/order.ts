import {ClientOrderI, OrderI, ProduitOrderI} from "../interface/order-i";

export class Order implements OrderI {
  id = 0;
  dateCommande = '';
  prix = 0;
  duree = 0;
  statut = '';
  notes = '';
  client: ClientOrderI = new Cli();
  produit = new Produit();

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
  nomProduit = '';
}
