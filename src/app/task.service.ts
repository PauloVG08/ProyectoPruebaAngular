// task.service.ts
import { Injectable } from '@angular/core';
import { Task } from './interfaces/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    // Puedes agregar tareas predefinidas aquí para propósitos de prueba.
    // this.tasks = [{ id: 1, name: 'Tarea 1', completed: false }, { id: 2, name: 'Tarea 2', completed: true }];
    this.tasks = [{ id: 1, name: 'Tarea 1', completed: false, description: "Descripcion 1" },
    { id: 2, name: 'Tarea 2', completed: true, description: "Descripcion 2" }];
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  toggleTaskCompletion(taskId: number): void {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  importTasks(jsonData: string): void {
    try {
      const importedTasks = JSON.parse(jsonData) as Task[];
      this.tasks = importedTasks;
    } catch (error) {
      console.error('Error importing tasks:', error);
    }
  }

  exportTasks(): string {
    return JSON.stringify(this.tasks, null, 2);
  }

  getTasksCount(): number {
    return this.tasks.length;
  }

}