import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for | async and *ngFor
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient.model';
import { Observable } from 'rxjs';
import { PatientCardComponent } from '../patient-card/patient-card.component';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  patients$: Observable<Patient[]>;

  constructor(private patientService: PatientService) {
    this.patients$ = this.patientService.patients$;
  }

  ngOnInit(): void {
    // Add dummy data for testing if list is empty
    if (this.patientService.getPatients().length === 0) {
      this.patientService.ajouterPatient({
        ins: '1850612075047',
        nom: 'SOUFFRE',
        prenom: 'Jean',
        dateNaissance: new Date('1985-06-12'),
        sexe: 'M',
        adresse: { ligne1: '12 rue de la Paix', codePostal: '75002', ville: 'Paris', pays: 'France' },
        telephone: '0102030405',
        medecinTraitantId: 'DR123',
        statut: 'actif',
        niveauUrgence: 'vert',
        allergies: [],
        antecedents: [],
        traitementEnCours: []
      });

      this.patientService.ajouterPatient({
        ins: '2900144002001',
        nom: 'ALERTE',
        prenom: 'Marie',
        dateNaissance: new Date('1990-01-01'),
        sexe: 'F',
        adresse: { ligne1: '5 ave Foch', codePostal: '75016', ville: 'Paris', pays: 'France' },
        telephone: '0607080910',
        medecinTraitantId: 'DR456',
        statut: 'actif',
        niveauUrgence: 'rouge',
        allergies: [{ substance: 'Penicilline', reaction: 'Choc', severite: 'severe', dateDeclaration: new Date() }],
        antecedents: ['Asthme'],
        traitementEnCours: ['Ventoline']
      });
    }
  }

  onPatientSelected(patient: Patient): void {
    console.log('Patient selected:', patient);
  }

  onUrgence(event: { patient: Patient, motif: string }): void {
    console.warn('Urgence signalee:', event.motif, 'pour', event.patient.nom);
    this.patientService.modifierNiveauUrgence(event.patient.id, 'rouge');
  }
}
