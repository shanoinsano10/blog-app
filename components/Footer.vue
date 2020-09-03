<template>
  <footer class="footer has-silver-sand-bg">
    <div class="content has-text-centered">
      <p>
        This site is made with
        <a target="_blank" rel="noopener noreferrer" href="https://nuxtjs.org/">
          <img src="~/assets/nuxtjs-typo.svg" />
        </a>
      </p>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shanoinsano10/shaneearleydev"
          class="is-primary"
        >
          Check out the source on GitHub
          <b-icon class="link-icon" pack="fab" icon="github" />
        </a>
      </p>
      <p>© 2020 Shane Earley</p>
    </div>
  </footer>
</template>

<style scoped>
.has-margin-before {
  margin-left: 0.5em;
}
.has-blue-jeans-bg {
  background: #55acee;
}
.has-sapphire-blue-bg {
  background: #226699;
}
.has-silver-sand-bg {
  background: #aebbc1;
}
.link-icon {
  display: inline-block;
}
.footer-icon path {
  fill: #226699;
}
p a img {
  max-width: 5em;
  padding-left: 0.25em;
}
</style>
