import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // Variable que controla si el menú está visible o no
  isMenuOpen: boolean = false;
  constructor(private router: Router) {}

  // Función para alternar el estado del menú
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  // Función para cerrar el menú
  closeMenu(): void {
    this.isMenuOpen = false;
  }

  // Comprobar si la ruta es la actual
  isMenuActive(route: string): boolean {
    return this.router.url === route;
  }
}
