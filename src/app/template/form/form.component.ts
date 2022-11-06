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
    this.todos = JSON.parse(localStorage.getItem('todos') || '{}')
    this.todos.push(new Todo(id, title, description, false))
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
