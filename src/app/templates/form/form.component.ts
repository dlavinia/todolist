import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public todos: Todo[] = []
  public form: FormGroup

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])],
      description: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(160),
        Validators.required,
        ])]
    })
  }
  add(){
    const title = this.form.controls['title'].value
    const description = this.form.controls['description'].value
    const id = Math.floor(Math.random() * 854)
    const todoForm = new Todo(id, title, description, false)
    const todoarray : Todo[] = []
    
    const todoParsed = JSON.parse(localStorage.getItem('todos') || '{}')
    for(let i = 0; i < todoParsed.length; i++){
      todoarray.push(todoParsed[i])
    }
    todoarray.push(todoForm)
    
    this.todos = todoarray
    this.save()
    this.form.reset()
  }

  save(){
    const data = JSON.stringify(this.todos)
    localStorage.setItem('todos', data)
  }


  ngOnInit(): void {
  }

}
