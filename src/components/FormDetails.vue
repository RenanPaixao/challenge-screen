<template>
  <div class="form-details">
    <v-col cols="12">
      <v-form v-model="fieldsFilled" class="pt-6 px-4 ml-5 mt-8 bordered rounded">
        <p>Please enter a few details about your client:</p>

        <v-autocomplete label="occupation" outlined dense :items="occupationItems"></v-autocomplete>
        <v-autocomplete label="State" outlined dense :items="stateItems"></v-autocomplete>

        <v-text-field
          prefix="$"
          label="Annual Revenues"
          type="number"
          outlined
          dense
          class="outWithSec qa-input1"
        />
        <v-text-field
          :rules="employesRules"
          label="Number of Employees"
          type="number"
          outlined
          dense
          color="red"
          class="outWithSec qa-input2"
        />
      </v-form>
    </v-col>
  </div>
</template>

<script>
export default {
  data: () => ({
    occupationRules: [(value) => value.length > 0 || 'Value is required'],
    employesRules: [(value) => value > 0 || 'Value cannot be negative'],

    fieldsFilled: false,
    stateItems: ['PE', 'RJ', 'PB', 'RO'],
    occupationItems: ['1', '2', '3', '4'],
  }),
  watch: {
    fieldsFilled() {
      this.$emit('fieldsFilled-event', this.fieldsFilled);
    },
  },
};
</script>

<style scoped lang="scss">
.form-details {
  ::v-deep {
    .v-text-field--outlined fieldset {
      border-color: #eaeaea;
    }
  }

  .bordered {
    border: 1px solid #eaeaea;
  }
}
</style>
