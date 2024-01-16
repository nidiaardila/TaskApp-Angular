import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TasksService } from './services/tasks.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {


  title = 'taskApp';

  tasksList: string[] =[];
  newTask: string = '';

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
}
