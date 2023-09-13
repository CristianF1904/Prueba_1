import { Injectable } from '@angular/core';
import { DocumentData, Firestore, addDoc, collection, collectionData, doc, getDoc, getFirestore, updateDoc } from '@angular/fire/firestore';
import Packages from '../interfaces/package.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore:Firestore) { }

  addPlace(packages: Packages){
    const placeRef = collection(this.firestore, 'packages');
    return addDoc(placeRef, packages);
  }

  getPlaces(): Observable<Packages[]>{
    const placeRef = collection(this.firestore, 'packages')
    return collectionData(placeRef,{idField:'id'}) as Observable<Packages[]>
  }
  
  async getPackageById(packageId: string){
    const packageDocRef = doc(this.firestore, 'packages', packageId);
    const packageDocSnap = await getDoc(packageDocRef);
    
    if (packageDocSnap.exists()) {
      return packageDocSnap.data();
    } else {
      return undefined;
    }
  }
  

  updatePackage(packageId: any, userName: any) {
    const db = getFirestore();
    if (packageId) {
      const packageDocRef = doc(db, 'packages', packageId);
      const updateTabla = {
        repartidor: userName
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
