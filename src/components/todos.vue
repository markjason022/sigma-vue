<template>
	<Toolbar class="p-mb-4">
		<template v-slot:left>
			<Button label="New" icon="pi pi-plus" class="p-button-success p-mr-2" @click="openNew" />
			<Button label="Delete" icon="pi pi-trash" class="p-button-danger"/>
		</template>
	</Toolbar>
	
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

import Toolbar from 'primevue/toolbar/sfc';
import Button from 'primevue/button/sfc';
import Dialog from 'primevue/dialog/sfc';
import InputText from 'primevue/inputtext/sfc';
import Textarea from 'primevue/textarea/sfc';

export default {

	components: {
		Toolbar,
		Button,
		Dialog,
		InputText,
		Textarea
	},

	data() {

		return {
			profileDialog: false
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

}
</script>

<style>

</style>
