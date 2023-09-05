<template>
    <div class="task-container">
        <h1 class="app-title">To Do List</h1>
        <form class="input-wrapper" @submit.prevent="addTask">
            <input v-model="inputText" class="input-box" placeholder="Add new position..." />
            <button @click="addTask" class="btn-add">
                Add
            </button>
        </form>
        <ul class="task-list">
            <li v-for="(task, index) in tasks" :key="index">
                <form @submit.prevent="task.isEdited = !task.isEdited" class="task-list-form">
                    <input :disabled="!task.isEdited" class="task-text" v-model="task.text">
                    <button class="btn-edit" @click="task.isEdited = !task.isEdited" type="button">
                        {{ task.isEdited ? 'Save' : 'Edit' }}
                    </button>
                    <button class="btn-delete" @click="deleteTask(index)" type="button">
                        Delete
                    </button>
                </form>
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

<style>
.task-container{
    max-width: 580px;
    width: 100%;
    background: white;
    border-radius: 10px;
    position: relative;
    padding: 24px 16px;
    margin-bottom: 30px;
    margin-top: 30px;
}
.app-title{
  text-align: center;
  margin: 8px 0px;
  color:#3d4852;
  
}
.input-wrapper{
    padding: 16px 0px;
    display: flex;
}
.input-box{
    flex: 1;
    padding: 8px 16px 8px 16px;
    font-size: 16px;
    border-radius: 10px;
    outline: none;
    font-family: serif;
    border: 2px solid #f1f5f8;
    color: #3d4852;
}
.btn-add{
    padding: 8px 16px 8px 16px;
    font-size: 16px;
    border-radius: 10px;
    border: #6cb2eb;
    background: #6cb2eb;
    color: white;
    float: right;
    font-family: serif;
    margin-left :20px
}
.task-list{
    list-style-type: none;
    padding: 8px 0px;
    margin: 0px;
}
.task-list-form{
    width: 100%;
    display: flex;
}
.task-list li{
    border-radius: 5px;
    align-items: center;
    font-family: serif;
    display: flex;
    margin: 12px 0px;
    
}
.task-text{
    outline: none;
    font-family: serif;
    flex: 1;
    font-size: 16px;
    color: #3d4852;
}
.task-list button{
    float: right;
    margin-left: 8px;
    border-radius: 5px;
    border: 2px rgb(233, 277, 227);
    height: 24px;
    font-family: serif;
    width: 48px;
}
.task-list .btn-edit {
    background: #6cb2eb;
    color: white
}
.task-list .btn-delete {
    background: crimson;
    color: white;
}
</style>