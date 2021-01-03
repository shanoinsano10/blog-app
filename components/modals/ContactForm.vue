<template>
  <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
    <div class="modal-card" style="width: 640;">
      <header class="modal-card-head">
        <p class="modal-card-title">Send a message</p>
        <button type="button" class="delete" @click="$emit('close')" />
      </header>
      <section class="modal-card-body">
        <!-- the "handleSubmit" function on the slot-scope executes the callback if validation was successfull -->
        <BInputWithValidation
          v-model="name"
          rules="required|max:50"
          maxlength="50"
          type="text"
          label="Name"
        />
        <BInputWithValidation
          v-model="email"
          rules="required|email|max:100"
          maxlength="100"
          type="email"
          label="Email"
        />
        <BInputWithValidation
          v-model="msg"
          rules="required|max:200"
          maxlength="200"
          type="textarea"
          label="Message"
        />
        <b-message
          v-if="sendError"
          title="Error"
          type="is-danger"
          aria-close-label="Close message"
          >{{ sendError }}</b-message
        >
      </section>
      <footer class="modal-card-foot has-text-right">
        <div class="has-text-right">
          <button
            class="button is-medium"
            type="button"
            @click="$emit('close')"
          >
            <span>Close</span>
          </button>
          <button
            class="button is-blue-jeans is-medium"
            :loading="sending"
            @click="handleSubmit(submit)"
          >
            <span>Submit</span>
          </button>
        </div>
      </footer>
    </div>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import BInputWithValidation from '@/components/inputs/BInputWithValidation'

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
      } catch (err) {
        this.sendError =
          'There was an error sending your message! Check your internet connection and try again.'
        this.sending = false
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

<style scoped></style>
