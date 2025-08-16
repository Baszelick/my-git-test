import { Component } from '@angular/core';
import {ITask} from '../../task.model';
import {TaskService} from '../../task.service';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {TaskComponent} from '../../task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [
    FormsModule,
    NgForOf,
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  tasks: ITask[] = [];
  newTaskText: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  addNewTask(): void {
    if (this.newTaskText.trim()) {
      this.taskService.addTask(this.newTaskText.trim())
      this.newTaskText = '';
      this.tasks = this.taskService.getTasks();
    }
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }

  toggleTask(id: number): void {
    this.taskService.toggleTask(id);
    this.tasks = this.taskService.getTasks(); // Для единообразия
  }

}
