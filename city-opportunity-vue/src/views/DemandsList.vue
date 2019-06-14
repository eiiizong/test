<template>
  <div class="demands-list">
    <TopNav iconClassName="icon-filtrate"
            rightText="筛选"
            @click="handleShowSearch" />
    <div class="content">
      <div v-show="!isShowSearch">
        <transition v-if="showLogo">
          <div class="img-wrapper animated wobble rollIn">
            <img src="../assets/img/logo-big@2x.png"
                 alt="logo">
          </div>
        </transition>

        <transition v-if="showNav">
          <div class="nav">
            <ul>
              <li :class="navIndex===0?'active':''">
                <div class="link"
                     @click.stop="clickNavDemandsList">
                  <span class="bg"></span>
                  <span>需求清单({{requestData.demand_cnt}})</span>
                </div>
              </li>
              <li :class="navIndex===1?'active':''">
                <div class="link"
                     @click.stop="clickNavGetsList">
                  <span class="bg"></span>
                  <span>供给清单({{requestData.supply_cnt}})</span>
                </div>
              </li>
            </ul>
          </div>
        </transition>

        <transition v-if="showList">
          <div class="list">
            <ul>
              <li v-for="(item, index) in cardData"
                  class="animated rollIn rollout"
                  :key="item.id">
                <Card :data="item"
                      @click="linkNav(index)" />
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>

    <transition v-if="showSearch"
                leave-active-class="animated slideOutUp">
      <div v-if="isShowSearch"
           class="search-wrapper animated slideInDown">
        <TopNav @click="handleShowSearch"
                rightText="关闭" />
        <div class="search">
          <div>
            <div class="input-wrapper">
              <input type="text"
                     v-model="searchKeywordStr"
                     placeholder="请输入产品需求">
              <!-- <button>搜索</button> -->
            </div>
            <!-- 城市 -->
            <div class="item"
                 v-if="searchCity">
              <h3>城市</h3>
              <div class="checkbox-group">
                <label :for="'city' + index"
                       v-for="(item, index) in searchCity"
                       :key="index">
                  <input type="checkbox"
                         :checked="item.checked"
                         @change="checkboxChangeCity"
                         :value="index"
                         :id="'city' + index">
                  <span>{{item.name}}</span>
                </label>
              </div>
            </div>
            <div class="item"
                 v-if="searchNeeds">
              <h3>需求供给</h3>
              <div class="checkbox-group">
                <label :for="'need' + index"
                       v-for="(item, index) in searchNeeds"
                       :key="index">
                  <input type="radio"
                         :checked="item.checked"
                         @change="checkboxChangeNeeds"
                         :value="index"
                         name="need"
                         :id="'need' + index">
                  <span>{{item.name}}</span>
                </label>
              </div>
            </div>
            <div class="item"
                 v-if="searchZF && isShowZFChioce">
              <h3>政府企业</h3>
              <div class="checkbox-group">
                <label :for="'zf' + index"
                       v-for="(item, index) in searchZF"
                       :key="index">
                  <input type="radio"
                         :checked="item.checked"
                         @change="checkboxChangeZF"
                         :value="index"
                         :id="'zf' + index">
                  <span>{{item.name}}</span>
                </label>
              </div>
            </div>
            <!-- 类别 -->
            <div class="item"
                 v-if="searchCate">
              <h3>场景分类</h3>
              <div class="checkbox-group">
                <label :for="'type' + index"
                       v-for="(item, index) in searchCate"
                       :key="index">
                  <input type="checkbox"
                         :checked="item.checked"
                         @change="checkboxChangeCate"
                         :value="index"
                         :id="'type' + index">
                  <span>{{item.name}}</span>
                </label>
              </div>
            </div>

            <div class="item"
                 v-if="searchRequestType.length>0">
              <h3>需求类型</h3>
              <div class="checkbox-group">
                <label :for="'rt' + index"
                       v-for="(item, index) in searchRequestType"
                       :key="index">
                  <input type="checkbox"
                         :checked="item.checked"
                         @change="checkboxChangeRequestType"
                         :value="index"
                         :id="'rt' + index">
                  <span>{{item.name}}</span>
                </label>
              </div>
            </div>

            <div class="item"
                 v-if="searchScene.length>0">
              <h3>细分市场</h3>
              <div class="checkbox-group">
                <label :for="'scene' + index"
                       v-for="(item, index) in searchScene"
                       :key="index">
                  <input type="checkbox"
                         :checked="item.checked"
                         @change="checkboxChangeScene"
                         :value="index"
                         :id="'scene' + index">
                  <span>{{item.name}}</span>
                </label>
              </div>
            </div>

          </div>
          <div class="btn-wrapper">
            <button @click="clickSearch">搜索</button>
          </div>
        </div>
      </div>
    </transition>
    <MaskPopup :isShow="isShowHint"
               @click="closePopup" />
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/top-nav.vue'
import Card from '@/components/card.vue'
import MaskPopup from '@/components/mask.vue'
import qs from 'qs'

