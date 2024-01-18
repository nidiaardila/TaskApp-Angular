import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private localStorageKey = 'tasksList';

  getTasks():string []{
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
  }

  addTask(task: string){
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }

  deleteTask(index: number):void{
    const tasks = this.getTasks();
    tasks.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }

  updateTasks(tasks: string[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }
}
