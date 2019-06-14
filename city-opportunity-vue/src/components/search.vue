<template>
  <div class="search animated slideInDown">
    <div class="input-wrapper"
         v-if="true">
      <input type="text"
             placeholder="产品需求">
      <button>搜索</button>
    </div>
    <div class="item"
         v-if="searchCity">
      <h3>城市</h3>
      <div class="checkbox-group">
        <label :for="'city' + index"
               v-for="(item, index) in searchCity"
               :key="index">
          <input type="checkbox"
                 :id="'city' + index">
          <span>{{item}}</span>
        </label>
      </div>
    </div>
    <div class="item"
         v-if="searchScene">
      <h3>类别</h3>
      <div class="checkbox-group">
        <label :for="'type' + index"
               v-for="(item, index) in searchScene"
               :key="index">
          <input type="checkbox"
                 :id="'type' + index">
          <span>{{item}}</span>
        </label>
      </div>
    </div>
    <div class="btn-wrapper">
      <button @click="$emit('clickSearch')">搜索</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  props: {
    isHasInputSearch: {
      type: Boolean,
      default: false
    },
    searchCity: {
      type: Array
    },
    searchScene: {
      type: Array
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../static/style/variable.scss";
.search {
  width: 100%;
  position: fixed;
  z-index: 100;
  background-color: #fff;
  top: $scss_top-nav-height;
  left: 0;
  color: #646464;
  border-top: 1px solid #edeff2;
  .input-wrapper {
    display: flex;
    align-items: center;
    padding: 0 $scss_30px;
    padding-top: $scss_28px;
    input {
      width: $scss_510px;
      height: $scss_62px;
      background-color: #edeff2;
      border-radius: 50px;
    }
  }
  .item {
    padding-top: $scss_52px;
    margin-bottom: $scss_8px;
    h3 {
      padding: 0 $scss_30px;
      line-height: 1;
      font-size: $scss_28px;
      font-weight: 600;
      color: #000;
    }
    &:last-child {
      margin-bottom: $scss_96px;
    }
  }
  .checkbox-group {
    display: flex;
    flex-wrap: wrap;
    padding: 0 $scss_5px;
    label {
      margin-top: $scss_30px;
      padding: 0 $scss_25px;
      input {
        display: none;
      }
      span {
        display: inline-block;
        background-color: #fff;
        font-size: $scss_28px;
        line-height: $scss_52px;
        font-weight: 500;
        color: #646464;
        border: 1px solid #edeff2;
        padding: 0 $scss_10px;
        transition: all 0.3s;
      }
      input {
        &:checked ~ span {
          background-color: #00baff;
          color: #fff;
          border-color: #00baff;
        }
      }
    }
  }
  .btn-wrapper {
    padding: $scss_96px $scss_192px $scss_46px;
    button {
      width: 100%;
      height: $scss_70px;
      background-color: #00baff;
      border-radius: $scss_20px;
      color: #fff;
      font-size: $scss_32px;
      line-height: $scss_70px;
      padding: 0;
    }
  }
  input {
    border: 0;
    outline: 0;
    border-radius: 0;
    display: inline-block;
    font-size: $scss_28px;
    line-height: 1.4;
    padding: 0 0 0 $scss_36px;
    color: #000;
    font-weight: 500;
  }
  button {
    border: 0;
    outline: 0;
    margin: 0;
    padding: 0;
    background-color: transparent;
    color: #909399;
    line-height: 1;
    font-size: $scss_28px;
    padding: $scss_10px $scss_22px;
  }
}
</style>
