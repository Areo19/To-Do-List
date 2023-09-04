<template>
  <div class="task-container">
    <h1>To Do List</h1>
    <div class="add-new-position">
      <input 
        v-model="inputText" 
        class="input-box" 
        placeholder="Add new position..."
      />
      <button 
        @click="addTask" 
        class="btn-add"
        >
        Add
      </button>
    </div>
    <ul class="task-list">
      <li 
        v-for="(task, index) in tasks" 
        :key="index">
          <span 
          :contenteditable="task.isEdited" 
          class="task-text" 
          tabindex="0"
          >
          {{ task.text }}
          </span>
          <button 
            class="btn-edit" 
            @click="editTask(task, index)"
            >
            {{ task.isEdited ? 'Save' : 'Edit' }}
          </button>
          <button 
            class="btn-delete" 
            @click="deleteTask(index)"
            >
            Delete
          </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ToDoList',
  setup() {
    const inputText = ref('');
    const tasks = ref([]);

   function addTask(){
    if(inputText.value){
      tasks.value.push({ text: inputText.value });
      inputText.value = '';
    }
   }

   function deleteTask(index){
    tasks.value.splice(index, 1)
   }

   function editTask(task, index){
    if(task.isedited){
      task.text = task.text;
      tasks.value.splice(task, index, 1)
    }
    task.isEdited =  !task.isEdited
   }

   return{
    inputText,
    tasks,
    addTask,
    deleteTask,
    editTask
   }
  }
};
</script>

<!-- <script>
export default {
  data() {
    return {
      inputText: "",
      tasks: JSON.parse(localStorage.getItem('tasks')) || []
    };
  },
  watch: {
    tasks: {
      handler(newValue) {
        localStorage.setItem('tasks', JSON.stringify(newValue));
      },
      deep: true
    }
  },
  methods: {
    addTask() {
      if (this.inputText) {
        this.tasks.push({ text: this.inputText, isEdited: false });
        this.inputText = "";
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(task) {
      task.isEdited = !task.isEdited;
    },
  }
};
</script> -->