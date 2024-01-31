import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  
  menu : any[] = [
    {   
        titulo : "Principal",
        icono: "fa-solid fa-bars",
          submenu:[
            { titulo: 'fundacion', url: '/' },
            { titulo: 'nosotros', url: 'nosotros' },
            { titulo: 'contactos', url: 'contactos' },
            { titulo: 'noticias', url: 'noticias' },
            { titulo: 'Nuestro Trabajo', url: 'que-hacemos' },
          ]
  
    }
  ]

  constructor() { }
}
