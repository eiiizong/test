<template>
  <div class="top-nav">
    <div class="left"
         @click="goBack">
      <i class="icon icon-back"></i>
    </div>
    <div class="right"
         @click="$emit('click')">
      <i class="icon"
         v-if="iconClassName"
         :class="iconClassName"></i>
      <span v-if="rightText">{{rightText}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top-nav',
  props: {
    iconClassName: {
      type: String
    },
    rightText: {
      type: String
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../static/style/variable.scss";
.top-nav {
  display: flex;
  background-color: #fff;
  height: $scss_top-nav-height;
  color: #000;
  font-size: $scss_32px;
  font-weight: 500;
  justify-content: space-between;
  padding: 0 $scss_30px;
  align-items: center;
  .left {
    cursor: pointer;
  }
  .right {
    display: flex;
    align-items: center;
  }
  .icon {
    display: block;
    background-image: url(../assets/img/icon-back@2x.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .icon-back {
    width: $scss_48px;
    height: $scss_32px;
    background-image: url(../assets/img/icon-back@2x.png);
  }
  .icon-filtrate {
    width: $scss_32px;
    height: $scss_32px;
    background-image: url(../assets/img/icon-filtrate@2x.png);
    margin-right: 5px;
  }
  .icon-search {
    width: $scss_42px;
    height: $scss_42px;
    background-image: url(../assets/img/icon-search@2x.png);
  }
}
</style>
