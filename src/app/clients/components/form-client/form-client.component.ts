import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../../core/models/client";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  @Input()
  public initClient!: Client;

  @Output()
  public submittedClient = new EventEmitter<Client>();

  public clientForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      id: [this.initClient.id],
      nom: [this.initClient.nom, Validators.required],
      prenom: [this.initClient.prenom, Validators.required],
      societe: [this.initClient.societe],
      mail: [this.initClient.mail, Validators.required],
      fixe: [this.initClient.fixe],
      portable: [this.initClient.portable],
      notes: [this.initClient.notes],
      statut: [this.initClient.statut, Validators.required]
    })
  }

  public addClient(): void {
    if(this.clientForm.valid) {
      this.submittedClient.emit(this.clientForm.value);
    } else {
      this.clientForm.markAllAsTouched();
    }
  }

}
