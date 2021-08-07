<template>
  <v-container>
    <ul>
      <li v-for="(item, key) in items" :key="key">
        <nuxt-link :to="{ name: item.name }">{{ item.label }}</nuxt-link>
      </li>
    </ul>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          label: 'Default',
          name: 'default',
        },
        {
          label: 'Embedded',
          name: 'embedded',
        }
      ],
    }
  },
}
</script>
