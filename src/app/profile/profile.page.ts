import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userId: any; // ID del usuario que deseas obtener
  user: any;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    // Obtener el ID del usuario de los parámetros de la ruta
    this.route.paramMap.subscribe(async (params) => {
      this.userId = params.get('userId');
      // Llamar a la función getUserById para obtener el usuario por su ID
      this.user = await this.usersService.getUserById(this.userId);
    });
  }

}
