import {ClientI} from "../interface/client-i";

export class Client implements ClientI{
  id = 0;
  nom = '';
  prenom = '';
  societe = '';
  portable = '';
  fixe = '';
  statut = '';
  notes = '';
  mail = '';


  constructor(obj? : Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }

}
