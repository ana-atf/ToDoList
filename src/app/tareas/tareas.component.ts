import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {


  tareas:string[] = []

  constructor(){
    let tareasLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    this.tareas = (tareasLocalStorage != null ? tareasLocalStorage : []);
  }


  nuevaTarea(){
    let nuevaTarea = (<HTMLInputElement>document.querySelector('.añadeTarea')).value
    this.tareas.push(nuevaTarea)
    this.guardaTareas()
  }

  deleteTask(posicion, tarea){
    
    console.log(posicion, tarea)
    
    this.tareas.splice(posicion, 1)
    this.guardaTareas()
  }

  guardaTareas() {
    localStorage.setItem("tasks",JSON.stringify(this.tareas));
  }


}
