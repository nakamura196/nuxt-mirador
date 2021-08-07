<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-btn icon to="/" >
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
