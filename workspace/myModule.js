function myModule() {
    // myModule 函数私有的数据msg：
    var msg = 'My atguigu'
        // 操作数据 msg的方法（或者函数）
    function doSomething() {
        console.log('doSometing: ' + msg.toUpperCase())
    }

    function doOtherthing() {
        console.log('doOtherthing: ' + msg.toLowerCase())

    }
    // 如果想向外暴露上面两个嵌套的函数（方法）供外部使用： 我们需要return 一个对象，把这两个属性（方法）封装到对象，打包暴露；
    return {
        doSomething: doSomething, // 名字虽然一样，第一个是属性名，本质上字符串，第二个是属性值，本质是函数（或者叫方法）
        doOtherthing: doOtherthing
    }
}