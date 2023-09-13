import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../services/packages.service';
import { UsersService } from '../services/users.service';
import { Firestore, collection, doc, getFirestore, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile-package',
  templateUrl: './profile-package.page.html',
  styleUrls: ['./profile-package.page.scss'],
})
export class ProfilePackagePage implements OnInit {
  
  getUsers:any=[];
  getPlaces: any=[];

  packageId: string=""; // ID del usuario que deseas obtener
  package: any;
  userId: any;

  constructor(private route: ActivatedRoute, private packagesService: PlacesService, private usersService: UsersService) { }

  ngOnInit() {
    
    this.packageId = this.route.snapshot.params['packageId'];
    
    // Obtener el ID del usuario de los parámetros de la ruta
    this.route.paramMap.subscribe(async (params) => {
      const packageId = params.get('packageId');
      if (packageId) {
        this.package = await this.packagesService.getPackageById(packageId);
        // Llamar a la función getUserById para obtener el usuario por su ID aquí si es necesario
      } else {
        console.error('Error: La ID del paquete no se encuentra en los parámetros de la ruta.');
      }
    });

    this.packagesService.getPlaces().subscribe(places =>{
      console.log(places)
      this.getPlaces = places;
    })
    
    this.usersService.getUsers().subscribe(users => {
      console.log(users);
      this.getUsers=users;
    })
  }

  updatePackage(userName: any, userId: any) {
    const db = getFirestore();
    console.log(this.packageId);
    if (this.packageId) {
      const packageDocRef = doc(db, 'packages', this.packageId);
      const updateTabla = {
        repartidor: userName, userId
      };
      updateDoc(packageDocRef, updateTabla)
        .then(() => {
          console.log('Paquete actualizado');
        })
        .catch((error) => {
          console.error('Error al actualizar el paquete:', error);
        });
    } else {
      console.error('Error: La ID del paquete no está definida.');
    }
  }
}
