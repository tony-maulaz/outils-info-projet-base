<template>
  <div>
    <h1>Accueil</h1>
    <p>Bienvenue sur la page d'accueil !</p>
    <button @click="loadData(2)">Charger les données</button>
    <p v-if="data">Les données : id = {{ data.id }} / Desc : {{ data.description }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const url = 'http://localhost:3000/api/'

const data = ref(null)
const loading = ref(false)

const loadData = async (id) => {
  loading.value = true;
  data.value = null

  try {
    const response = await fetch(`${url}/test/${id}`)
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }
    const tmp = await response.json()
    data.value = tmp[0]
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
}

</script>