import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mostrar(){
    var user = JSON.parse(localStorage.getItem('identity'));
    alert(user.idusuario);
  }
}
