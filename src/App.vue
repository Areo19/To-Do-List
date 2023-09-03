<template>
  <div class="to_do_container">
    <h1>To Do List</h1>
    <div class="adding-new-position">
      <input v-model="inputText" class="input-box" placeholder="Add new position..."/>
      <button @click="addElement" class="btn-add">Add</button>
    </div>
    <ul class="to-do-list">
      <li v-for="(task, index) in tasks" :key="index">
        <span :contenteditable="task.isEditing" class="to-do-text" tabindex="0">{{ task.text }}</span>
        <button class="btn-edit" @click="editElement(task, index)">{{ task.isEditing ? 'Save' : 'Edit' }}</button>
        <button class="btn-delete" @click="deleteElement(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>

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
    addElement() {
      if (this.inputText) {
        this.tasks.push({ text: this.inputText, isEditing: false });
        this.inputText = "";
      }
    },
    deleteElement(index) {
      this.tasks.splice(index, 1);
    },
    editElement(task) {
      task.isEditing = !task.isEditing;
    },
  }
};
</script>