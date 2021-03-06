// pages/init/init.js
const Xman = require('../../service/xman.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tips: '设置游戏',
    xman: null,
    gameStatus: 0,
    playerNumber: 8,
    blankNumber: 0,
    xmanNumber: 1,
    cards: [],
    currentPlayer: 0,
    result: '游戏进行中',
    modalHidden: true,
    pingmin_label : '',
    wodi_label : '',
  },
  

  generatorArray: function (num) {
    let arr = []
    while (num-- > 0) {
      arr.unshift(num)
    }
    return arr
  },
  // 输入游戏参与人数
  bindPlayerInput: function (e) {
    this.setData({
      playerNumber: parseInt(e.detail.value)
    })
  },
  bindBlankInput: function (e) {
    this.setData({
      blankNumber: parseInt(e.detail.value)
    })
  },
  bindXmanInput: function (e) {
    this.setData({
      xmanNumber: parseInt(e.detail.value)
    })
  },
  bindPingminLabelInput: function (e) {
    this.setData({
      pingmin_label: e.detail.value
    })
  },

  bindWodiLabelInput: function (e) {
    this.setData({
      wodi_label: e.detail.value
    })
  },

  initXman: function (e) {
    this.setData({
      xman: new Xman()
    })
    let mdata = {
      playerNumber: this.data.playerNumber,
      blankNumber: this.data.blankNumber,
      xmanNumber: this.data.xmanNumber
    }
    // 初始化游戏
    this.data.xman.init(mdata.playerNumber, mdata.xmanNumber, mdata.blankNumber)
    this.data.xman.start()
    let idArray = this.data.xman.getIdArray()
    console.log(idArray)
    this.setData({
      gameStatus: this.data.xman.getStatus(),
      cards: idArray
    })
    // 保存游戏数据
    wx.setStorage({
      key: 'xman',
      data: mdata
    })
  },
  confirmWord: function (e) {
    let curr = this.data.currentPlayer
    let id = this.data.xman.confirmWord(curr)
    console.log(id.desc)
    let that = this
    wx.showModal({
      title: '你的词语',
      content: id.desc,
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          that.setData({
            currentPlayer: curr + 1
          })
        }
      }
    })
  },
  exposePlayer: function (e) {
    let playerId = e.currentTarget.dataset.index
    if (playerId === undefined) {
      // alert('index 为空')
      return false
    }
    if (this.data.gameStatus === 2) {
      // alert('游戏已结束')
      return false
    }
    let res = this.data.xman.exposePlayer(playerId)
    console.log(res)
    let idArray = this.data.xman.getIdArray()
    this.setData({
      gameStatus: this.data.xman.getStatus(),
      cards: idArray,
      result: res
    })
  },
  continueGame: function (words) {
    this.data.xman.start(words)
    let idArray = this.data.xman.getIdArray()
    console.log(idArray)
    this.setData({
      gameStatus: this.data.xman.getStatus(),
      result: "游戏未开始",
      currentPlayer: 0,
      cards: idArray
    })
  },
  selfDefine: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  showWords: function () {
    console.log(this.data)
    // alert()
    wx.showModal({
      title: '平民；卧底',
      content: this.data.xman.currentWords.toString() ,
      showCancel: false,
     
    })
  },
  restartGame: function () {
    this.data.xman.reset()
    // this.data.xman = null
    this.setData({
      gameStatus: 0,
      currentPlayer: 0,
      result: "游戏未开始",
      cards: [],
      xman: null 
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //事件处理函数
  bindViewTap: function() {
    this.setData({
      modalHidden:!this.data.modalHidden
    })
    
  },
  //确定按钮点击事件
  modalBindaconfirm:function(){
    console.log(this.data)
    
    this.setData({
      modalHidden:!this.data.modalHidden,
    })
    console.log(this.data)
    let words = undefined
    if( this.data.pingmin_label.length > 0){
      words = [this.data.pingmin_label,this.data.wodi_label ]
    }
    this.continueGame(words)
  },
  //取消按钮点击事件
  modalBindcancel:function(){
    this.setData({
      modalHidden:!this.data.modalHidden,
    })
  },  
})