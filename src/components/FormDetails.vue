<template>
  <div class="form-details">
    <v-col cols="12">
      <v-form v-model="fieldsFilled" class="pt-6 px-4 ml-5 mt-8 bordered rounded">
        <p>Please enter a few details about your client:</p>

        <v-autocomplete label="Occupation" outlined dense :items="occupationItems"></v-autocomplete>
        <v-autocomplete label="State" outlined dense :items="stateItems" :messages="'Coverage exclusive to Australian companies.'"></v-autocomplete>

        <v-text-field
          prefix="$"
          :rules="occupationRules"
          label="Annual Revenues"
          type="number"
          outlined
          dense
          class="outWithSec qa-input1"
        />
        <v-text-field
          :rules="stateRules"
          label="Number of Employees"
          type="number"
          max="100"
          min="0"
          outlined
          dense
          class="outWithSec qa-input2"
          validate-on-blur

        />
      </v-form>
    </v-col>
  </div>
</template>

<script>
export default {
  data: () => ({
    occupationRules: [
      (value) => value !== "" || 'Value is required',
      (value) => value.length > 0 || 'Value is required'
    ],

    stateRules: [
      (value) => value !== '' || 'Value is required',
      (value) => value <= 100 || 'Value cannot be greater of 100',
    ],

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
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }
  }

  .bordered {
    border: 1px solid #eaeaea;
  }
}
</style>
