<template>
  <div id="app">
    <transition v-if="showAudio"
                enter-active-class="animated tada"
                leave-active-class="animated bounceOutRight">
      <div class="audio">
        <audio controls="controls"
               autoplay="autoplay"
               loop="loop"
               :src="musicUrl"
               ref="audio">您的浏览器不支持 audio 标签。</audio>
        <i class="icon icon-audio"
           :class="musicIsPlay?'animation':''"
           @click="handleMusic"></i>
      </div>
    </transition>

    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      musicIsPlay: true,
      showAudio: false,
      transitionName: '',
      musicUrl: ''
    }
  },
  created () {
    setTimeout(() => {
      this.showAudio = true
    }, 500)
    this.request()
  },
  mounted () {
  },
  methods: {
    request () {
      this.$http.post('/list/system').then(res => {
        if (res.status === 200 && res.data.status === '200') {
          this.musicUrl = res.data.music_url
        }
      })
    },
    handleMusic () {
      console.log(this.$refs.audio)
      if (this.musicIsPlay) {
        this.$refs.audio.pause()
        this.musicIsPlay = !this.musicIsPlay
      } else {
        this.$refs.audio.play()
        this.musicIsPlay = !this.musicIsPlay
      }
    }
  },
  watch: {
    $route (to, form) {
      if (to.meta.index > form.meta.index) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  }
}
</script>

<style lang="scss">
@import url("./static/style/normalize.scss");
@import url("./static/style/common.scss");
@import "./static/style/variable.scss";
.audio {
  height: 0;
  position: fixed;
  bottom: 80px;
  right: 10px;
  z-index: 999;
}
audio {
  display: none;
}

.icon-audio {
  display: block;
  width: $scss_100px;
  height: $scss_100px;
  border-radius: 50%;
  color: transparent;
  background: url(assets/img/icon-music.png) no-repeat;
  background-size: 100% 100%;
  -webkit-animation: music 5s linear;
  &.animation {
    -webkit-animation: music 5s linear infinite;
  }
}
.slide-left-enter-active {
  animation-name: t-l-slide-in;
  animation-duration: 0.5s;
}
.slide-left-leave-active {
  animation-name: t-l-slide-out;
  animation-duration: 0.5s;
}
.slide-right-enter-active {
  animation-name: t-r-slide-in;
  animation-duration: 0.5s;
}
.slide-right-leave-active {
  animation-name: t-r-slide-out;
  animation-duration: 0.5s;
}
@-webkit-keyframes t-r-slide-in {
  0% {
    -webkit-transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(0);
  }
}
@-webkit-keyframes t-r-slide-out {
  0% {
    -webkit-transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(100%);
  }
}
@-webkit-keyframes t-l-slide-in {
  0% {
    -webkit-transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(0);
  }
}
@-webkit-keyframes t-l-slide-out {
  0% {
    -webkit-transform: translateX(0%);
  }
  100% {
    -webkit-transform: translateX(-100%);
  }
}
@-webkit-keyframes music {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
