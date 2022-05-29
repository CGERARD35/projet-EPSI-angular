import {ClientI} from "../interface/client-i";

export class Client implements ClientI{
  adresse = '';
  id = 0;
  nom = '';
  prenom = '';
  societe = '';


  constructor(obj? : Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }

}
