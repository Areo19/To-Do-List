import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')


// export default {
//   data() {
//     return {
//       inputText: "",
//       tasks: []
//     };
//   },
//   methods: {
//     addElement() {
//       if (this.inputText) {
//         this.tasks.push({ text: this.inputText, isEditing: false });
//         this.inputText = "";
//       }
//     },
//     deleteElement(index) {
//       this.tasks.splice(index, 1);
//     },
//     editElement(task) {
//       task.isEditing = !task.isEditing;
//     },
//   }
// };