import { LitElement, html } from 'lit';
import { styles } from '../styles';

export class ToDoList extends LitElement {
  static properties = {
    _taskLis: { state: true },
  };

  static styles = styles;

  constructor() {
    super();
    this._taskLis = [{ text: 'Make app' }, { text: 'Run' }];
  }

  render() {
    const tasks = this._taskLis;
    const todos = html`
      <div class="container">
        <ul>
          ${tasks.map(
            (task) => html` <li
              class=${task.completed ? 'completed' : ''}
              @click=${() => this.toggleCompleted(task)}>
              <input
                class="task-list"
                type="text"
                ?disabled=${!this.checked}
                value="${task.text}" />
              <button class="btn update" @click=${this.updateTask}>
                Update
              </button>
              <button class="btn delete" @click=${this._deleteTask}>
                Delete
              </button>
            </li>`
          )}
        </ul>
      </div>
    `;

    return html`
      <h2>To Do</h2>
      <input
        class="inp"
        id="newitem"
        aria-label="New task"
        placeholder="Enter your task" />
      <button class="btn" @click=${this.addToDo}>Add</button>
      <br />
      ${todos}
    `;
  }

  _deleteTask(e) {
    e.target.parentElement.remove();
    alert('Delete task');
  }

  updateTask() {
    this.checked = !this.checked;
  }

  toggleCompleted(task) {
    task.completed = !task.completed;
    this.requestUpdate();
  }

  get input() {
    return this.renderRoot?.querySelector('#newitem') ?? null;
  }

  addToDo() {
    if (this.input.value === '') {
      alert('you need to add a task');
    } else {
      this._taskLis = [...this._taskLis, { text: this.input.value }];
      this.input.value = '';
    }
  }
}
customElements.define('todo-list', ToDoList);
