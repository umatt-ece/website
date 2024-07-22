<script setup lang="ts">
import { ref } from 'vue'
import { contact, generic } from '@/assets/strings'
import Card from 'primevue/card'
import Button from 'primevue/button'
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
import Editor from 'primevue/editor'
import Checkbox from 'primevue/checkbox'


const email = ref(null)
const editor = ref(null)
const subscribe = ref(null)

function submitOther() {
  console.log('other form submitted...')
}

</script>

<template>
  <div class="card">
    <Card class="card-view">
      <template #content>
        <p class="m-0">
          {{ contact.content }}
        </p>
        <br>

        <FloatLabel>
          <InputText id="m-email" v-model="email" />
          <label for="m-email">{{ generic.form.email }}</label>
        </FloatLabel>
        <br>

        <Editor v-model="editor" editorStyle="height: 320px" />
        <br>

        <div class="inline">
          <Button :label="generic.form.submit" class="offset" @click="submitOther" />
          <Checkbox v-model="subscribe" id="membership-subscribe" class="offset" binary />
          <label for="membership-subscribe" class="offset">{{ generic.form.subscribe }}</label>
        </div>

      </template>
    </Card>
  </div>
</template>

<style scoped>
.offset {
  margin: 0 0.5rem;
  vertical-align: middle;
}
</style>