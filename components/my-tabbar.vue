<template>
  <view class="page_box">

    <!-- 行内式直接变量小程序不支持，故需要写成动态的变量 -->
    <view class="my_tab_title" :style="{paddingTop:statusBarHeight}">
      自定义的顶部导航条

      <!-- 左侧自定义胶囊 -->
      <view class="menu_btn" :style="{ position: 'fixed',top:menuTop,left:menuRight,width:menuWidth,height:menuHeight, border: '1rpx solid #ddd',borderRadius:menuBorderRadius,}">
        <uni-icons @click="goToBack" class="arrowleft" type="arrowleft" :color="'#000'" size="20" />
        <text class="text_box"></text>
        <uni-icons @click="goToHome" class="home" type="home" :color="'#000'" size="20" />
      </view>

    </view>

    <!-- 内容区↓ ↓ ↓ ↓ ↓ ↓ -->
    <view class="content_box" :style="{marginTop:contentTop}">
      页面的正常内容书写区
    </view>

  </view>
</template>
<script>
export default {
  data () {
    return {
      statusBarHeight: uni.getStorageSync('menuInfo').statusBarHeight,//状态栏的高度（可以设置为顶部导航条的padding-top）
      menuWidth: uni.getStorageSync('menuInfo').menuWidth,
      menuHeight: uni.getStorageSync('menuInfo').menuHeight,
      menuBorderRadius: uni.getStorageSync('menuInfo').menuBorderRadius,
      menuRight: uni.getStorageSync('menuInfo').menuRight,
      menuTop: uni.getStorageSync('menuInfo').menuTop,
      contentTop: uni.getStorageSync('menuInfo').contentTop,
    }
  },
  methods: {
    goToBack () {
      uni.navigateBack({
        delta: 1
      })
    },
    goToHome () {
      uni.switchTab({
        url: '/pages/home/index'
      })
      //下方方法也可以回到首页 还可以传参 但是不建议使用---因为此方法会关闭其他所有页面（导致再次打开别的页面时候 会再次触发别的页面的onLoad）
      // uni.reLaunch({
      //   url: '/pages/index/index?id=1'
      // })
    }
  },
};
</script>

<style lang="less" scope>
.page_box {
	background-color: transparent;
  .my_tab_title {
    width: 100%;
    height: 44px; //这个是固定的44px（所有小程序顶部高度都是 = 44px + 手机系统状态栏高度）
    line-height: 44px;
    text-align: center;
    // background-color: #f1f;
    background-color: #f8f8f8;
    position: fixed;
    top: 0;
    z-index: inherit;
    font-family: Monospaced Number, Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, Microsoft YaHei,
      Helvetica Neue, Helvetica, Arial, sans-serif !important;
    font-size: 32rpx;
    color: #000;
    font-weight: 500;

    .menu_btn {
      background-color: #ffffff; //这个是小程序默认的标题栏背景色
      overflow: hidden;
      // position: fixed;//行内式写了固定定位--目的是去掉下划页面一起滚动问题
      .arrowleft {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-160%, -50%) !important;
        -webkit-transform: translate(-160%, -50%) !important;
      }
      .text_box {
        width: 1rpx;
        height: 20px;
        background-color: #ddd;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) !important;
        -webkit-transform: translate(-50%, -50%) !important;
      }
      .home {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(60%, -50%) !important;
        -webkit-transform: translate(60%, -50%) !important;
      }
    }
  }
}
</style>

