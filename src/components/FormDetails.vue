<template>
  <v-col cols="12">
    <v-form class="pt-6 px-4 ml-5 mt-8 bordered rounded">
      <p>Please enter a few details about your client:</p>
      <v-autocomplete
        label="Occupation"
        required
        outlined
        dense
        class="
        borderWithSec
        color
        "
      />
      <v-autocomplete label="State" outlined required dense class="outWithSec" />
      <v-text-field
        prefix="$"
        label="Annual Revenues"
        type="number"
        outlined
        dense
        class="outWithSec"
      />
      <v-text-field label="Number of Employees" type="number" outlined dense class="outWithSec" />
    </v-form>
  </v-col>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped lang="scss">
.bordered {
  border: 1px solid #eaeaea;
}

.outWithSec {
  outline: 1px solid #eaeaea;
}
.outWithSec:focus {
  outline: 1px solid #eaeaea;
  border: 1px solid #eaeaea;
}
</style>
