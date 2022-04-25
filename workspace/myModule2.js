(function myModule() {
    // myModule 函数私有的数据msg：
    var msg = 'My atguigu'
        // 操作数据 msg的方法（或者函数）
    function doSomething() {
        console.log('doSometing' + msg.toUpperCase())
    }

    function doOtherthing() {
        console.log('doOtherthing' + msg.toLowerCase())

    }

    window.module2 = { // 此处是将两个方法打包成window 的属性，然后绑定给window,供全局使用：
        doSomething: doSomething, // 名字虽然一样，第一个是属性名，本质上字符串，第二个是属性值，本质是函数（或者叫方法）
        doOtherthing: doOtherthing
    }
})() // 此处是匿名函数自调用；