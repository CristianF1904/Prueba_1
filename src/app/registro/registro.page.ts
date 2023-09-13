import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonInput } from '@ionic/angular';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  
  formularioReg: FormGroup;

  constructor(private usersService: UsersService, private fb:FormBuilder) { 

    this.formularioReg = new FormGroup({

      nombre: new FormControl(),
      apellido: new FormControl(),
      email: new FormControl(),
      rut: new FormControl(),
      numero: new FormControl(),

    })

    this.formularioReg = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(12),Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.maxLength(12),Validators.minLength(3)]],
      email: ['', Validators.required],
      rut: ['', [Validators.required, Validators.maxLength(12),Validators.minLength(3)]],
      numero: ['', [Validators.required, Validators.maxLength(15),Validators.minLength(3)]]
    })

  }

  ngOnInit() {
  }

  async onSubmit(){
    
    if(this.formularioReg.valid){
      const nombreR = this.formularioReg.get('nombre')?.value;
      const apellidoR = this.formularioReg.get('apellido')?.value;
      console.log(this.formularioReg.value);
      const response = await this.usersService.addUser(this.formularioReg.value);
      alert("Repartidor " + nombreR +" "+ apellidoR + " agregado" );
      console.log(response);
    }else{
      alert("Rellene los campos requeridos");
    }
  }

  
  inputModel = '';

    @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;

    onInput(ev: { target: any; }) {
        const value = ev.target!.value;
      
        // Removes non alphanumeric characters
        const filteredValue = value.replace(/[^a-zA-Z0-9]+/g, '');

        /**
         * Update both the state variable and
         * the component to keep them in sync.
         */
        this.ionInputEl.value = this.inputModel = filteredValue;
    }

}
