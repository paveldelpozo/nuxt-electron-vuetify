<template>
  <v-app>
    <v-container>
      <v-checkbox label="Checkbox" v-model="check"></v-checkbox>
      <v-combobox
        label="Combobox"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
        v-model="combo"
    ></v-combobox>
    <v-radio-group v-model="radio">
        <v-radio label="Radio One" value="one"></v-radio>
        <v-radio label="Radio Two" value="two"></v-radio>
        <v-radio label="Radio Three" value="three"></v-radio>
    </v-radio-group>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch, onMounted } from "vue";

const check = ref(true)
const combo = ref('Florida')
const radio = ref('two')
</script>