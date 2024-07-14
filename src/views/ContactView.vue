<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import Panel from 'primevue/panel'
import Button from 'primevue/button'
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
import Editor from 'primevue/editor';
import { generic, contact } from '@/assets/strings'

const email = ref(null)
const editor = ref(null)
</script>

<template>
  <div class="card">
    <Card class="card-view">
      <template #content>
        <p class="m-0">
          {{ contact.content }}
        </p>

        <!-- Membership form -->
        <Panel :header="contact.members.title" toggleable collapsed>
          <br>

          <FloatLabel>
            <InputText id="m-email" v-model="email" />
            <label for="m-email">{{ generic.form.email }}</label>
          </FloatLabel>
          <br>

          <Button :label="generic.form.submit" />
        </Panel>
        <br>

        <!-- Sponsorship form -->
        <Panel :header="contact.sponsors.title" toggleable collapsed>
          <br>

          <FloatLabel>
            <InputText id="m-email" v-model="email" />
            <label for="m-email">{{ generic.form.email }}</label>
          </FloatLabel>
          <br>

          <Button :label="generic.form.submit" />
        </Panel>
        <br>

        <!-- Other from -->
        <Panel :header="contact.other.title" toggleable collapsed>
          <br>

          <FloatLabel>
            <InputText id="m-email" v-model="email" />
            <label for="m-email">{{ generic.form.email }}</label>
          </FloatLabel>
          <br>

          <Editor v-model="editor" editorStyle="height: 320px" />
          <br>

          <Button :label="generic.form.submit" />
        </Panel>
      </template>
    </Card>
  </div>
</template>

<style scoped>

</style>