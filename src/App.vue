<template>
  <v-app>
    <v-main>
      <Register />
    </v-main>
  </v-app>
</template>

<script>
import Register from './views/Register';

export default {
  name: 'App',

  components: {
    Register,
  },

  data: () => ({}),
};
</script>
}
<style scoped></style>
