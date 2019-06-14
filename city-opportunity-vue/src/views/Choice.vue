<template>
  <div class="choice">
    <TopNav />
    <div class="content">
      <transition v-if="showNav">
        <div class="list">
          <ul>
            <li class="animated rollIn rollout">
              <router-link :to="{path: '/demandsTypeList', query: {nature: '1',city_name:'成都市',cate: cate }}">
                <img src="../assets/img/zf@2x.png"
                     alt="">
              </router-link>
            </li>
            <li class="animated rollIn rollout">
              <router-link :to="{path: '/demandsTypeList', query: {nature: '2',city_name:'成都市',cate: cate  }}">
                <img src="../assets/img/qy@2x.png"
                     alt="">
              </router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/top-nav.vue'
// import Card from '@/components/card.vue'

export default {
  name: 'chioce',
  data () {
    return {
      showNav: false,
      cardData: [
        {
          id: 1,
          iconClassName: 'icon-enterprise',
          cate: '企业',
          cnt: 'Translate'
        },
        {
          id: 2,
          cate: 'icon-government',
          title: '政府',
          cnt: 'Government'
        }
      ],
      cate: ''
    }
  },
  components: {
    TopNav
  },
  created () {
    const cate = this.$route.query.cate
    this.cate = cate
    console.log(cate)
    setTimeout(() => {
      this.showNav = true
    }, 0)
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "../static/style/variable.scss";

.choice {
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
    overflow: auto;
    .list {
      padding: $scss_270px $scss_100px 0;
      ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          width: 100%;
          margin-bottom: $scss_48px;
        }
      }
    }
  }
}
</style>
