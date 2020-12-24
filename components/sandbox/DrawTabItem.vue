<template>
  <div class="content has-text-centered">
    <h3 class="has-text-white">Draw stuff with Python</h3>

    <canvas
      id="freeCanvas"
      :height="initialHeight"
      :width="initialWidth"
    ></canvas>
    <p class="has-text-white">
      Draw stuff with Python in the browser thanks to Pyodide and Web Assembly
    </p>
  </div>
</template>

<script>
export default {
  name: 'DrawTabItem',
  data() {
    return {
      pyodideLoaded: false,
      error: '',
      initialHeight: null,
      initialWidth: null,
    }
  },
  async mounted() {
    this.initialHeight = window.innerHeight * 0.6
    this.initialWidth = window.innerWidth * 0.6
    await this.initializePyodide()
    this.runTestCommand()
    this.runCanvas()
  },
  methods: {
    async initializePyodide() {
      if (process.client) {
        try {
          window.languagePluginUrl =
            'https://pyodide-cdn2.iodide.io/v0.15.0/full/'
          // wait for pyodide ready
          await window.languagePluginLoader
          // load pandas lib
          //   await window.pyodide.loadPackage(['js'])
          //   console.log(window.pyodide.loadedPackages)
          this.pyodideLoaded = true
        } catch (error) {
          this.error = error
          // eslint-disable-next-line no-console
          console.log(this.error)
        }
      }
    },
    runTestCommand() {
      if (process.client) {
        // eslint-disable-next-line no-console
        console.log(
          window.pyodide.runPython(
            `
                import sys
                sys.version
            `
          )
        )
      }
    },
    runCanvas() {
      if (process.client) {
        window.pyodide.runPython(
          `
            import sys
            import js

            canvas = js.document.getElementById('freeCanvas')
            context = canvas.getContext("2d") 
            context.strokeStyle = "#fff07c"
            context.lineJoin = "round"
            context.lineWidth = 5               

            def onwindowresize(e):
                height = js.window.innerHeight * 0.6
                width = js.window.innerWidth * 0.7
                canvas.setAttribute('height', height)
                canvas.setAttribute('width', width)
                context.strokeStyle = "#fff07c"
                context.lineJoin = "round"
                context.lineWidth = 5
            
            onwindowresize

            pen = False
            lastPoint = (0, 0)

            def onmousemove(e):
                global lastPoint

                if pen:
                    newPoint = (e.offsetX, e.offsetY)
                    context.beginPath()
                    context.moveTo(lastPoint[0], lastPoint[1])
                    context.lineTo(newPoint[0], newPoint[1])
                    context.closePath()
                    context.stroke()
                    lastPoint = newPoint

            def onmousedown(e):
                global pen, lastPoint
                pen = True
                lastPoint = (e.offsetX, e.offsetY)

            def onmouseup(e):
                global pen
                pen = False

            js.window.addEventListener('resize', onwindowresize);
            canvas.addEventListener('mousemove', onmousemove)
            canvas.addEventListener('mousedown', onmousedown)
            canvas.addEventListener('mouseup', onmouseup)
            `
        )
      }
    },
  },
  head() {
    return {
      script: [
        {
          hid: 'pyodide',
          src: 'https://pyodide-cdn2.iodide.io/v0.15.0/full/pyodide.js',
          defer: true,
          // Changed after script load
          callback: () => {
            this.pyodideLoaded = true
          },
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#freeCanvas {
  background-color: white;
  border-radius: 4px;
}
</style>
