import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProyectsService } from '../../services/proyects.service';
import { Proyect } from '../../interfaces/proyect.interface';
import { ProviderService } from '../../../shared/services/provider.service';

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {

  id_proyect = '';
  proyectForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    version: ['', [Validators.required, Validators.minLength(1)]],
    months: ['', [Validators.required, Validators.min(1)]]
  });

  constructor(
    private route: ActivatedRoute,
    private proyectService: ProyectsService,
    private fb: FormBuilder,
    private provider: ProviderService
  ) { }

  ngOnInit(): void {
    this.id_proyect = this.route.snapshot.paramMap.get('id')!;
    this.proyectService.getProyectById(this.id_proyect).subscribe(
      (proyect) => this.updateForm(proyect)
    );
  }

  updateProyect() {
    this.proyectService.updateProyect({...this.proyectForm.value, id: this.id_proyect}).subscribe(
      (proyect) => (this.updateForm(proyect), console.log('Proyecto guardado'))
    );
  }

  updateForm(proyect: Proyect) {
    const { id, ...rest } = proyect;
    this.proyectForm?.setValue(rest);

    this.provider.proyect = proyect;
  }
}
