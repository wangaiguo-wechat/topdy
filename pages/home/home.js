Page({
  data:{
    list:[
      {
        title:"分布式存储",
        detail:"分布式存储为用户提供多重实时副本的数据保护方式，更安全，可持续使用。"
      },{
        title:"多重存储安全保障",
        detail:"多重实时副本保障您的数据安全，异地副本也能快速恢复。"
      },{
        title:"网路隔离",
        detail:"通过VXLAN技术对用户之间的网络进行隔离保证每个用户安全使用。"
      },{
        title:"按需使用",
        detail:"为您的每个需求提供最适合的云的环境， 并可满足您应用对性能、可靠、可扩展和安全的需求。"
      },{
        title:"按需扩张",
        detail:"投入小，可根据业务增长可随时扩展。"
      }
    ]
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
   
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
   
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
   
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
   
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: '鼎云科技', // 分享标题
      desc: '详细信息', // 分享描述
      path: 'path' // 分享路径
    }
  }
})