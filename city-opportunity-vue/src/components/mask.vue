<template>
  <div class="mask"
       v-if="isShow">
    <div class="popup">
      <div class="content">
        <div class="img-wrapper">
          <img src="../assets/img/see-more.png"
               alt="">
        </div>
        <button @click="$emit('click')">知道了</button>
      </div>
    </div>
    <div class="popup-mask"></div>
  </div>
</template>

<script>
export default {
  name: 'maskPopup',
  props: {
    isShow: {
      type: Boolean
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../static/style/variable.scss";
.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  text-align: center;
  .popup {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    .content {
      width: 100%;
      height: 100%;
      padding-top: $scss_420px;
      justify-content: center;
      flex-wrap: wrap;
      position: relative;
    }
  }
  .popup-mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .img-wrapper {
    width: 100%;
    height: $scss_406px;
    display: flex;
  }
  img {
    width: $scss_200px;
    margin: auto;
  }
  button {
    outline: 0;
    width: $scss_220px;
    height: $scss_64px;
    border-radius: $scss_20px;
    border: solid 1px #fff;
    font-size: $scss_32px;
    font-weight: normal;
    background-color: transparent;
    color: #fff;
    line-height: $scss_60px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: $scss_220px;
    padding: 0;
  }
}
</style>
