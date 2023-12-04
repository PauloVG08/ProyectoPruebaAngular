import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  descripcion = "";

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let paramMap = this.route.snapshot.paramMap;

    if (paramMap.has('id')) {
      let idParam = paramMap.get('id');
      // Verificar si idParam no es nulo antes de intentar convertirlo a un número
      if (idParam !== null) {
        // Obtener el ID de la tarea desde la ruta
        let taskId = +idParam;
        // Obtener la descripción
        this.getDescription(taskId);
      } else {
        alert('El parámetro "id" en la URL es nulo.');
      }
    } else {
      alert('No se encontró el parámetro "id" en la URL.');
    }
  }

  getDescription(id: number): void {
    let selectedTask = this.taskService.getTasks().find(task => task.id === id);

    if (selectedTask) {
      this.descripcion = selectedTask.description
    } else {
      alert("No se encontraron detalles de la tarea seleccionada.")
    }
  }

}
