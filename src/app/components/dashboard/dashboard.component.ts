import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public todos: Todo[] = []
  public title: String ='ToDo List'
  public form: FormGroup

  constructor(private formBuilder: FormBuilder){


    this.todos.push(new Todo(1, 'Passear com o cachorro', '30 minutos na praça', false))
    this.todos.push(new Todo(2, 'Ir ao supermercado', 'comprar tomate, cebola e ovos', false))
    this.todos.push(new Todo(3, 'Cortar o cabelo', 'Amanha às 8h', true))
    
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(60),
      Validators.required,
      ])]
    });
  }

  remove(todo: Todo){
    const index = this.todos.indexOf(todo)
    if(index !== -1){
      this.todos.splice(index, 1)
    }
  }

  markAsDone(todo:Todo){
    todo.done = true;
  }

  markAsUndone(todo: Todo){
    todo.done = false;

  }
  ngOnInit(): void {
  }

}
