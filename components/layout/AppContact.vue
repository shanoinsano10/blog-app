<template>
  <div class="has-cultured-bg">
    <section class="section">
      <div class="container">
        <div class="tile is-ancestor has-text-centered">
          <div class="tile is-vertical is-2 is-hidden-mobile">
            <div class="tile">
              <div class="tile is-parent">
                <article class="tile is-child is-cultured"></article>
              </div>
            </div>
          </div>

          <div class="tile is-parent">
            <article class="tile is-child is-cultured">
              <div class="content">
                <p class="title has-text-sapphire-blue">Say hello.</p>
                <p class="subtitle has-text-sapphire-blue">
                  I would love to hear about your project.
                </p>

                <div class="content has-text-sapphire-blue">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/shanejearley"
                    class="is-primary"
                  >
                    <b-icon
                      class="link-icon"
                      size="is-large"
                      pack="fab"
                      icon="linkedin"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.github.com/shanejearley"
                    class="is-primary"
                  >
                    <b-icon
                      class="link-icon"
                      size="is-large"
                      pack="fab"
                      icon="github"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/shanejearley"
                    class="is-primary"
                  >
                    <b-icon
                      class="link-icon"
                      size="is-large"
                      pack="fab"
                      icon="twitter"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://keybase.io/shanejearley"
                    class="is-primary"
                  >
                    <b-icon
                      class="link-icon"
                      size="is-large"
                      pack="fab"
                      icon="keybase"
                    />
                  </a>
                  <figure class="image is-1by1 contact-image">
                    <img src="@/assets/profile-pic.svg" />
                  </figure>
                </div>
              </div>
            </article>
          </div>

          <div class="tile is-vertical is-2 is-hidden-mobile">
            <div class="tile">
              <div class="tile is-parent">
                <article class="tile is-child is-cultured"></article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.contact-image {
  margin-top: 0 !important;
  padding-top: 15rem !important;
}
</style>
