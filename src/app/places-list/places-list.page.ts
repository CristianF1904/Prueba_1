import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/packages.service';
import { UsersService } from '../services/users.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.page.html',
  styleUrls: ['./places-list.page.scss'],
})
export class PlacesListPage implements OnInit {

  getPlaces: any=[];
  getUsers:any=[];

  mostrarContenido: boolean = false;

  constructor(private placesService: PlacesService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.placesService.getPlaces().subscribe(places =>{
      console.log(places)
      this.getPlaces = places;
    })

    this.usersService.getUsers().subscribe(users => {
      console.log(users);
      this.getUsers=users;
    })
  }

  toggleContenido() {
    this.mostrarContenido = !this.mostrarContenido; // Cambia el estado de visibilidad
  }

  

}
