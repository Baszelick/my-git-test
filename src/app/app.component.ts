import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TaskComponent} from './task/task.component';
import {TaskService} from './task.service';
import {ITask} from './task.model';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgForOf, FormsModule, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
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
