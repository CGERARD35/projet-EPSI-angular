export interface OrderI {
  "id": number,
  "company": string,
  "date_commande": string,
  "prix": number,
  "duree": string
  "statut" : string,
  "nomClient" : string,
  "prenomClient" :string,
  "nomUser" : string,
  "nomProduit" : string,
  "client": {
    "nom" : string,
    "prenom" : string,
  },
  "produit": {
    "nomProduit" : string,
  }
}
