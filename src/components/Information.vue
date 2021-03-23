<template>
	<Toolbar class="p-mb-4">
		<template v-slot:left>
			<Button label="New" icon="pi pi-plus" class="p-button-success p-mr-2" @click="openNew" />
			<Button label="Delete" icon="pi pi-trash" class="p-button-danger"/>
		</template>
	</Toolbar>
	<table class="table">
    <thead class="table-dark">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(todo, i) in todos" :key="i">
            <td>{{ todo.id }}</td>
            <td>{{ todo.name }}</td>
            <td>{{ todo.description }}</td>
            <td>
                <button type="button" class="btn btn-info me-3" @click="showTodo(todo.id)">Edit</button>
                <button type="button" class="btn btn-danger" @click="deleteTodo(todo.id)">Delete</button>
            </td>
        </tr>
    </tbody>
</table>
	<Dialog v-model:visible="profileDialog" :style="{width: '450px'}" header="Profile Details" :modal="true" class="p-fluid">
		<div class="p-field">
			<label for="name">Name</label>
			<InputText id="name" required="true"/>
			<small class="p-invalid">Name is required.</small>
		</div>
		<div class="p-field">
			<label for="description">Description</label>
			<Textarea id="description" required="true" rows="3" cols="20" />
		</div>

		<template #footer>
			<Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
			<Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct" />
		</template>
	</Dialog>
</template>

<script>
export default {

	data() {

		return {
			profileDialog: false
		}
		
	},

	computed: {
		profiles() {
			return this.$stores.state.todos.todos
		}
	},

	methods: {
		openNew() {
			this.profileDialog = true;
		},

		hideDialog() {
			this.profileDialog = false
		}
	},

	created() {
		// this.$store.dispatch('todos/INIT')
		// this.$store.dispatch('todos/GET_TODOS')
	}

}
</script>

<style>

</style>
