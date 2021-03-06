import { Component, Output, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  tarefa: any;
  tarefas: any[];

  constructor() {
    this.tarefas = [];
    this.tarefa = '';
  }

  ngOnInit() {}

  criarTarefas() {
    this.tarefas.push(this.tarefa);
    localStorage.setItem("tarefa"+this.tarefas.length, this.tarefa);
    this.limparInput();
  }
  limparInput() {
    this.tarefa = '';
  }
}
