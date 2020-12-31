<template>
  <div>
    <svg
      class="clouds cloud1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0"
      y="0"
      width="512"
      height="512"
      viewBox="0 0 512 512"
      enable-background="new 0 0 512 512"
      xml:space="preserve"
    >
      <path
        id="cloud-icon"
        d="M406.1 227.63c-8.23-103.65-144.71-137.8-200.49-49.05 -36.18-20.46-82.33 3.61-85.22 45.9C80.73 229.34 50 263.12 50 304.1c0 44.32 35.93 80.25 80.25 80.25h251.51c44.32 0 80.25-35.93 80.25-80.25C462 268.28 438.52 237.94 406.1 227.63z"
      />
    </svg>
    <svg
      class="clouds cloud2"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0"
      y="0"
      width="512"
      height="512"
      viewBox="0 0 512 512"
      enable-background="new 0 0 512 512"
      xml:space="preserve"
    >
      <path
        id="cloud-icon"
        d="M406.1 227.63c-8.23-103.65-144.71-137.8-200.49-49.05 -36.18-20.46-82.33 3.61-85.22 45.9C80.73 229.34 50 263.12 50 304.1c0 44.32 35.93 80.25 80.25 80.25h251.51c44.32 0 80.25-35.93 80.25-80.25C462 268.28 438.52 237.94 406.1 227.63z"
      />
    </svg>
    <svg
      class="clouds cloud3"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0"
      y="0"
      width="512"
      height="512"
      viewBox="0 0 512 512"
      enable-background="new 0 0 512 512"
      xml:space="preserve"
    >
      <path
        id="cloud-icon"
        d="M406.1 227.63c-8.23-103.65-144.71-137.8-200.49-49.05 -36.18-20.46-82.33 3.61-85.22 45.9C80.73 229.34 50 263.12 50 304.1c0 44.32 35.93 80.25 80.25 80.25h251.51c44.32 0 80.25-35.93 80.25-80.25C462 268.28 438.52 237.94 406.1 227.63z"
      />
    </svg>
  </div>
</template>
<style scoped>
.clouds {
  z-index: 2000;
  opacity: 0.5;
  position: absolute;
}

.cloud1 {
  width: 200px;
  height: 200px;
  top: 5rem;
  fill: #fff;
  /* Animation shorthand syntax order: name, duration, timing-function, delay, iteration-count, direction, fill-mode */
  -webkit-animation: move 75s linear infinite;
  -moz-animation: move 75s linear infinite;
  -o-animation: move 75s linear infinite;
  animation: move 75s linear infinite;
}

.cloud2 {
  width: 300px;
  height: 300px;
  top: 10rem;
  fill: #fff;
  -webkit-animation: move 100s linear infinite backwards;
  -moz-animation: move 100s linear infinite backwards;
  -o-animation: move 100s linear infinite backwards;
  animation: move 100s linear infinite backwards;
}

.cloud3 {
  width: 100px;
  height: 100px;
  top: 15rem;
  fill: #fff;
  -webkit-animation: move 50s linear infinite backwards;
  -moz-animation: move 50s linear infinite backwards;
  -o-animation: move 50s linear infinite backwards;
  animation: move 50s linear infinite backwards;
}

@media only screen and (max-width: 768px) {
  .cloud1 {
    -webkit-animation: move 60s linear infinite;
    -moz-animation: move 60s linear infinite;
    -o-animation: move 60s linear infinite;
    animation: move 60s linear infinite;
  }
  .cloud2 {
    -webkit-animation: move 80s linear infinite backwards;
    -moz-animation: move 80s linear infinite backwards;
    -o-animation: move 80s linear infinite backwards;
    animation: move 80s linear infinite backwards;
  }
  .cloud3 {
    -webkit-animation: move 40s linear infinite backwards;
    -moz-animation: move 40s linear infinite backwards;
    -o-animation: move 40s linear infinite backwards;
    animation: move 40s linear infinite backwards;
  }
}

@keyframes move {
  from {
    -webkit-transform: translateX(-300px);
  }
  to {
    -webkit-transform: translateX(calc(100vw + 300px));
  }
}
</style>
