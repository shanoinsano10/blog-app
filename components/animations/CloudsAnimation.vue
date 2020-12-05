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
  opacity: 0.5;
  position: absolute;
}

.cloud1 {
  width: 200px;
  height: 200px;
  top: 5rem;
  fill: #fff;
  /* Animation shorthand syntax order: name, duration, timing-function, delay, iteration-count, direction, fill-mode */
  -webkit-animation: move 20s linear infinite;
  -moz-animation: move 20s linear infinite;
  -o-animation: move 20s linear infinite;
  animation: move 20s linear infinite;
}

.cloud2 {
  width: 300px;
  height: 300px;
  top: 10rem;
  fill: #fff;
  -webkit-animation: move 35s linear 5s infinite backwards;
  -moz-animation: move 35s linear 5s infinite backwards;
  -o-animation: move 35s linear 5s infinite backwards;
  animation: move 35s linear 5s infinite backwards;
}

.cloud3 {
  width: 100px;
  height: 100px;
  top: 15rem;
  fill: #fff;
  -webkit-animation: move 50s linear 10s infinite backwards;
  -moz-animation: move 50s linear 10s infinite backwards;
  -o-animation: move 50s linear 10s infinite backwards;
  animation: move 50s linear 10s infinite backwards;
}

@keyframes move {
  from {
    -webkit-transform: translateX(-25vw);
  }
  to {
    -webkit-transform: translateX(125vw);
  }
}
</style>