export default {
  name: 'demands-list',
  data () {
    return {
      showSearch: false,
      showNav: false,
      showLogo: false,
      showList: false,
      isShowSearch: false,
      isShowZFChioce: false,
      navIndex: 0,
      requestData: {},
      cardData: [],
      searchCity: [],
      searchCate: [],
      searchScene: [],
      searchRequestType: [],
      searchNeeds: [
        {
          name: '需求',
          checked: false
        },
        {
          name: '供给',
          checked: false
        }
      ],
      searchZF: [
        {
          name: '企业',
          checked: false
        },
        {
          name: '政府',
          checked: false
        }
      ],
      cityNameStr: '',
      cateStr: '',
      sceneStr: '',
      city: '',
      searchKeywordStr: '',
      searchCityStr: '',
      isShowHint: false,
      isNeed: false
    }
  },
  components: {
    TopNav,
    Card,
    MaskPopup
    // Search
  },
  created () {
    setTimeout(() => {
      this.showLogo = true
      this.showSearch = true
    }, 0)
    setTimeout(() => {
      this.showNav = true
    }, 1000)
    setTimeout(() => {
      this.showList = true
    }, 1500)
    this.initIsShowHint()
    this.request()
    this.requestSearchList()
  },
  methods: {
    initIsShowHint () {
      var a = localStorage.getItem('isShowHintList')
      if (!a) {
        this.isShowHint = true
      } else {
        this.isShowHint = false
      }
    },
    closePopup () {
      this.isShowHint = false
      localStorage.setItem('isShowHintList', this.isShowHint)
    },
    request () {
      const cityName = this.$route.query.city_name
      this.city = cityName
      const data = {
        'city_name': cityName
      }
      this.axios.post('/list/city', qs.stringify(data)).then(res => {
        if (res.status === 200 && res.data.status === '200') {
          this.requestData = res.data
          this.cardData = res.data.demand_list
          this.isNeed = true
        }
      })
    },
    requestSearchList () {
      this.axios.post('/list/system').then(res => {
        if (res.status === 200 && res.data.status === '200') {
          const result = res.data
          let arrCity = []
          let arrCate = []
          result.city.forEach((item, index) => {
            arrCity[index] = {
              name: item,
              checked: false
            }
          })
          result.cate.forEach((item, index) => {
            arrCate[index] = {
              name: item,
              checked: false
            }
          })

          this.searchCity = arrCity
          this.searchCate = arrCate
        }
      })
    },
    requestSearch (cityName, cate, scene) {
      const data = {
        'city_name': cityName,
        'scene': scene,
        'cate': cate
      }
      this.axios.post('/list/searchList', qs.stringify(data)).then(res => {
        if (res.status === 200 && res.data.status === '200') {
          const data = res.data
          if (data.request_type.length > 0) {
            let arr = []
            data.request_type.forEach((item, index) => {
              arr[index] = {
                name: item,
                checked: false
              }
            })
            this.searchRequestType = arr
          }
          if (data.scene.length > 0) {
            let arr = []
            data.scene.forEach((item, index) => {
              arr[index] = {
                name: item,
                checked: false
              }
            })
            this.searchScene = arr
          }
          console.log(data)
        }
      })
    },
    checkboxChangeCity (e) {
      const data = this.searchCity
      const index = parseInt(e.target.value, 10)
      let arr = []

      data.forEach((item, i) => {
        if (index === i) {
          item.checked = !item.checked
        }
        if (item.checked) {
          arr.push(item.name)
        }
      })

      let cityName = arr.join()
      if (cityName.indexOf('成都市') !== -1) {
        this.isShowZFChioce = true
      } else {
        this.isShowZFChioce = false
      }
      this.cityNameStr = cityName

      //      this.requestSearch(this.cityNameStr, this.cateStr, this.sceneStr)
    },
    checkboxChangeCate (e) {
      const data = this.searchCate
      const index = parseInt(e.target.value, 10)
      let arr = []
      data.forEach((item, i) => {
        if (index === i) {
          item.checked = !item.checked
        }
        if (item.checked) {
          arr.push(item.name)
        }
      })
      let cate = arr.join()
      this.cateStr = cate
      this.requestSearch(this.cityNameStr, this.cateStr, this.sceneStr)
    },
    checkboxChangeZF (e) {
      const data = this.searchZF
      const index = parseInt(e.target.value, 10)

      data.forEach((item, i) => {
        if (index === i) {
          item.checked = true
          this.ZFStr = index + 1 + ''
        } else {
          item.checked = false
        }
      })
    },
    checkboxChangeNeeds (e) {
      const data = this.searchNeeds
      const index = parseInt(e.target.value, 10)

      data.forEach((item, i) => {
        if (index === i) {
          item.checked = true
          this.needsStr = index + 1 + ''
        } else {
          item.checked = false
        }
      })
    },
    checkboxChangeRequestType (e) {
      const data = this.searchRequestType
      const index = parseInt(e.target.value, 10)

      data.forEach((item, i) => {
        if (index === i) {
          item.checked = !item.checked
          this.requestTypeStr = item.name
        }
      })
    },
    checkboxChangeScene (e) {
      const data = this.searchScene
      const index = parseInt(e.target.value, 10)

      data.forEach((item, i) => {
        if (index === i) {
          item.checked = !item.checked
          this.sceneStr = item.name
        }
      })
    },
    handleShowSearch () {
      this.isShowSearch = !this.isShowSearch
    },
    linkNav (index) {
      const cate = this.cardData[index].cate
      const page = ''
      const type = ''
      const nature = ''
      const scene = ''
      const requestType = ''
      const keyword = ''

      let url = {
        path: '/demandsTypeList',
        query: {
          city_name: this.city,
          cate,
          page,
          type,
          nature,
          scene,
          'request_type': requestType,
          keyword
        }
      }
      console.log(this.city)
      console.log(this.navIndex)
      if (this.city === '成都市' && this.navIndex === 0) {
        url.path = '/choice'
      }
      this.$router.push(url)
    },
    clickNavDemandsList () {
      this.navIndex = 0
      this.cardData = this.requestData.demand_list
      this.isNeed = true
    },
    clickNavGetsList () {
      this.navIndex = 1
      this.cardData = this.requestData.supply_list
      this.isNeed = false
    },
    clickSearch () {
      const cate = this.cateStr
      const type = this.needsStr
      const nature = this.ZFStr
      const scene = this.sceneStr
      const requestType = this.requestTypeStr
      const keyword = this.searchKeywordStr

      let url = {
        path: '/demandsTypeList',
        query: {
          city_name: this.cityNameStr,
          cate,
          type,
          nature,
          scene,
          'request_type': requestType,
          keyword
        }
      }
      this.$router.push(url)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../static/style/variable.scss";

.demands-list {
  width: 100%;
  height: 100%;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  .content {
    flex: 1;
    width: 100%;
    background: url(../assets/img/bg.jpg) no-repeat left top;
    background-size: 100% 100%;
    overflow: hidden;
    > div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .img-wrapper {
      width: 100%;
      text-align: center;
      padding: $scss_72px $scss_196px $scss_120px;
      img {
        width: 100%;
      }
    }
    .nav {
      padding: 0 $scss_72px $scss_54px $scss_66px;
      ul {
        display: flex;
        justify-content: space-between;
        li {
          .link {
            position: relative;
            width: $scss_286px;
            height: $scss_70px;
            span {
              display: block;
              width: $scss_286px;
              height: $scss_70px;
              background-color: #008ed5;
              border-radius: 50px;
              border: solid 1px #fff;
              font-size: $scss_38px;
              line-height: $scss_70px;
              font-weight: 500;
              color: #fff;
              text-align: center;
              position: absolute;
              top: 0;
              left: 0;
              opacity: 0.5;
              &.bg {
                position: relative;
                background-color: #20f0ec;
                top: 0;
                left: 0;
              }
            }
          }
          &.active {
            .link {
              span {
                opacity: 1;
                font-weight: 700;
                &.bg {
                  top: $scss_4px;
                  left: $scss_4px;
                }
              }
            }
          }
        }
      }
    }
    .list {
      width: 100%;
      flex: 1;
      padding-top: $scss_40px;
      padding-bottom: $scss_32px;
      overflow: auto;
      ul {
        max-height: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        overflow: auto;
        padding: 0 $scss_42px;
        align-items: flex-start;
        li {
          width: $scss_325px;
          height: $scss_170px;
          position: relative;
          margin-bottom: $scss_48px;
        }
      }
    }
  }
}
.search-wrapper {
  width: 100%;
  max-height: 100%;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  .top-nav {
    width: 100%;
    background-color: #fff;
    position: absolute;
    z-index: 10000;
    top: 0;
    left: 0;
  }
}
.search {
  flex: 1;
  width: 100%;
  background-color: #fff;
  color: #646464;
  border-top: 1px solid #edeff2;
  overflow: auto;
  display: flex;
  flex-direction: column;
  > div {
    width: 100%;
    flex: 1;
    overflow: auto;
    padding-top: $scss_top-nav-height;
    padding-bottom: $scss_100px;
    position: relative;
  }
  .input-wrapper {
    display: flex;
    align-items: center;
    padding: 0 $scss_30px;
    padding-top: $scss_28px;
    input {
      width: $scss_510px;
      flex: 1;
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
    position: absolute;
    bottom: $scss_40px;
    left: 0;
    width: 100%;
    padding: 0 $scss_140px;
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
