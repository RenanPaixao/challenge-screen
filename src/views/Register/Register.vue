<template>
  <div class="registerParent">
    <v-container d-flex pl-12 primary white--text too-style align-center fluid>
      <h1 class="font-weight-medium">Let's get your client protected</h1>
    </v-container>
    <v-row>
      <v-col cols="8">
        <FormDetails @fieldsFilled-event="fieldsFilledFunc($event)" />
      </v-col>
      <v-col cols="4"> </v-col>
    </v-row>
    <hr color="#eaeaea" />
    <v-layout justify-center pt-8>
      <v-btn :disabled="!formValidation" color="primary">Send</v-btn>
    </v-layout>
  </div>
</template>

<script>
import FormDetails from '@/components/FormDetails';

export default {
  name: 'Register',
  components: {
    FormDetails,
  },
  data() {
    return {
      formValidation: false,
    };
  },

  methods: {
    fieldsFilledFunc(e) {
      this.formValidation = e;
    },
  },
};
</script>

<style scoped lang="scss">
.registerParent {
  .too-style {
    height: 6rem;
  }
}
</style>
