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
        <b-message
          v-if="sendError"
          title="Error"
          type="is-danger"
          aria-close-label="Close message"
        >{{ sendError }}</b-message>
      </section>
      <footer class="modal-card-foot has-text-right">
        <div class="has-text-right">
          <button class="button" type="button" @click="$emit('close')">Close</button>
          <button class="button is-blue-jeans" @click="handleSubmit(submit)" :disabled="sending">
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
    sending: false,
    sendError: '',
    name: '',
    email: '',
    msg: '',
  }),
  methods: {
    async submit() {
      try {
        this.sending = true
        await this.$axios.$post('/.netlify/functions/contact', {
          name: this.name,
          email: this.email,
          msg: this.msg,
        })
        this.$emit('close')
        this.sending = false
        this.resetForm()
        this.success()
        console.log('Form sending success!')
      } catch (err) {
        this.sendError =
          'There was an error sending your message! Check your internet connection and try again.'
        this.sending = false
        console.log('Form sending error!', err)
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
    success() {
      this.$buefy.toast.open({
        message: 'Your message is on the way!',
        type: 'is-success',
      })
    },
  },
}
</script>

<style scoped>
</style>