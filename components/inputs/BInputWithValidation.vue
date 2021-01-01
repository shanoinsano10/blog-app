<template>
  <ValidationProvider
    v-slot="{ errors, valid }"
    :vid="vid"
    :name="$attrs.name || $attrs.label"
    :rules="rules"
  >
    <b-field
      class="form-field"
      v-bind="$attrs"
      :type="{ 'is-danger': errors[0], 'is-success': valid }"
      :message="errors"
      label-position="on-border"
    >
      <b-input v-model="innerValue" v-bind="$attrs"></b-input>
    </b-field>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
  },
  props: {
    vid: {
      type: String,
      default: '',
    },
    rules: {
      type: [Object, String],
      default: '',
    },
    // must be included in props
    value: {
      type: null,
      required: true,
    },
  },
  data: () => ({
    innerValue: '',
  }),
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit('input', newVal)
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value
    }
  },
}
</script>
<style scoped>
.form-field {
  margin: 2em 0;
}
</style>
