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
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(60),
      Validators.required,
      ])]
    });
  }
  add(){
    const title = this.form.controls['title'].value
    const id = Math.floor(Math.random() * 854)
    this.todos.push(new Todo(id, title, "descricao", false))
    this.form.reset()
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
