// task-form.component.ts
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskName: string = '';
  tareas: String = this.taskService.exportTasks()
  tareasCount: number = this.taskService.getTasksCount();

  constructor(private taskService: TaskService) { }

  addTask(): void {
    if (this.taskName.trim() !== '') {
      this.taskService.addTask({ id: (this.tareasCount + 1), name: this.taskName, completed: false, description: "Hola " + (this.tareasCount + 1) });
      this.taskName = ''; // Limpiar el campo después de agregar la tarea
      console.log(this.tareasCount);
    }
    else {
      alert("Error: Debes ingresar el nombre de una tarea.")
    }
  }

  ngOnInit(): void {
    console.log(this.tareasCount);
  }
}
