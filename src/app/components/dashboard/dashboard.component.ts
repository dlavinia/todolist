import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public todos: Todo[] = []
  public modalOn: boolean = false
  public title: String ='ToDo List'

  constructor(){
    this.load()
  }
  remove(todo: Todo){
    const index = this.todos.indexOf(todo)
    if(index !== -1){
      this.todos.splice(index, 1)
    }
    const data = JSON.stringify(this.todos)
    localStorage.setItem('todos', data)
  }

  markAsDone(todo:Todo){
    todo.done = true
    const data = JSON.stringify(this.todos)
    localStorage.setItem('todos', data)
  }

  markAsUndone(todo: Todo){
    todo.done = false
    const data = JSON.stringify(this.todos)
    localStorage.setItem('todos', data)

  }

  openModal(){
    this.modalOn = true
  }
  closeModal(){
    this.modalOn = false
    this.load()
  }

  load(){
    this.todos = JSON.parse(localStorage.getItem('todos') || '{}')
   }
  ngOnInit(): void {
  }

}
