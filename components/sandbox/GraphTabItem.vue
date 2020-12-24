<template>
  <div class="content has-text-centered">
    <h3 class="has-text-white">Graph stuff with Python</h3>
    <img id="pyPlotFigure" :height="initialHeight" :width="initialWidth" />
    <p class="has-text-white">
      Graph stuff with Python in the browser thanks to Pyodide and Web Assembly
    </p>
  </div>
</template>

<script>
export default {
  name: 'GraphTabItem',
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
    this.runGraph()
  },
  methods: {
    async initializePyodide() {
      if (process.client) {
        try {
          window.languagePluginUrl =
            'https://pyodide-cdn2.iodide.io/v0.15.0/full/'
          // wait for pyodide ready
          await window.languagePluginLoader
          // load matplotlib
          await window.pyodide.loadPackage(['matplotlib'])
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
    runGraph() {
      if (process.client) {
        window.pyodide.runPython(
          `
            import sys
            import numpy as np
            import matplotlib.pyplot as plt
            import io, base64
            import js

            image = js.document.getElementById('pyPlotFigure')          
            
            fig, ax = plt.subplots()

            # physical constants
            g = 9.8
            L = 2
            mu = 0.1

            THETA_0 = np.pi / 3 # 60 degrees
            THETA_DOT_0 = 0 # No initial angular velocity

            # Def of ODE
            def get_theta_double_dot(theta, theta_dot):
                return -mu * theta_dot - (g / L) * np.sin(theta)

            # Solution to diff eq
            def theta(t):
                # Set up plot arrays
                thetas = []
                times = []

                # Initialize changing values
                theta = THETA_0
                theta_dot = THETA_DOT_0
                delta_t = 0.01 # Some time step
                for time in np.arange(0, t, delta_t):
                    theta_double_dot = get_theta_double_dot(
                        theta, theta_dot
                    )
                    theta += theta_dot * delta_t
                    theta_dot += theta_double_dot * delta_t

                    # Capture values for plot arrays
                    thetas.append(theta)
                    times.append(time)

                # Plot then return   
                ax.plot(times, thetas)
 
                return theta

            theta(50)

            def onwindowresize(e):
              height = js.window.innerHeight * 0.6
              width = js.window.innerWidth * 0.7
              image.setAttribute('height', height)
              image.setAttribute('width', width)
            onwindowresize

            buf = io.BytesIO()
            fig.savefig(buf, format='png')
            buf.seek(0)
            image.src = 'data:image/png;base64,' + base64.b64encode(buf.read()).decode('UTF-8')

            js.window.addEventListener('resize', onwindowresize)
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
#pyPlotFigure {
  background-color: white;
  border-radius: 4px;
}
</style>
