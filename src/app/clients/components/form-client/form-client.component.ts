import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../../core/models/client";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  // initialise le client pour le formulaire
  @Input()
  public initClient!: Client;

  // Renvoi le formulaire client rempli dans un tableau
  @Output()
  public submittedClient = new EventEmitter<Client>();

  // Groupe du formulaire
  public clientForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private toastr : ToastrService) { }

  // Création du formulaire client avec Validators(conditions des inputs)
  ngOnInit(): void {
    this.clientForm = this.fb.group({
      id: [this.initClient.id],
      nom: [this.initClient.nom, Validators.required],
      prenom: [this.initClient.prenom, Validators.required],
      societe: [this.initClient.societe],
      mail: [this.initClient.mail, Validators.email],
      fixe: [this.initClient.fixe, Validators.maxLength(15)],
      portable: [this.initClient.portable, Validators.maxLength(15)],
      notes: [this.initClient.notes],
      statut: [this.initClient.statut, Validators.required]
    })
  }

  // submit(émission) pour le formulaire
  public onSubmit(): void {
    if(this.clientForm.valid) {
      this.submittedClient.emit(this.clientForm.value);
    } else {
      // TODO: markAllAsTouched
      this.clientForm.markAllAsTouched();
      this.toastr.warning('Champs incorrect', 'ATTENTION');
    }
  }

}
