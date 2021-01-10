<template>
  <div class="has-cultured-bg">
    <section class="section">
      <div class="container">
        <div class="tile is-ancestor has-text-centered">
          <div class="tile is-vertical is-2 is-hidden-mobile">
            <div class="tile">
              <div class="tile is-parent">
                <article
                  class="tile is-child notification is-cultured"
                ></article>
              </div>
            </div>
          </div>

          <div class="tile is-parent">
            <article class="tile is-child notification is-cultured">
              <div class="content">
                <p class="title has-text-sapphire-blue">Say hello.</p>
                <p class="subtitle has-text-sapphire-blue">
                  I would love to hear about your project.
                </p>
                <div class="content">
                  <div
                    class="box is-shadowless has-text-centered has-cultured-bg"
                  >
                    <b-button
                      size="is-medium"
                      class="is-sapphire-blue"
                      outlined
                      icon-left="envelope"
                      @click="cardModal()"
                    >
                      Send a message
                    </b-button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div class="tile is-vertical is-2 is-hidden-mobile">
            <div class="tile">
              <div class="tile is-parent">
                <article
                  class="tile is-child notification is-cultured"
                ></article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ContactForm from '@/components/modals/ContactForm.vue'

export default {
  methods: {
    cardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: ContactForm,
        hasModalCard: true,
        trapFocus: true,
      })
    },
  },
}
</script>

<style></style>
