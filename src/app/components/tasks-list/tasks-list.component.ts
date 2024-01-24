import { Component, OnInit, inject } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent implements OnInit {

  title = 'taskApp';

  tasksList: string[] =[];
  newTask: string = '';

  editIndex: number | null = null;
  

  //injectar el servicio
  private _tasksService = inject(TasksService);

  ngOnInit(): void {
    this.tasksList = this._tasksService.getTasks();
  }

  addTask(){
    this._tasksService.addTask(this.newTask);
    this.newTask = '';
    this.tasksList = this._tasksService.getTasks();
  }


  deleteTask(index:number){
    this._tasksService.deleteTask(index);
    this.tasksList = this._tasksService.getTasks();
  }
  

  editTask(index: number): void {
    this.newTask = this.tasksList[index];
    this.editIndex = index;
  }
  
  updateTask(): void {
    if (this.editIndex !== undefined && this.editIndex !== null) {
      this.tasksList[this.editIndex] = this.newTask;
      // Restablece las variables de edición después de la actualización
      this.newTask = '';
      this.editIndex = null;
      console.log(this.tasksList);
      this._tasksService.updateTasks(this.tasksList);
    }
  }
  
}