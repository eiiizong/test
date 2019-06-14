<template>
  <div class="demands-detail"
       v-if="newData">
    <TopNav iconClassName="icon-backMenu"
            @click="backToMenu"
            rightText="回到目录" />

    <div class="content">
      <transition>
        <div class="top">
          <!-- <img src="../assets/img/detail-bg.jpg"
               alt="logo"> -->
          <div class="info">
            <div class="title"
                 v-if="detail.name||detail.carrier_name">{{detail.name||detail.carrier_name}}</div>
            <div class="name">
              <span class="tag"
                    v-if="detail.scene||detail.type">{{detail.scene||detail.type}}</span>
              <span v-if="detail.contact_company||detail.sponsor">{{detail.contact_company||detail.sponsor}}</span>
            </div>
          </div>
        </div>
      </transition>

      <transition>
        <div class="main">
          <ul>
            <li v-for="(item, index) in newData"
                :key="index">
              <div class="left">【{{item.name}}】</div>
              <div class="right">
                <span>{{item.value}}</span>
                <span v-if="item.contact">{{item.contact}}</span>
              </div>
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
import qs from 'qs'

export default {
  name: 'demands-list',
  data () {
    return {
      detailData: [
        {
          id: 0,
          title: '需求需要',
          desc: '利用现有厂房62333.49平米，项目总投资1亿元，将建成3条产线1.6吋单晶碳化硅单晶衬底研发线年产6吋碳化硅衬底2000 片2.6外延片生产线：6寸氮化镓外延片 2万片/年8英寸Si-GaN（功率电子+LED）1万片/年；6 英寸 GaAS+GaN1 万片/年 150000'
        },
        {
          id: 1,
          title: '总投资额',
          desc: '150000万元 '
        },
        {
          id: 2,
          title: '融资需求',
          desc: '5000万元 '
        },
        {
          id: 3,
          title: '联系方式',
          desc: '成都国民天成半导体有限公司',
          contact: '张站峰  13880813191'
        },
        {
          id: 4,
          title: '建设模式',
          desc: '政府和企业出资共建'
        }
      ],
      filed: {},
      detail: {},
      newData: []
    }
  },
  created () {
    this.requestData()
  },
  components: {
    TopNav
  },
  methods: {
    requestData () {
      const id = this.$route.query.id
      const data = {
        id
      }
      const getDetail = () => {
        return this.axios.post('/list/detail', qs.stringify(data))
      }
      const getSystem = () => {
        return this.axios.post('/list/system')
      }
      this.axios.all([getDetail(), getSystem()]).then(this.axios.spread((acct, perms) => {
        if (acct.status === 200 && acct.data.status === '200') {
          this.detail = acct.data.info
        }
        if (perms.status === 200 && perms.data.status === '200') {
          this.filed = perms.data.filed
        }
        this.initNewData(this.detail, this.filed)
      }))
    },
    initNewData (detail, filed) {
      const detailAttr = Object.keys(detail)
      const filedAttr = Object.keys(filed)
      let arr = []
      let i = 0
      for (let detailIndex in detailAttr) {
        for (let filedIndex in filedAttr) {
          if (detailAttr[detailIndex] === filedAttr[filedIndex] && detail[detailAttr[detailIndex]] && filed[filedAttr[filedIndex]]) {
            arr[i++] = {
              name: filed[filedAttr[filedIndex]],
              value: detail[detailAttr[detailIndex]]
            }
          }
        }
      }
      this.newData = arr
      console.log(arr)
    },
    backToMenu () {
      this.$router.push({
        path: '/home'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../static/style/variable.scss";

.demands-detail {
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
    background-image: url(../assets/img/bg.jpg);
    background-size: cover;
    .top {
      position: relative;
      min-height: $scss_158px;
      background-image: url(../assets/img/detail-bg.jpg);
      background-size: cover;
      img {
        width: 100%;
      }
      .info {
        position: absolute;
        top: 0;
        left: 0;
        padding: 0 $scss_30px;
        font-size: $scss_34px;
        line-height: $scss_42px;
        color: #fff;
        font-weight: 700;
        .title {
          color: #fff;
          padding-top: $scss_40px;
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
      }
    }
  }
  .main {
    ul {
      li {
        display: flex;
        padding: 0 $scss_30px;
        font-size: $scss_28px;
        font-weight: 500;
        line-height: $scss_42px;
        color: #fff;
        // align-items: center;
        padding-top: $scss_50px;
        min-height: $scss_132px;
        .left {
          width: $scss_200px;
        }
        .right {
          flex: 1;
          border-bottom: 1px solid #edeff2;
          padding-bottom: $scss_30px;
          span {
            display: block;
          }
        }
      }
    }
  }
}
</style>
