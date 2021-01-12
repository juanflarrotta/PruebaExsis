import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  footer: string[];
  redes: Array<any> = [
    {
      nombre: '',
      icono: '',
      link: '',
    },
  ];
  constructor() {
    this.footer = [
      'Acerca de nosotros',
      'Descarga tu Poliza',
      'Términos y condiciones',
    ];
    this.redes = [
      {
        nombre: 'facebook',
        icono: 'fab fa-facebook-f',
        link: 'https://www.facebook.com/',
      },
      {
        nombre: 'youtube',
        icono: 'fab fa-youtube',
        link: 'https://www.youtube.com/',
      },
      {
        nombre: 'instagram',
        icono: 'fab fa-instagram',
        link: 'https://www.instagram.com/',
      },
    ];
  }

  ngOnInit(): void {
    let date = new Date();
    let year = date.getFullYear();
    const copyright = document.getElementById('copyright');
    copyright.innerHTML = '<span>Copyright '+ year + '</span>';
  }
}
