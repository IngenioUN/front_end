<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <a href="/" class="navbar-brand"> MEV Stack </a>
        </nav>
        <div class="container">
            <div class="row pt-5">
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-body">
                            <form @submit.prevent="addTask">
                                <div class="form-group">
                                    <input v-model="task.title" type="text" placeholder = "email" class="form-control">
                                </div>
                                <div class="form-group">
                                    <textarea v-model="task.description" class="form-control" id="" cols="30" rows="10" placeholder="Text"></textarea>
                                </div>
                                <button class="btn btn-primary btn-block">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="task of tasks">
                                <td>{{task.title}}</td>
                                <td>{{task.description}}</td>
                                <td>
                                    <button @click="deleteTask(task._id)" class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>    
</template>>
<script>
    export default{
        data(){
            return {
                task :{
                    title: '',
                    description: ''
                },
                tasks: []
            }
        },
        created() {
            this.getTasks();
        },
        methods: {
            addTask() {
                fetch('/ingenio', {
                    method: 'POST',
                    body: JSON.stringify(this.task),
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                    }
                })
                .then(res => res.json())
                .then(data => {
                    this.getTasks();
                })

                this.task.title = '',
                this.task.description = '';
            },

            getTasks() {
                fetch('/ingenio')
                .then(res => res.json())
                .then(data => {
                    this.tasks = data;
                    console.log(this.tasks)
                });
            },
            deleteTask(id) {
                fetch('/ingenio/' + id, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                    }
                })
                .then(res => res.json())
                .then(data =>{
                    this.getTasks();
                });
            }
        }
    }
</script>