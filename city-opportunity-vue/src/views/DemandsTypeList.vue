<template>
  <div class="demands-type-list">
    <TopNav :iconClassName="isShowSearch?'':'icon-search'"
            @click="handShowSearch" />
    <transition v-if="showList">
      <div class="content">
        <ul v-show="!isShowSearch && list">
          <li v-for="(item, index) in list"
              @click="linkNav(index)"
              class="animated bounceInLeft"
              :key="item.id">
            <div class="title">{{item.name||item.carrier_name}}</div>
            <div class="name">
              <span class="tag"
                    v-if="item.scene||item.type">{{item.scene||item.type}}</span>
              <span>{{item.contact_company||item.sponsor}}</span>
            </div>
          </li>
          <li class="btn-wrapper"
              v-if="showMore">
            <button @click="requestList">点击加载更多</button>
          </li>
        </ul>
      </div>
    </transition>

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

  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/top-nav.vue'
// import Search from '@/components/search.vue'

import qs from 'qs'
export default {
  name: 'demands-list',
  data () {
    return {
      showSearch: false,
      showList: false,
      isShowSearch: false,
      list: [],
      page: 1,
      showMore: false,
      isShowZFChioce: false,
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
      query: {}
    }
  },
  components: {
    TopNav
  },
  created () {
    console.log(this.$route)

    setTimeout(() => {
      this.showSearch = true
    }, 0)
    setTimeout(() => {
      this.showList = true
    }, 0)
  },
  mounted () {
    this.query = this.$route.query
    this.requestList()
    this.requestSearchList()
  },
  methods: {
    requestList () {
      const query = this.query
      const cityName = query.city_name
      const cate = query.cate
      const keyword = query.keyword
      const nature = query.nature
      const page = this.page
      const requestType = query.request_type
      const scene = query.scene
      const type = query.type
      const data = {
        'city_name': cityName,
        'request_type': requestType,
        cate,
        keyword,
        nature,
        page,
        scene,
        type
      }

      this.axios.post('/list/demand', qs.stringify(data)).then(res => {
        if (res.status === 200 && res.data.status === '200') {
          if (res.data.list.length >= 20) {
            this.showMore = true
          } else {
            this.showMore = false
          }
          if (page === 1) {
            this.list = res.data.list
            this.page++
          } else {
            if (res.data.list.length > 0) {
              this.list = this.list.concat(res.data.list)
              this.page++
            }
          }
        }
      })
    },
    linkNav (index) {
      const id = this.list[index].id
      this.$router.push({
        path: '/demandsDetail',
        query: { id }
      })
    },
    handShowSearch () {
      this.isShowSearch = !this.isShowSearch
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
    clickNavDemandsList () {
      this.navIndex = 0
      this.cardData = this.requestData.demand_list
    },
    clickNavGetsList () {
      this.navIndex = 1
      this.cardData = this.requestData.supply_list
    },
    clickSearch () {
      const cate = this.cateStr
      const type = this.needsStr
      const nature = this.ZFStr
      const scene = this.sceneStr
      const requestType = this.requestTypeStr
      const keyword = this.searchKeywordStr

      this.query = {
        city_name: this.cityNameStr,
        cate,
        type,
        nature,
        scene,
        request_type: requestType,
        keyword
      }
      this.isShowSearch = false
      this.page = 1
      this.requestList()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../static/style/variable.scss";

.demands-type-list {
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  .content {
    flex: 1;
    width: 100%;
    overflow: auto;
    background: url(../assets/img/bg.jpg) no-repeat left bottom;
    background-size: cover;
    font-size: $scss_32px;
    padding: 0 $scss_30px;
    ul {
      li {
        padding: $scss_30px 0;
        min-height: $scss_140px;
        border-bottom: 1px solid;
        border-image: linear-gradient(#ffffff, #ffffff),
          linear-gradient(#edeff2, #edeff2);
        .title {
          line-height: $scss_44px;
        }
        .name {
          padding-top: $scss_16px;
          display: flex;
          align-items: center;
          font-size: $scss_22px;
          line-height: 1;
          .tag {
            border-radius: $scss_4px;
            font-size: $scss_18px;
            padding: $scss_4px;
            line-height: 1;
            border: solid 1px #fff;
            margin-right: $scss_10px;
          }
        }
        &.btn-wrapper {
          padding-right: $scss_140px;
          padding-left: $scss_140px;
          button {
            border: 0;
            outline: 0;
            border-radius: 0;
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
}
</style>
