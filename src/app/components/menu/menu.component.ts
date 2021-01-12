import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menu: string[];
  subMenu: string[];

  constructor() {
    this.menu = [
      'Acerca de nosotros',
      'Descarga tu Poliza',
      'Términos y condiciones',
    ];
    this.subMenu = ['Misión', 'Visión'];
  }

  ngOnInit(): void {}


  activarMenu() {
    const activeClass = 'active';
    const btnMenu = document.getElementById('btnMenu');
    const listMenu = document.getElementById('listMenu');
    btnMenu.classList.toggle(activeClass);
    listMenu.classList.toggle(activeClass);
  }
  activarSubmenu() {
    const activeClass = 'active';
    const btnSubmenu = document.getElementById('btnSubmenu');
    const listSubmenu = document.getElementById('listSubmenu');
    listSubmenu.classList.toggle(activeClass);
    btnSubmenu.classList.toggle(activeClass);
  }
}
