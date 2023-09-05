<template>
    <div class="task-container">
        <h1 class="app-title">To Do List</h1>
        <div class="input-wrapper">
            <input v-model="inputText" class="input-box" placeholder="Add new position..." />
            <button @click="addTask" class="btn-add">
                Add
            </button>
        </div>
        <ul class="task-list">
            <li v-for="(task, index) in tasks" :key="index">
                <input :disabled="!task.isEdited" class="task-text" v-model="task.text">
                <button class="btn-edit" @click="task.isEdited = !task.isEdited">
                    {{ task.isEdited ? 'Save' : 'Edit' }}
                </button>
                <button class="btn-delete" @click="deleteTask(index)">
                    Delete
                </button>
            </li>
        </ul>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
const inputText = ref('');
const tasks = ref([]);

function addTask() {
    if (inputText.value) {
        tasks.value.push({ text: inputText.value, isEdited: false });
        inputText.value = '';
    }
}

function deleteTask(index) {
    tasks.value.splice(index, 1)
}

</script>