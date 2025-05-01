<template>
  <div>
    <h1>Accueil</h1>
    <p>Bienvenue sur la page d'accueil !</p>
    <button @click="loadData">Charger les données</button>
    <p v-if="data" v-for="p, i in data">Personne {{i}} : {{p.name}} / {{p.age}} ans.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const url = 'http://localhost:3000/api/'

const data = ref(null)
const loading = ref(false)

const loadData = async () => {
  loading.value = true;
  data.value = null

  try {
    const response = await fetch(`${url}persons`)
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }
    const tmp = await response.json()
    data.value = tmp
  } catch (err) {
    console.log(err);
  } finally {
    loading.value = false;
  }
}

</script>