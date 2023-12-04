// task-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task.model';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    // Obtener las tareas al inicializar el componente
    this.tasks = this.taskService.getTasks();
  }

  toggleCompletion(taskId: number): void {
    this.taskService.toggleTaskCompletion(taskId);
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    // Actualizar la lista de tareas después de eliminar una tarea
    this.tasks = this.taskService.getTasks();
  }

  verDetalle(id: number): void {
    this.router.navigate(['/detalle', id]);
  }
}
