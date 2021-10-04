<template>
  <v-main>
    <v-container d-flex pl-12 primary white--text too-style align-center fluid>
      <h1 class="font-weight-medium">Let's get your client protected</h1>
    </v-container>
    <v-row>
      <v-col cols="8">
        <FormDetails />
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import FormDetails from '@/components/FormDetails';

export default {
  name: 'Register',
  components: {
    FormDetails,
  },
};
</script>

<style scoped>
.too-style {
  height: 6rem;
}
</style>
