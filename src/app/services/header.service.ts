import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  menu : any =  [
      
            { titulo: 'fundacion', url: '/' },
            { titulo: 'nosotros', url: 'nosotros' },
            { titulo: 'contactos', url: 'contactos' },
            { titulo: 'noticias', url: 'noticias' },
            { titulo: 'Nuestro trabajo', url: 'que-hacemos' },
  
  ]


  // submenu:[
  //   { titulo: 'Main', url: '/' },
  //   { titulo: 'Gráficas', url: 'grafica1' },
  //   { titulo: 'rxjs', url: 'rxjs' },
  //   { titulo: 'Promesas', url: 'promesas' },
  //   { titulo: 'ProgressBar', url: 'progress' },

  // ]
  constructor() { }
}
