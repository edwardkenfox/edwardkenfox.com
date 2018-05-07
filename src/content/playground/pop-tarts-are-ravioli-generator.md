+++
date = "2017-03-05T22:26:14+09:00"
title = "Pop Tarts Are Ravioli Generator"

+++

<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<div id="app">
  <canvas id="image" height="764" width="1024" style="width: 640px"></canvas>
  <br>
  <br>
  <div>
    <input type="text" v-model="text">
    <a @click="download">Download</a>
  </div>
</div>
<script>
  new Vue({
    data() {
      return {
        text: '',
      }
    },
    watch: {
      text(val) {
        const canvas = document.getElementById('image')
        const context = canvas.getContext('2d')
        context.save()
        const image = new Image()
        image.onload = function() {
          context.drawImage(image, 0, 0)
          context.font = '40pt sans-serif'
          context.rotate((Math.PI / 180) * -22.4)
          context.fillText(val, 220, 700, 340)
          context.restore()
        }
        image.src = '/static/pop-tarts-are-ravioli-generator/image.png'
      }
    },
    methods: {
      download(event) {
        const link = event.target
        link.href = document.getElementById('image').toDataURL()
        link.download = `${this.text.toLowerCase().replace(/\ /g, '-')}.png`
      }
    },
    mounted() {
      this.text = 'Pop Tarts Are Ravioli'
    },
  }).$mount('#app')
</script>
