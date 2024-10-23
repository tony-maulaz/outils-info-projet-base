# Site
Créer un site web pour afficher les données météorologiques.

Voici une image de la page principale du site web:
![Page principale](images/site.png)

> Les liens de navigation ne sont pas affichés sur l'image.

## Fonctionnalités
- Ajouter en dessous du titre de la page `App.vue` deux liens pour naviguer entre la page principale et la page `about`.
- Le titre sera affiché sur toutes les pages.
- Ajouter une page `about` qui affiche un texte de présentation.
- La page principale affiche une liste de villes.
- En cliquant sur une ville, l'utilisateur peut voir les données météorologiques de la ville.
- Les données sont fournies dans une objet js dans le fichier `data.js`.
- Quand on survole une ville, la couleur de fond de la ville change.
- L'élément sélectionné est mis en évidence par une couleur de fond différente.
- Le passage de paramètres entre les composants se fait par les propriétés (`props`).

## A faire
- On doit pouvoir naviguer entre la page principale et la page `about`.
- Créer un composant CityItem qui affiche l'élément de la liste des villes.
- Créer un composant CityDetail qui affiche les données météorologiques de la ville.
- Lors du clique sur le composant CityItem, il faut lever un évenement `select` avec l'id de la ville sélectionnée.

## Aide
- Le composant CityItem à deux props: `city` et `selectedCityId`.
- Le composant CityDetail à une prop: `city`.
- Dans la page principale, il faut une propriété `selectedCityId` pour stocker l'id de la ville sélectionnée.
- Le graphique dans CityDetail est fonctionnel, il faut juste que cette propriété soit utilisée correctement `const data = props.city.weatherData;`.

## A corriger
- [] Les unités [mm] pour les précipitations ne sont pas affichées correctement.

## Questions
- Quelle est l'utilité des évenement @mouseover et @mouseleave au début du composant CityItem ?
- A quoi sert la propriété `const isHovered = ref(false);` dans le composant CityItem ?
- Pourquoi il y a un v-if dnas le composant CityDetail ?
- Comment fonctionne cette instruction dans CityItem `<font-awesome-icon :icon="city.icon"/>` ?
- Comment la séparation verticale entre les composants CityItem et CityDetail est-elle réalisée ?
- Oû se situe la zone utilisée par le composant RouterView et à quoi sert ce composant ?