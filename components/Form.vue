<template>
  <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
    <div class="modal-card" style="width: 640">
      <header class="modal-card-head">
        <p class="modal-card-title">Send a message</p>
        <button type="button" class="delete" @click="$emit('close')" />
      </header>
      <section class="modal-card-body">
        <!-- the "handleSubmit" function on the slot-scope executes the callback if validation was successfull -->
        <BInputWithValidation
          rules="required|max:50"
          maxlength="50"
          type="text"
          label="Name"
          v-model="name"
        />
        <BInputWithValidation
          rules="required|email|max:100"
          maxlength="100"
          type="email"
          label="Email"
          v-model="email"
        />
        <BInputWithValidation
          rules="required|max:200"
          maxlength="200"
          type="textarea"
          label="Message"
          v-model="msg"
        />
      </section>
      <footer class="modal-card-foot has-text-right">
        <div class="has-text-right">
          <button class="button" type="button" @click="$emit('close')">Close</button>
          <button class="button is-blue-jeans" @click="handleSubmit(submit)">
            <span>Submit</span>
          </button>
        </div>
      </footer>
    </div>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import BInputWithValidation from '~/components/inputs/BInputWithValidation'

export default {
  name: 'BuefyForm',
  components: {
    ValidationObserver,
    BInputWithValidation,
  },
  data: () => ({
    name: '',
    email: '',
    msg: '',
  }),
  methods: {
    async submit() {
      try {
        await this.$axios.$post('/.netlify/functions/sendgrid', {
          name: this.name,
          email: this.email,
          msg: this.msg,
        })
        console.log(this.name, this.email, this.msg, 'Form submitted!')
      } catch (err) {
        console.log(err, 'Form request error!')
      }
    },
    resetForm() {
      this.name = ''
      this.email = ''
      this.password = ''
      this.msg = ''
      requestAnimationFrame(() => {
        this.$refs.observer.reset()
      })
    },
  },
}
</script>

<style scoped>
</style>