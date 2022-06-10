export interface OrderI {
  id: number,
  dateCommande: string,
  prix: number,
  duree: number,
  statut : string,
  notes: string,
  client: ClientOrderI,
  produit: ProduitOrderI,
}

export interface ClientOrderI {
  nom : string,
  prenom : string,
  company : string,
}

export interface ProduitOrderI {
  nom : string,
  prix : number,
}
