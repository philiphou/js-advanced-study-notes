// 基本模式流程： 
var onmessage = function(event) { // 不能用函数声明方式
    var id = event.data;
    console.log(this) // 这里的 this 是： 
    console.log('分线程接收到了主线程发送的数据: ' + id)
        // 分线程里的计算处理：
    var result = fibonacci(id)
        // 将分线程处理的结果数据向主线程发送：
    postMessage(result) // 将获取到的数据发送回主线程： 
    console.log('分线程向主线程返回处理后的数据： ' + result)

}

function fibonacci(n) {
    return n <= 2 ? 1 : fibonacci(n - 2) + fibonacci(n - 1);
}