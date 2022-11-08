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
    this.load()
  }

  markAsDone(todo:Todo){
    todo.done = true
    const data = JSON.stringify(this.todos)
    localStorage.setItem('todos', data)
    this.load()

  }

  markAsUndone(todo: Todo){
    todo.done = false
    const data = JSON.stringify(this.todos)
    localStorage.setItem('todos', data)
    this.load()


  }

  openModal(){
    this.modalOn = true
  }
  closeModal(){
    this.modalOn = false
    this.load()
  }

  load(){
    const todoarray : Todo[] = []
    
    const todoParsed = JSON.parse(localStorage.getItem('todos') || '{}')
    for(let i = 0; i < todoParsed.length; i++){
      todoarray.push(todoParsed[i])
    }
    this.todos = todoarray
   }
  ngOnInit(): void {
  }

}
