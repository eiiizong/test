<template>
  <div class="index">
    <router-link to="/home"
                 tag="li">
      <transition v-if="titleShow"
                  :duration="500">
        <div class="title">
          <div class="left animated fadeInLeft"
               animate-delay="0s"
               animate-duration="10s">
            <i class="icon"></i>
            <span>城市机会</span>
          </div>
          <div class="right animated fadeInRight"
               animate-delay="2s"
               animate-duration="2s">
            <img src="../assets/img/logo-big@2x.png"
                 alt="">
          </div>
        </div>
      </transition>

      <div class="content">
        <transition v-if="textShow">
          <div>
            <p>{{textOne}}</p>
            <p>{{textTwo}}</p>
          </div>
        </transition>
        <transition v-if="imgShow">
          <img src="../assets/img/index-01.jpg"
               class="animated rollIn fadeIn"
               alt="">
        </transition>
        <button>立即进入</button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      titleShow: false,
      textShow: false,
      imgShow: false,
      textOne: '',
      textTwo: ''
    }
  },
  components: {
  },
  created () {
    setTimeout(() => {
      this.titleShow = true
      setTimeout(() => {
        this.textShow = true
        this.textAuto()
        setTimeout(() => {
          this.imgShow = true
        }, 10000)
      }, 500)
    }, 500)
  },
  destoryed () {
    console.log('destoryed')
  },
  methods: {
    textAuto () {
      const _this = this
      const text1 = '本次发布的城市机会清单运用场景逻辑梳理整合成都以及国际友城、兄弟城市的发展机遇，激励引导优秀企业在经济全球化进程中实现价值、赢得发展。本批次城市机会清单注重打造应用场景，促进示范推广；注重完善对接机制，强化精准服务；注重链接全球发展，服务对外开放；注重突出“主干”作用，推动区域协同。本批次城市机会清单共发布764条供需信息，其中，成都城市机会清单涉及服务实体经济、乡村振兴、智慧城市、东部新城等11个应用场景共651条供需信息；德阳、眉山、资阳3个省内兄弟城市共发布74条供需信息；20个国际城市（地区）共发布39条供需信息。'
      const text2 = '成都将以更加开放包容的姿态走向时代前沿，致力于把城市机会清单塑造成为国际化、多元化、平台化的城市品牌，链接全球发展机遇、深化城市交流合作、促进企业创新发展，奋力建设面向世界的城市机会集散地和新经济创新策源地，打造共建人类命运共同体的合作交流高地。'
      const arr1 = text1.split('')
      const arr2 = text2.split('')
      let len1 = text1.length
      let len2 = text2.length
      let i = 0
      let j = 0
      let timer = null
      timer = setInterval(() => {
        if (i >= len1) {
          if (j >= len2) {
            clearInterval(timer)
            console.log(new Date().getTime())
          } else {
            _this.textTwo += arr2[j++]
          }
        } else {
          _this.textOne += arr1[i++]
        }
      }, 20)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../static/style/variable.scss";

.index {
  width: 100%;
  min-height: 100%;
  background: url(../assets/img/bg.jpg) no-repeat left bottom;
  background-size: 100% 100%;
  color: #fff;
  font-size: $scss_24px;
  line-height: $scss_36px;
  padding: 0 $scss_56px;
  padding-bottom: $scss_120px;
  position: absolute;
  top: 0;
  left: 0;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: $scss_72px;
    padding-bottom: $scss_30px;
    .left {
      display: flex;
      align-items: center;
      .icon {
        width: $scss_30px;
        height: $scss_30px;
        background-image: url(../assets/img/icon-deng@2x.png);
        background-size: 100% 100%;
      }
      span {
        font-size: $scss_56px;
        line-height: 1;
        padding-left: $scss_14px;
        font-weight: 700;
      }
    }
    .right {
      width: $scss_130px;
      img {
        width: 100%;
      }
    }
  }
  .content {
    p {
      text-indent: 2em;
      line-height: 1.8;
      font-size: $scss_26px;
    }
    img {
      padding-top: $scss_30px;
      width: 100%;
    }
  }
  button {
    width: 200px;
    position: fixed;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    background-color: #00baff;
    border-radius: $scss_10px;
    color: #fff;
    font-size: $scss_32px;
    line-height: $scss_70px;
    outline: 0;
    padding: 0;
    border: 0;
  }
}
</style>
