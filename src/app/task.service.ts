import { Injectable } from '@angular/core';
import {ITask} from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: ITask[] = [
    { id: 1, text: 'Купить Пиво', completed: false },
    { id: 2, text: 'Выпить Пиво', completed: true }];

  getTasks(): ITask[] {
    return this.tasks
  }

  addTask(text: string ): void {
      const newTask: ITask = {
        id: Date.now(),
        text: text,
        completed: false
      }
      this.tasks.push(newTask);
    }


  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);

  }

  toggleTask(id: number): void {
    const task = this.tasks.find(task => task.id === id)
    if (task) {
      task.completed = !task.completed;
    }
  }

  constructor() { }
}
