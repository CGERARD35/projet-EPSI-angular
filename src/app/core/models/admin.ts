import {AdminI} from "../interface/admin-i";

export class Admin implements AdminI{
  id = 0;
  nom = '';
  prenom = '';
  statut = '';
  email = '';
  password = '';
  role = '';


  constructor(obj? : Partial<Admin>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }

}
