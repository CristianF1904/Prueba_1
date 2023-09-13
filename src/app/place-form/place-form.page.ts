import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PlacesService } from '../services/packages.service';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.page.html',
  styleUrls: ['./place-form.page.scss'],
})
export class PlaceFormPage implements OnInit {

  formularioPlace: FormGroup;

  constructor(private placesService: PlacesService, private fb:FormBuilder) { 

    this.formularioPlace = new FormGroup({
      nombrePla: new FormControl(),
      foto: new FormControl(),
      hoteles: new FormControl(),
      comentarios: new FormControl()
    })

    this.formularioPlace = this.fb.group({
      nombrePa: ['', Validators.required],
      estado: ['', Validators.required],
      repartidor: ['']
    })

  }

  ngOnInit() {
  }

  async onSubmit(){

    if(this.formularioPlace.valid){
      console.log(this.formularioPlace.value);
      const response = await this.placesService.addPlace(this.formularioPlace.value);
      console.log(response);
    }else{
      alert("Rellene los campos requeridos");
    }
  }
}
