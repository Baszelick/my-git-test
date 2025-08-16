import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITask} from '../task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task!: ITask
  @Output() delete = new EventEmitter<number>()
  @Output() toggle = new EventEmitter<number>()

  onDelete() {
    this.delete.emit(this.task.id)
  }

  onToggle() {
    this.toggle.emit(this.task.id)
  }


}
