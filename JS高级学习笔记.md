# ======= JS 高级学习 ========
1. JS 基本数据类型： 
    - 基本数据类型(值类型）： 
      SNBNU --> String（任意字符串）, Number（任意数值）, Boolean（true 或者 false）, Undefined（就是 undefined）, Null（就是空 null）
    - 对象数据类型（引用类型）： 
        Object 有两种特别对象： function 函数 （是一种特别的对象， 可以执行可以调用） 和 array  数组；任意对象都是 Object 类型；
        数组也是一种特别的对象，特别在它的属性是有数值下标： arr[1] 还有特点： 内部数据是有序的；
    - 判断数据类型： typeof; instanceof; 还有  === 全等；全等只能判断 undefined 和 null; 
      * typeof 返回数据类型的字符串表达; 可以判断：字符串，数值，undefined，布尔值还有 function; 不能判断 null 和 object, 因为 null   也是object; 也不能判断 object 和 array 因为 array 也是 object；
      * instanceof 判断对象的具体类型；

                         var a
                        console.log(a, typeof a，a===undefined) // 输出： undefined 'undefined' true
                        console.log(typeof a === 'undefined') // 输出： true
                        var a =3;
                        console.log(typeof a ==='number') // 输出： true
                        var a = 'hello';
                        console.log(typeof a ==='string') // 输出： true
                        var a =null
                        console.log(typeof a)// 输出： 'object'
                        var b1= {

                        }
                         var b1 = {
                                    b2: [1, 'abc', console.log],
                                    b3: function() {
                                        console.log('b3')
                                        return function() {
                                            return 'xfzhang'
                                        }
                                    },

                                }
                                console.log(b1 instanceof Object, b1 instanceof Array) //输出 true false;instanceof 是判断属于哪个类的实例；Object 是一个构造函数， var object = new Object();
                                console.log(b1.b2 instanceof Array, b1.b2 instanceof Object) // 输出： true true; array也是对象类型，是 object!
                                console.log(b1.b3 instanceof Function, b1.b3 instanceof Object) // 输出 true， true； 函数也是对象！
                                console.log(typeof b1.b3 === 'function') // 输出 true;
                                console.log(typeof b1.b2[2]) // 输出：function;
                                b1.b2[2](4) // 输出 :4;
                                console.log(b1.b3()()) //输出 b3 xfzhang；
                                console.log(typeof b1.b2) // 输出 ‘object’, 不是输出 ‘arrray’;
2. 几个问题： 
    - 什么是实例？实例其实叫实例对象，对应的是类型，或者类型对象(其实就是构造函数)： 例如
                    function Person(name，age){
                        this.name = name; 
                        this.age = age;
                    }
                    var p = new Person('tom',22); // Person()就是一个类型，也是函数对象；p 就是 Person()的实例；new Person（）就是通过构造函数创建一个实例；
    - undefined 和 null 区别： 
      * undefined 代表定义了，未赋值；
      * null 代表定义并赋值了，但是值为 null ；
       -- 什么时候要给变量赋值为 null？
            1. 初始赋值： 表明变量时对象； typeof null 是对象 object, 问题是 null 是基本数据类型， 给一个对象初始赋值为 null ，表示变量时对象；
           var a = null; // 初始赋值  a = [1,'hello',console.log] // 给a 赋值一个 array (array 也是对象，特殊对象)； 
            2. 末尾赋值： b = null; 释放变量 b  的内存；防止b成为垃圾对象；让b指向对象成为垃圾对象，被垃圾回收器回收；
    - 严格区分数据类型和变量类型： 
        * 数据类型分为： 基本类型和对象类型；
        * 变量类型分为：
            - 基本类型： 保存的就是基本类型的数据；
            - 引用类型； var c = {}; c 变量时引用类型，因为c里存的是c赋值的地址！堆空间创建的{} c 保存的是栈内存里的地址；变量类型其实是变量内存值得类型；js 是弱类型语言；
               var c = function(){}; typeof c 返回的是 function; 是通过c 储存的地址去找到该地址对应的是函数； 
               
3. 变量和内存： 
    - 什么是数据？
        * 指的是存储在内存中代表特定信息的 “东东”， 本质上是0101.... 二进制数据；
        * 数据的特点： 可传递（赋值），就是把数据内容copy一份存储到新的变量所指的内存空间里；可运算： 
        * 一切皆数据；
        * 内存中所有操作的目标是数据：
         - 操作方式： 算数运算，赋值运算，逻辑运算，运行函数； 可操作性的方式取决于数据的类型；
           var age = 18; // 18 就是存储在内存中，代表着age 信息；
    - 什么是内存？
        * 内存条通电以后产生的可存储数据的空间；（临时的）
        * 内存产生和死亡：内存条（电路板） --> 通电-->产生内存空间-->存储数据 -->处理数据 --> 断电 -->内存和存储空间消失; 
          * 内存分类：
            - 栈内存：
               栈内存存储基本数据类型；就是存的全局变量和局部变量  
            - 堆内存： 存储对象内容；标识对象内容的变量名，依然储存在栈空间内；

    - 什么是变量？
        * 可变化的量，叫变量； 由变量名和变量值组成
        * 每个变量都对应一块小内存，变量名用来查找对应的内存（寻址标识），变量值 是内存内部保存的数据； 浏览器通过变量名（标识）去寻找内存中对应的小部分，然后读取内存中保存的数值，变量值；
        * 一块小内存的两个数据： 内存自己的地址 和 内步存贮保存内容（变量值）； 变量值也可以是一个地址，比如一个 object的地址就是保存在栈内存中； 
                    var obj = {name:'tom',age:18}
                    对于这个对象obj, 栈内存只储存obj 的地址，该地址指向堆内存中的内容，也就是 name: 'tom', age: 18;
                    var a = obj; 其实是指把obj 对象的存储地址copy 一份给变量a, 类似于把钥匙复制一把，给a， 这样a 有可以读取对象obj 的内容；
                    console.log(obj.name) 其实是拿着obj 的钥匙，找到obj的堆内存，然后读取堆内存里保存的name 值； 一般只有引用变量，拿着地址找内容的用 . 
    - 内存，数据和变量之间的关系： 
        * 内存是用来存储数据的临时空间； 
        * 变量名是内存的标识，变量值是内存保存的内容
4. 相关问题： 
    - 关于赋值和内存： 
        * var a =xxx; a 内存中保存的是什么?
            -- xxx 是基本数据，a 的内存里保存的就是这个数据
            -- xxx 是对象， a 的内存保存的是对象的地址值；
            -- xxx 是个 function, a 的内存保存的还是对象的地址；
            -- xxx 是一个变量： 
                var b= 'abc', a=b; a 中保存的依然是 'abc'; 
                var c = {}, a=c; a 中保存的是地址值，该地址值依然指向对象{}；
    - 关于引用变量赋值问题： 
        * var obj1 = {name:'tom'} var obj2=obj1; // 将obj1 内保存的内容（对象的地址值） 赋值给 obj2, obj2 内保存的也是地址值，该地址值指向对象；
        * 多个引用变量，指向同一个对象，特点是，保存的都是同一个对象的地址值；
        * 如果多个变量同时引用给一个对象，通过一个变量修改对象内部数据时候，剩余变量会看到修改之后的数据；例如： 
                                    <script>
                                        var obj1 = {
                                            name: 'tom',
                                            age: 22
                                        }
                                        var obj2 = obj1;
                                        obj2.name = 'jack'; 
                                        obj2.age = 50;
                                        console.log(obj1) // 输出： {namne:'jack',age:50}； 这样obj1 地址指向的对象内容发生了变化，读取的是更新后的对象内容！
                                        // 注意 上面修改对象内容不可以用： obj2 = {name: 'jack', age: 50}; 因为这样相当于给obj2 重新创建了一个对象，并且开辟了堆内存空间，这样obj2 内储存的是新对象的地址，该地址指向新对象，obj1 是读取不到的！
                                    </script>
        * 两个引用变量指向同一个对象， 让其中一个引用变量指向另一个对象，另一个引用变量依然指向前一个对象；

                                                            <script>
                                                                var a = {
                                                                    age: 12
                                                                };
                                                                var b = a;
                                                                a = {
                                                                    name: 'BOB',
                                                                    age: 25
                                                                }；
                                                           
                                                                console.log(b.age, a.name, a.age) // 输出：12，BOB，25；
                                                                     b.age = 14; 
                                                                console.log(b.age)// 输出： 14；

                                                                function fn(obj) {
                                                                                obj = {
                                                                                    age: 20
                                                                                } // 相当于重新开辟了新空间，建立了新的对象；
                                                                            }

                                                                            fn(a);
                                                                            console.log(a.age)// 输出25， 函数里作用域 obj 是形参，执行完毕会释放； 
                                                                            // 流程是： 1. 函数先传入实参a, 本质是把实参a 存储的内容（地址值）复制一份给形参obj, 
                                                                            // 2. 函数执行： 形参obj ={age： 20} 相当于形参obj 重新创立新的对象，那么形参obj 存储的内容将会变成新对象的地址值，而第一步中a 复制给的地址值被切断，所以不在和实参a 有联系，所以再输出a.age时候将只读取原来a 所指对象的age, 也就是25;
                                                                            // 3. 函数调用执行完毕后，形参obj 被释放，地址值消失，然后函数内部创建的对象在堆内存中成为垃圾对象，不再被引用；
                                                                // 如果函数变成： 
                                                                  function fn(obj) {
                                                                        obj.age = 80
                                                                    }

                                                                    fn(a);
                                                                    console.log(a.age) // 输出： 80
                                                                // 这个函数和上面的不同是，没有给形参obj 重新开辟空间创建新的函数，只是以形参obj 的渠道去改变了实参 a 的 属性 age 值，形参obj 内保存的一直是实参 a 的内容（指向对象的地址值）
                                                                

                                                           
    -  在JS 调用函数传递变量参数时，是值传递还是引用传递？ ，
        *  理解1： 都值传递（这个值可以是一般数据，也可以是地址数据）！不是引用！ 形参是形参，实参是实参；
        * 理解2： 可能是值传递（基本数据类型） 也可能是引用传递（传递的地址值）；引用传递不是传的对象，而是传的对象的地址值而已；
                                         var a = 3;

                                        function fn(a) {
                                            a = a + 1;
                                            return a;
                                        };
                                        fn(a);
                                        console.log(a) // 输出：3 
                                -- 外面的a 是实参，数值是3； 函数里的a是形参，当实参a 传递给形参a 之后，实参a 和里面的形参a 就没有关系了，形参 a 进行加1 运算不会改变外面实参a 本身的3.
                                         <script>
                                                    var a = 3;

                                                    function fn() {
                                                        a = a + 1;

                                                    };
                                                    fn(a);
                                                    console.log(a) // 输出：3
                                                </script>
                                -- 上面函数是无形参函数，函数执行时候，函数内的a 可以向外读取外面的变量a, 然后给a 加1， 这样其实就是改变了变量 a 的值；

    - JS 引擎如何管理内存？
        * 内存生命周期：
            - 分配小内存空间，得到它的使用权
            - 存储数据，可以反复进行操作；
            - 释放小内存空间；
               var b ={} // 创建了两个小空间，一个存b, 一个堆内存内存 object
                   b = null // 堆内存内的对象被回收，内存释放，b在栈内存内在某个时候由垃圾回收器回收；
            - 函数体内的局部变量在函数执行时创建，执行完毕自动释放回收；
                function fn(){
                    var b={}
                }
                fn() // 执行完毕后，b是自动释放，b 所指的对象会在后面的某个时候由垃圾回收器回收；
            - 全局变量不会自动释放，只会被垃圾回收器在后面某一个时刻回收；

        * 释放内存
5. 对象： 
    - 什么是对象？ 
        * 多个数据的封装体或者是用来保存多个数据的容器；
        * 一个对象代表现实世界中的一个事物；
    - 为什么要用对象？
        * 统一管理多个数据；
    - 对象的组成？由属性构成， 属性分两部分（属性名和属性值）； 属性名本质上都是字符串； 属性值可以是一般数据类型，也可以是函数， 函数也叫方法；
        * 属性： 一般属性值是基本数据类型；
        * 方法：一种特别的属性，属性值是函数；
    - 如何访问对象内部的数据？
        * 对象.属性名-->得到属性值；例如： p.setName。 此方法有时候不能用，比如
            -- 属性名包含特殊字符：- 空格
            -- 变量值不确定，就需要用变量来存储变量名，用变量读取时候要用 对象[变量]：
               var propName = 'myAge'; var value = 18; 
                // 添加属性： 
                p[propName]=value;
        * 对象['属性名字符串']；这种方法是通用； 用[] 来读取，在这里面字符串可以是一个变量； 更加强大的动态去读取或者设置对象数据；例如上例
                        var p ={ 
                            name:'tom',
                            age:12,
                            setName: function(name){
                                this.name = name
                            },
                            setAge: function(age){
                                this.age = age
                            }
                        }
6. 函数： 
    - 什么是函数？
        * 具有特定功能的N条语句的封装体；
        * 只有函数是可以执行的，其他类型的数据不能执行
    - 为什么用函数？
        * 提高代码复用；
        * 便于阅读交流；体现的是封装的思想      
    - 如何定义函数？
        *  函数声明方式： 
           function fn1(){console.log('hello')} // 函数声明方式；
        * 函数表达式： 
            var fn2 = function(){ console.log('helloworld')} // 表达式方式
    - 如何调用（执行）函数？
        * 直接调用： test()
        * obj.tes() ： 通过对象调用；
        * new Test() :  new 调用， 构造函数
        * test.call(obj) 或者 test.apply(obj) 调用； 实际上是 obj.test()， 只是临时的让 test 成为 obj 的方法进行调用；
               var obj ={};
               function test(){
                   this.xxx = 'atguigu'；
                   console.log(this)
               }
               test.call(obj) // 临时让test 成为obj 的方法并且调用, 相当于 obj.test()； 输出：  {xxx: 'atguigu'}
               console.log(obj) // 输出： {xxx: 'atguigu'}
    - 回调函数： 
        * 什么函数才是回调函数？
            --回调函数特点： 1. 我定义的，2. 我没有调， 3. 但它最终执行了；

            --  DOM 事件回调函数：
                                 <button id="btn">点我</button>
                                                <script>
                                                    var btn = document.getElementById('btn')
                                                    btn.onclick = function() {
                                                        alert(this.innerHTML)
                                                    }
                                                </script>
            -- 定时器回调函数：
                * 延时定时器： setTimeout(function(){alert('到点了')}, 2000)
                    
                * 循环定时器；setInterval(function(){},3000)
            -- ajax 请求回调函数
            -- 生命周期回调函数
    - IIFE
        * 全称： Imemediately-Invoked Function Expression (立即执行函数) 
        * 作用： 
            -- 隐藏实现： 函数体内是局部变量，外部的看不见，如果写在外面就是全局变量，这样可能会污染外部的（全局的）命名空间；
            -- 可以用它来编写JS模块；
             --例子1： 
                          (function(){console.log('立即执行')})(); //这就是立即调用执行函数的写法, 是一个匿名函数自调用；
             -- 例子2：模块化，向外暴露指定的函数；
               
                                <script>
                                (function() {
                                    var a = 1;
                                    function test() {
                                        console.log(++a)
                                    }
                                    window.$ = function() {// 此处是向外暴露一个全局函数，函数封装在对象里，属性名是test 属性值就是test函数
                                        return {
                                            test: test // 这里是返回一个对象；属性名是test字符串， 属性值是 test 函数
                                        }
                                    }
                                })()
                                // 如果要取a 的值，打印输出: （因为a,是一个局部变量）我们需要： 
                                $().test() // 输出： 2 
                                // 上面 $ 是 被定义成window的一个属性，该属性是个方法，调用后返回一个对象，对象里有属性test, 该属性的值是test 函数！
                                // $ 是一个函数，被执行后返回一个对象，对象里含着一个方法！
                               </script>
    - 函数中的 this: 
        * this 是什么？this 的值是什么？ 
            -- 任何函数本质上都是通过某个对象来调用的；如果是人为指定的，this就是那个指定调用函数的对象； 如果是默认的没有指定，this就是 window;
            -- 首先，this 不是我们定义的，所有函数内部都有一个隐含变量 this；
            -- this 的值就是调用当前函数的对象；
            -- 函数外面的 this  都是 window
            


                                        <script>
                                        function Person(color) {
                                            console.log(this)
                                            this.color = color;
                                            this.getColor = function() {
                                                console.log(this)
                                                return this.color;
                                            };
                                            this.setColor = function() {
                                                console.log(this);
                                                this.color = color
                                            };
                                        };
                                        Person('red'); //只输出一个console.log， 因为剩下的两个属性方法getColor 和 setColor 没有调用;在这里 this 是window, 谁调用，谁就是this;
                                        var p = new Person('yellow') // 在这里this就是 p,只输出一个结果 就是p所指的对象 person
                                        p.getColor() // 在这里this 就是 p, 所指对象 person {color: 'yellow', getColor: ƒ, setColor: ƒ}; 执行的会是getColor 里的 console.log(this)
                                        var obj = {}
                                        p.setColor.call(obj, 'black') // 在这里 this 就成了 obj, 其实是让 p 里面的 setColor 方法临时变成 obj 的属性方法，来调用使用一次；
                                        var test = p.setColor
                                        test(); //在这里 this 是 window
                                        </script>

                                           function fn1() {
                                                    function fn2() {
                                                        console.log(this)
                                                    }
                                                    fn2();
                                                }
                                                fn1(); // 调用执行 fn1 后，输出的 this  是 window;
                
        * 如何确定 this 的值： 
            -- test(); this 就是 window
            -- p.test(); this 就是 p;
            -- new Test(); this 就是新建的对象；
            -- test.call(obj)； this 即使 obj;

    - 关于分号的问题： 
        * 加不加取决于自己喜不喜欢；
        * 在下面两种情况需要加分号： 
            -- 小括号开头的前一条语句
            --中方括号开头的前一条语句
            --解决方法： 在行首加分号
            -- 知乎热议： https://www.zhihu.com/question/20298345
7. 函数的 prototype与原型链 : 
    - 函数的prototype 属性： 
        * 该属性是函数的属性，任何函数都有该属性；它默认指向一个object 空对象（没有我们的属性，只有constructor默认属性，叫原型对象）
            -- 函数与他的原型对象有一个相互引用的关系，因为原型对象中的constructor属性指向函数自己本身； 同时函数自己本身有一个属性叫 prototype, 这个属性是一个对象，叫函数的原型对象； 
            -- 我们可以给一个函数（特别是构造函数）的原型对象添加新的属性（一般是方法属性），添加之后，该构造函数的实例可以使用该属性（或方法）；
        * 原型对象中有一个属性，constructor, 他指向函数对象
    -  给原型对象添加属性（一般都是方法）
        * 作用： 函数所有的实例对象都自动拥有原型中的属性（方法） 
                    -- 例1： 
                    // Date 是函数，我们可以: console.log(Date.prototype) // 输出 object, 里面添加了很多方法（比如 getDay)： 这说明原型对象// 上绑定的方法，是给实例对象使用的。
                                    var date = new Date();
                                      console.log(Date.prototype.constructor === Date) // 输出 true, 原型对象中的constructor 属性指向本身；
                                    var b = date.getDay()
                                    console.log(b) // 输出2， 今天星期二；
                                    // 创建一个函数： 
                                     function fun(){}
                                     console.log(fun.prototype) // 输出{constructor: ƒ}，对象含有一个属性 constructor, 指向自己，
                                    // 动态给 fun 的原型对象添加属性方法： 
                                    fun.prototype.test = function(){}// 动态的给fun 函数的原型对象添加了新的属性方法 test;
                                    // 现在检查更新后的原型对象： 
                                      console.log(fun.prototype) // 输出： {test: ƒ, constructor: ƒ}， 结果添加了新属性方法 test;
                                      console.log(fun.prototype.constructor === fun) // 输出 true;
                    -- 例2： 实例可以使用构造函数的原型属性方法：
                                              function Person() { }
                                                Person.prototype.test = function() {
                                                    console.log('我是新加的方法')
                                                } // 给构造函数 Person 的原型对象添加属性方法 test
                                                var p = new Person(); // 创建Person的实例
                                                // 实例调用原型构造函数的原型对象的方法test:
                                                p.test() // 输出：‘我是新加的方法’
                                              
    - 显式原型属性和隐式原型属性： 
        * 每个函数function 都有一个prototype,即显式原型（属性）
        * 每个实例对象都有一个 __proto__, 称为 隐式原型（属性）
        * 对象的隐式原型的值为其对应构造函数的显示原型的值
            -例子： 
                        function Fn() {}// 相当于创建函数时，浏览器自动给函数添加了 prototype 属性，该属性为一个空的Object；
                        console.log(Fn.prototype) // 输出 函数 Fn 的原型对象， 里面含有 constructor属性指向自己；
                        var fn = new Fn();// 创建实例时候，浏览器自动的把构造函数的原型 prototype 复制给了 实例对象 fn 的属性 __proto__; 
                        console.log(fn.__proto__)
                        console.log(fn.__proto__ === Fn.prototype)// 输出 true， 即 实例的__proto__就是构造函数的 prototype(原型对象)
            - 总结： 构造函数的原型 prototype 和对应实例的原型（叫隐式原型） __proto__ 所保存的是相同地址值，共同指向一个原型对象object （称为构造函数的显式原型）； 
        * 内存结构
            - 第一步创建构造函数Fun时候，栈空间首先开辟空间保存变量 Fun， 栈空间保存地址值； 堆空间内开辟一个内存空间，存储 Fun 对象，Fun 对象里面有一个 prototype属性，该属性的属性值也是一个对象（该对象保存在另一个又开辟的小内存空间 m 内， 由prototype属性里存的地址值指向；），对象里又有一个属性叫 constructor， constructor 的属性值又是个对象，而且这个对象就是函数 Fun 本身！
            - 当创建Fun的实例fun时候，堆空间栈空间产生 fun 变量，变量里保存地址值； 堆空间里开辟一个小内存空间，保存 fun 对象； fun 对象又有一个隐式属性 __proto__, 该属性保存地址值，该地址值同样指向Fun的prototype所指向的对象，上述堆内存空间 m 保存的 原型对象） 
            - 当实例fn 调用属性方法 fn.test() 时候，首先在本身函数fn里找属性test方法，如果本身里没有，则去fn 的隐式原型 _proto_里去找，该原型指向fn的构造函数 Fn 的原型对象 prototype; prototype 原型对象里封装有 test 方法！
        * 总结： 
            - 函数的prototype 属性： 在定义函数时候自动添加的，默认值是一个空的object 对象，虽然含有默认属性 constructor 指向其本身
            - 对象的 __proto__ 属性： 创建对象时候自动添加的，默认值为构造函数的prototype 属性值
            - 程序员能直接操作显式原型，但是不能直接操作隐式原型（ES6之前）
    - 原型链： 
        * 访问一个对象的属性时候： 
            - 现在自身属性里找，找到后返回；
            -如果没有，再沿着 __proto__ 这条链向上查找，找到返回
            - 如果最终没有 找到，返回 undefined
            - 例子： 
                        function Fn() {
                                        this.test1 = function() {
                                            console.log('test1()')
                                        }
                                    }
                                    console.log(Fn.prototype)
                                    Fn.prototype.test2 = function() {
                                        console.log('test2()')
                                    }
                                    console.log(Fn.prototype)
                                    var fn = new Fn();
                                    fn.test1()
                                    fn.test2()
                                    console.log(fn.toString())
         * 别名： 隐式原型链
            - 作用： 查找对象的属性（方法）
          
        * 构造函数/原型/实体对象的关系
          - 实例的隐式原型就是构造函数的显示原型
            - 在 var fun =new Function(); 中的 Function()函数的隐式原型和显示原型是同一个： 我就是我 ： Function = new Function(); 
            - 所有函数都是构造函数 Function 的实例，所以所有的函数 隐式原型 __proto__ 都一样，都是 Function 的 prototype, 同时 Function 的隐式原型 __proto__ 和自己的 prototype 是同一个对象；
            - 最后，Function 构造函数的prototype 是指向的一个对象，该对象同时又是 构造函数Object的实例，既然是实例，该对象就有个__proto__对象，- 此处上述object实例的这个隐式原型对象又指向构造函数Object 的 显示原型 prototype; 同时构造函数 Object 又是终极构造函数Function 创建的，也是Function 的一个实例；那么构造函数 Object 的 隐式原型__proto__ 同样指向终极构造函数Function 的显示原型 prototype; 
            - 总结： 
                * 函数的显式原型 Prototype 指向的对象: 默认是空的 Object 实例对象； 但是 Object()函数的显式原型是null； 原型链的终点；
        * 原型继承： 
            - 构造函数的实例对象可以自动拥有构造函数原型对象的属性（方法）但是构造函数 Object的不是；
               console.log(Fn.prototype instanceof Object) // 输出 true
               console.log(Object.prototype instanceof Object) // 输出 false
               console.log(Function.prototype instance of Object) // 输出： true; 
            - Function 是 new Function() 创建的， 自己是自己的实例；console.log(Function.__proto__===Function.prototype) // 输出 true;
            - Object 的原型对象 prototype 是原型链的尽头，因为Objec.prototype.__proto__ 值是 null； 
            - 该处继承效果就是利用的原型链寻找；
        * 原型属性问题： 
            - 读取对象的属性值时，会自动跳到原型链中寻找；
                * 例子: 
                             function Fn() {}
                                Fn.prototype.a = 'xxx'
                                console.log(Fn.prototype) // 输出： {a: 'xxx', constructor: ƒ}
                                var fn1 = new Fn();
                                console.log(fn1.a) // 输出 xxx, 此处属性a 是通过原型链找到的构造函数Fn 的 prototype 里的属性；
            - 设置对象的属性值时，不会查找原型链，如果当前对象中没有此属性，则直接添加此属性，并设置其值；
                * 例子： 
                                function Fn() {}
                                Fn.prototype.a = 'xxx'
                                console.log(Fn.prototype)
                                var fn2 = new Fn();
                                fn2.a = 'yyy'
                                console.log(fn2) // 输出以下：
                                /*
                                Fn {a: 'yyy'}a: "yyy"[[Prototype]]: Objecta: "xxx"constructor: ƒ Fn()[[Prototype]]: Object
                                此时，fn2 已经自带属性a了，a属性值 yyy； 同时不影响 fn2 隐式原型中（也就是Fn 显示原型中的）a 的属性值 xxx
                                */
                                

                                console.log(fn2.__proto__) // 输出： {a: 'xxx', constructor: ƒ}
                                console.log(fn2.a) // 输出yyy
                                console.log(Fn.prototype.a) // 依然输出： xxx
                                console.log(fn2.__proto__.a) // 依然输出: xxx
            - 方法一般定义在原型中，属性一般通过构造函数定义在对象本身上；
        * 探索 instanceof: A instanceof B, 判断实例对象A 是否是构造函数对象 B 的实例？ 
            - instanceof 是如何判断的？ 
                -- 表达式： A instanceof B
                -- 如果B 函数的显式原型对象在A对象的原型链上，返回 true, 否则返回 false;
                --例子1： 
                                         function Foo() {};
                                        var f1 = new Foo();
                                        console.log(f1 instanceof Foo); // 返回 true;
                                        console.log(f1 instanceof Object); // 返回 true; 
                                        // 因为Object 在f1 的原型链上，第一，f1 的 __proto__ 是Foo 的 prototype; 而 Foo 的 prototype 是个对象，该对象是函数 Object 的实例，也就是 Foo 的 prototype 的 __proto__ 是Object 函数的 prototype; 
                                           f1.__proto__ === Foo.prototype
                                           Foo.__proto__ === Object.prototype
                                           Object.__proto__ === null; 原型链的尽头就是Object 的显式原型，因为显式原型的隐式原型为空了！
                -- 例子2：
                                console.log(Object instanceof Function) // true
                                console.log(Object instanceof Object) // true 
                                /* 
                                因为 Object 构造函数是 Function的实例，Function 的隐式原型和显式原型都是指向自己的原型 prototype, 而prototype 是一个对象实例，其隐式原型__proto__ 又最终指向原型链的终点： Object的 prototype! 所以 Object instanceof Object 是对的！
                                */
                                console.log(Function instanceof Function) // true； Function = new Function() 自我繁殖
                                console.log(Function instanceof Object)// ture 一切皆对象 哈哈

        * 面试题： 
            - 题目1：
                                            <script type='text/javascript'>
                                                var A = function() {};
                                                A.prototype.n = 1
                                                var b = new A() // 此时 b 作为 A 的实例，b 会通过隐式原型 __proto__ 去找 A 的显式原型 prototype
                                                A.prototype = {
                                                    n: 2,
                                                    m: 3
                                                } // 此时 A 的原型 重新赋值了一个新的对象，开辟了新的堆内存小空间，同样地址变了，之前的 实例b的原型地址值没变， 已经看不到新的prototype 对象了，除非是 A.prototype.n =1; A.prototype.m=3； 这样修改属性，地址不变情况下，b 才能看见， 如下面题目1a; 但是b的隐式原型存的就地址依然可以看到旧的A 的显式原型所在的堆空间小内存，{n：1}

                                                var c = new A();
                                                console.log(b.n, b.m, c.n, c.m) // 输出： 1,undefined,2,3
                                            </script>
            - 题目1a: 
                                                <script type='text/javascript'>
                                                var A = function() {};
                                                A.prototype.n = 1
                                                var b = new A() // 此时 b 作为 A 的实例，b 会通过隐式原型 __proto__ 去找 A 的显式原型 prototype
                                                A.prototype = {
                                                    n: 2,
                                                    m: 3
                                                } // 此时 A 的原型 prototype 属性被修改，但是地址值没变，实例b的隐式原型依然可以读取： 
                                                //  A.prototype.m=3； 这样修改属性，地址不变情况下，此时A 的 原型依然是在相同的堆空间小内存，只是属性值已经更新；
                                                var c = new A();
                                                console.log(b.n, b.m, c.n, c.m) // 输出： 2,3,2,3
                                            </script>
            - 题目2： 
                                            <script type='text/javascript'>
                                                function F() {}
                                                Object.prototype.a = function() {
                                                    console.log('a')
                                                };
                                                Function.prototype.b = function() {
                                                    console.log('b')
                                                }
                                                var f = new F();
                                                f.a();
                                                f.b();
                                                F.a();
                                                F.b();
                                            </script>
                                 ![原型链图解] https://www.i4k.xyz/article/a790012863/80144922
8. 变量提升与函数提升： 
    - 变量声明提升
        * 通过 var 定义(声明)的变量，在定义语句之前就可以访问到,但是没有赋值; 用 let 的不行；
        * 值： undefined
        * 只时在自己的作用域内提升；
        -- 例子： 
                             var a = 3;
                                function fn() {
                                    console.log(a)
                                    var a = 4; // 相当于是两步： 1. var a; 2. a = 4
                                }
                                fn() 
                                /*
                                  输出: undefined： 因为无参函数，该函数调用执行时候，首先在自己的作用域函数体内找a, a 虽然在console.log(a)之后定义并赋值，函数体内的a 变量定义会提升，可以访问到，只是没有赋值，所以值暂时是 undefined, 一直到执行到赋值语句，函数体内的变量a 才会被赋值4； 如果函数体内没有 var a =4; 那么函数调用时候，自己函数体内没有找到a 就会继续全局找，找到全局变量 a, 并输出3；但是函数体内如果 把 var a =4;  改成 let a =4;  函数调用时会报错，错误是 
                                  cannot access to a before it is initialized;
                                */
    - 函数声明提升： 
        * 通过 function 声明的函数，在之前就可以直接调用；
        * 值： 函数定义（对象）
        * 通过 var fn = function(){}; 定义的函数不会被提升调用，在这里 fn 是被var 的变量，只遵循变量声明提升规则，提前调用时， fn 值是undefined； 
        -- 例子： 
                                    fn2(); // 输出： hello
                                    var b = 3;
                                    function fn2() {
                                        console.log('hello')
                                    }
          
 
     - 执行上下文
        * 代码位置分类
            -- 全局代码
            -- 函数代码
        * 全局执行上下文
            -- 在执行全局代码前，将 window 确定为全局执行上下文
            -- 对全局数据进行预处理： 
                --- var 声明的全局变量 ---> 值开始前为undefined; 并添加为 window 的属性
                --- function 声明的全局函数  ---> 赋值（fun)本身，并添加为 window 的属性
                --- this ---> 赋值 window
                ---例子： 
                                 console.log(a1,window.a1); // 输出 undefined, undefined : a1 已经initialized 并且绑定为window的属性
                                 window.a2()； // 输出 ‘hello’ 或者 a2(); 函数已经被提升并绑定到window 属性中；
                                  console.log(this) // 输出 window, window 里有属性 a1,a2
                                            var a1 = 3;
                                            function a2() {
                                                console.log('hello')
                                            }
            -- 开始执行全局代码
        * 函数执行上下文： 
            -- 在调用函数，准备执行函数体之前，创建对应的函数执行上下文对象（虚拟对象，堆空间内小内存）； 
            -- 外部是看不见这个对象内部的，也就是函数体内部变量不会被外部看到； 
            -- 调用执行完毕这个函数后，堆内小内存同步释放，函数体内的局部参数信息也释放不在了；即使不消失，外部的也看不见里面的； 但是里面的可以看见外面的全局变量；
            -- 对局部数据进行预处理
                --- 形参变量--->赋值（实参）---> 添加为执行上下文的属性
                --- arguments --->赋值（实参列表）， 添加为执行上下文的对象；
                ---例子： 
                             <script type='text/javascript'>
                                // 全局执行上下文对象
                                console.log(a1, window.a1) // 输出 undefined,undefined
                                window.a2(); // 输出： 'a2()'
                                console.log(this) // 输出 window 对象
                                var a1 = 3;
                                function a2() {
                                    console.log('a2()') // 输出 ： 'a2()'
                                }
                                console.log(a1) // 输出3
                                    // 函数执行上下文对象
                                function fn(a1) {
                                    console.log(a1); // 输出： 2 --->实参传入的第一个元素 2
                                    console.log(a2); // 输出 undefined
                                    a3(); // 输出 ‘a3()’
                                    console.log(this) // 输出 window 对象
                                    console.log(arguments) // 输出 [2,3,callee:f,Symbol:f]---> arguments 叫类数组，或者伪数组
                                    var a2 = 3;
                                    function a3() {
                                        console.log('a3()')
                                    }
                                }
                                  fn(2, 3); // 调用后，上面fn函数体内输出内容见上：
                            </script>
        * 执行上下文栈： 
            -- 在全局代码执行前，JS引擎就会创建一个栈来存储管理所有的执行上下文对象
            -- 在全局执行上下文（window)确定后，将其添加到栈中（压栈）
            -- 在函数执行上下文创建后，将其添加到栈中（压栈）
            -- 在当前函数执行完后，将栈顶的对象移除（出栈）
            -- 当所有的代码执行完毕，栈中只剩下 window; 
                * 例子： 
                    <script>
                       // 第1步：进入全局执行上下文
                        var a = 10；
                        var bar = function(x) {
                            var b = 5
                            foo(x + b) // 3. 即第2步调用bar函数成立bar 的执行上下文后，bar 内部调用 foo ，紧接着创建进入 foo 执行上下文
                        }
                        var foo = function(y) {
                            var c = 5
                            console.log(a + c + y)
                        }
                        bar(10) // 第2步. 只有调用函数时候，才会创建函数执行上下文，此处是即创立window 执行上下文后创建的第二个函数执行上下文 
                        // 输出：30 ; 所有的函数 bar 和 foo 都是在最后 bar(10)调用时候才会执行； 
                        <!-- 首先调用bar 函数 执行 bar(10),将实参10 传值给形参x； 执行bar 函数时候，bar 函数又调用了 foo 函数， foo 函数即使是定义函数，此时依然已经存在了，并且可以调用； -->
                    </script>
        * 面试题： 
            -- 问题1. 下面函数依次输出了什么？
            -- 问题2： 整个过程一共产生了几个执行上下文？ 

                                     <script>
                                        console.log('global begin: ' + i);
                                        var i = 1;
                                        foo(1);
                                        function foo(i) {
                                            if (i == 4) {
                                                return; // 递归一般都有退出或者终止的条件；
                                            }
                                            console.log('foo() begin: ' + i);// 输出1后接下来递归，输出2， 接着又调用传3再输出3，然后再调用，传入4， 传入4递归结束了，
                                            foo(i + 1); // 此处是递归调用；在函数内部调用自己；
                                            console.log('foo() end:  ' + i); //三个结果是做上面三次递归时候，压在栈底的还没有执行的语句，等fb 输出完毕后，就会按照后进先出原则，依次执行 fe 的输出，最终递归全部执行完毕后释放函数体内所有参数，
                                        };
                                        console.log('global end: ' + i); // 上面完毕后，最后执行 window 压在最底下的 ge 输出1；
                                </script>
                                // 答案1： 依次输出： 
                                     global begin: undefined // 因为变只是变量声明提前，并没有赋值；
                                     foo() begin: 1；
                                     foo() begin: 2
                                     foo() begin: 3
                                     foo() end:  3
                                     foo() end:  2
                                     foo() end:  1
                                     global end: 1 // 递归函数执行完毕后就释放了内部参数，外部的i 依然是1； 
                               // 答案2： 一共产生了 5 个执行文件，栈内从底到上依次是： window, f(1),f(2),f(3),f(4)

            -- 测试题2： 
                                            <script type='text/javascript'>
                                                function a() {
                                                    var a;
                                                    console.log(typeof a)
                                                }
                                                a(); // 输出： undefined---> 调用时候，在函数体内找变量a, a 定义了为被赋值，是 undefined;
                                            </script>
            -- 测试题3:                     <script type='text/javascript'>
                                                    function a() {}
                                                    var a;
                                                    console.log(typeof a)// 输出：function---> 调用时候，先进行变量声明提升，再进行函数提升，最终是赋值提升，最终 a 的值是函数，类型是function 
                                            </script>
            -- 测试题4:              <script type='text/javascript'>
                                            var c = 1;
                                            function c(c) {
                                                console.log(c)
                                            };
                                            c(2) // 输出错误： c不是函数；---> c(2) 语句执行前，引擎内部预处理顺序是： var c 首先变量声明提升， 第二步， 函数提升, c变成函数， 第三部 赋值提升 c=1; 最终 c 成了数值1， 不再是函数；
                                        </script>    
            -- 测试题5： 
                                        <script type='text/javascript'>
                                            if (!(b in window)) {
                                                var b = 1;
                                            }
                                            console.log(b)// 输出: undefined ---> 就是b不是window 的属性，才会进入if 语句对其赋值， 如果b 是window 属性，则不进入if 语句内赋值，b 的值依然是undefined, 但不影响 b 依旧是 window 属性，只是值为 undefined;
                                        </script>
9. 作用域与作用域链：  
    - 理解： 
        * 它就是一块地盘，一个代码段所在的区域
        * 它是静态的，（相对于上下文对象）， 在编码时就确定了
    - 分类： 
        * 全局作用域
        * 函数作用域
        * 块作用域 （ES6以上有）
    - 作用： 
        * 隔离变量，不同作用域下同名变量不会有冲突
    - 例子1： 
                                    <script type='text/javascript'>
                                        var a = 10,
                                            b = 20;
                                        function fn(x) {
                                            var a = 100,
                                                c = 300;
                                            console.log('fn', a, b, c, x)
                                            function bar(x) {
                                                var a = 1000,
                                                    d = 400;
                                                console.log('bar', a, b, c, d, x)
                                            }
                                            bar(100)
                                            bar(200)
                                        }
                                        fn(10) // 输出： fn 100 20 300 10
                                                        // bar 1000 20 300 400 100
                                                        //bar 1000 20 300 400 200
                                       // a,b 是全局作用域变量， 函数作用域内如果定义参数，则参数的作用域是函数体内；如果函数体内代码段有变量，优先在函数体内作用域寻找变量值，找不到再去全局找，。
                                    </script>
    - 例子2： 
    - 作用域与执行上下文区别： 
        * 1. 全局作用域外，每个函数都会创建自己的作用域，作用域在函数定义时就确定了，而不是在函数调用时
        * 2. 全局执行上下文环境是在全局作用域确定之后，JS代码马上执行前创建
        * 3. 函数执行上下文环境是在调用函数时， 函数体内代码执行前创建
        * 4. 作用域是静态的，只要函数定义好了之后就一直存在，且不会再变化
        * 5. 上下文环境是动态的， 调用函数时创建，函数调用结束时上下文环境就会被自动释放
        * 6. 上下文环境（对象）是从属于所在的作用域
        * 7. 全局上下文环境---> 对应全局作用域
        * 8. 函数上下环境 ---> 对应的函数使用域
    - 作用域链： 
        * 嵌套的作用域产生的由内向外的过程；
        * 面试题1： 
                                      <script type='text/javascript'>
                                                        var x = 10;
                                                        function fn() {
                                                            console.log(x)
                                                        }；
                                                        function show(f) {
                                                            var x = 20;
                                                            f();
                                                        }
                                                        show(fn)// 输出： 10； 
                                        // 考点： 作用域在函数写的时候就确定了，而不是调用时候，调用时候只是创建了函数上下文对象，真正的作用域一开始就已经固定了！fn() 里没有 x， 只能访问全局的 x， show 里面的 x 和 fn 没有关系，读取不到！
                                        </script>            
        * 面试题2： 


                                            <script type='text/javascript'>
                                                    var fn = function() {
                                                        console.log(fn)
                                                    };
                                                    fn(); // 输出 fn 函数
                                                    var obj = {
                                                        fn2: function() {
                                                            console.log(fn2)
                                                        }
                                                    };
                                                    obj.fn2(); // 报错： 因为 要console.log要输出的 fn2 这个变量没有定义；如果要找 object 里//的属性 fn2， 需要改成： console.log(this.fn2)
                                            </script>
10.  闭包（JS 两大神兽： 原型和闭包）
    - 循环遍历加监听： 
        * html 中有三个按钮，我们需要为它们分别绑定单击响应函数，让它们每次被点击时候，输出自己的编号： 

                                        <body>
                                            <button id="btn1">按钮1</button>
                                            <button id="btn2">按钮2</button>
                                            <button id="btn3">按钮3</button>

                                        </body>
                                       --  方法1： 相当于用 var 定义的 for 里面的 i;此处的 i 是全局变量
                                        <script type='text/javascript'>
                                            window.onload = function() {
                                                var btns = document.getElementsByTagName('button') // 得到所有btn, 封装到数组 伪数组 btns里；btns.length 中 .length 不是本身属性，需要每次计算，可以用 length =btns.length , 防止重复计算；
                                                for (var i = 0; length = btns.length; i <length; i++) {// 循环遍历加监听，是先全部循环完毕，然后监听事件函数才会执行。。。 为了读取每一个btn的编号，可以给 btn 加一个属性 num;  
                                                    var btn = btns[i];
                                                    btn.num = i + 1; // 为每个btn 添加 num 属性，将其下标（index) 保存在 btn 上
                                                    console.log(btn.num)
                                                    btn.onclick = function() {
                                                        console.log('我是编号: ' + (this.num))
                                                    }
                                                }
                                            } // 单击响应函数是异步任务，for 循环是同步任务，循环执行完毕，才会监听事件，此时 i 已经变成 3； 但是当点击对象时候，如果我们给每个对象加入了num属性，那么响应函数执行就是输出的num属性值，即使是i已经循环完毕；
                                        </script>
                                        -- 方法2： 用 let 定义 for 里面的 i : 此处的 i 是代码块中作用域
                                                    <script type='text/javascript'>
                                                        window.onload = function() {
                                                            var btns = document.getElementsByTagName('button')
                                                            for (let i = 0; i < btns.length; i++) {
                                                                btns[i].onclick = function() {
                                                                    console.log('我是编号: ' + (i + 1))
                                                                }
                                                            }
                                                        }
                                                    </script>
                                        -- 方法3： IIFE 立即执行函数
                                                var btns = document.getElementsByTagName('button')
                                                            for (let i = 0; i < btns.length; i++) {
                                                                （function(i){ // 这个 function 里的 i 不是 for 里面的 i, for 里面的 i 是全局变量，function 里面的 i 是function里的局部变量；
                                                                    var btn =btns[i]// 这个i 也是局部的，先找自己的；
                                                                     btn.onclick = function() {
                                                                    console.log('我是编号: ' + (i + 1))
                                                                }
                                                                })(i)// 此处的 i 是全局的 i, 就是调用函数立即执行；
                                                            } // 这样就是在循环到每一个btn时候立即绑定单击事件函数；
                                                                                        
                                              // 上述方法其实就是用到了闭包： 
    - 闭包理解：
        * 如何产生闭包？
            -- 当一个嵌套的内部（子）函数引用了嵌套的外部（父）函数的变量（函数）时，就产生了闭包
        * 闭包到底是什么？
            -- 使用chrome 调试看看
            -- 理解一： 闭包是嵌套的内部函数（绝大部分理解）
            -- 理解二： 包含被引用变量（函数）的对象（少数人理解）
            -- 注意： 闭包存在于嵌套的内部函数中
        * 产生闭包的条件： 
            --  函数嵌套
            -- 内部函数引用了外部函数的数据（变量/函数）
            -- 调用执行外函数！因为要产生内部函数对象；
       
    - 常见的闭包： 
        * 将函数作为另外一个函数的返回值；
            -- 例子： 
             * 例子1： 
                        <script>
                            function fn1() {
                                var a = 10;
                                function fn2() { // 执行外部函数fn1时候就会产生闭包，（不用调用内部函数fn2就会产生闭包） 与此同时，函数会提升，在 a 被赋值10 之前，fn2 就已经提升到作用域顶层，仅此于 a a: undefined; 
                                    a++;
                                    console.log(a)
                                }
                                return fn2;
                            }
                            var f = fn1() // 调用外部函数 fn1，并产生一次闭包， 而且此时 f 成为了全局变量，并且赋值了 fn1()函数的返回值；下面的 f()是调用，不会重新产生闭包; 如果没有闭包，此处 fn1 执行完， a 就释放了， 后面 f() 调用时候，就报错了！
                            f(); // 其实 fn1()就是返回的函数 fn2, 然后再加一个（）执行； 输出 11； 闭包一直存在没有消失是因为 var f =fn1() 导致的，闭包产生后，闭包对象被赋值给了 var 全局变量f, 但同时 fn1()执行完毕后，fn1 里的 fn2 会被释放，只是闭包对象fn2被保存在了 var f 里，所以 a 才一直保存；相当于全局变量指向了内部函数（对象），fn2 释放只是fn2 的地址断开，f 的依然指向堆内存里的闭包对象；fn1()一调用，函数读到 var a =2; 闭包fn2就产生了， 因为有变量声明提升，和函数提升（内部函数对象要创建）
                            f(); //此时，闭包依然村子， a 是函数 fn1 内的变量，在执行 fn1 时候产生，输出12； 这个是调用，产生一次闭包，反复调用时候，闭包内部的a 未曾消失； 参考 chrome 的call stack;
                         // 上面三步步其实外部函数仅在 var f = fn1() 是调用了一次，产生了一个闭包，这个闭包对下面的 两次f() 调用均有效，a 一直存在；本质上 f() 是调用的内部函数 fn2; 
                           f = null; //上面产生的后来存储到 f 里的闭包死亡（包含闭包的函数对象成为了垃圾对象），切断了地址指向，失去引用；
                            fn1() // 此时就会产生闭包，外部函数执行几次，闭包就会产生几次；并且在函数 fn1 调用执行完毕后，闭包死亡，
                            fn1()() // 输出 11; 执行完毕后，闭包死亡， a 也释放了。，
                            fn1()() // 输出11; 同上面一样是产生了两个闭包，分别执行；执行完毕 a 释放消失；
                        </script>
             
        * 将函数作为实参传递给另外一个函数调用；
            -- 例子2： 
                                        <script>
                                            function showDelay(msg, time) {
                                                setTimeout(() => {
                                                    alert(msg)
                                                }, time);
                                            }
                                            showDelay('atguigu', 3000)
                                        </script>

    - 闭包的作用： 
        * 使用函数内部的变量在函数执行完毕后，仍然存活在内存中（延长了局部变量的生命周期） 例子1中，var f =fn1() 后，fn1()执行完毕后， a 仍然存活，这样下面紧接着 f() 调用执行时候才不会报错！
        * 让函数外部可以操作（读写）到函数内部的数据（变量或函数）； 如上例 f() 输出11， 第二个f() 输出 12； a 存活且被读取；
        * 问题：    
            -- 函数执行完毕后，函数内部声明的局部变量是否还存在？ 一般不存在，存在于闭包里的变量才会存在；如果闭包对象不保存到全局变量，外部函数执行完毕后，闭包依然释放； 只存活一个周期；
            -- 在函数外部能直接访问函数内部的局部变量吗？ 不能，但是我们可以通过闭包让外部操作它；将内部函数 return, 外部就可以操作内部数据；

    - 闭包的生命周期： 
        * 产生： 在嵌套内部函数定义执行完成时就产生了（不是调用，是定义执行）
        * 死亡： 在嵌套的内部函数成为垃圾对象时死亡
    - 闭包应用： 自定义JS模块： 
        * 什么是JS 模块
            -- 是具有特定功能的 JS 文件
            -- 将所有的数据和功能都封装在一个函数内部（私有的）
            -- 只向外暴露一个包括 n 个方法的对象或者函数
            -- 模块的使用者，只需要通过模块暴露的对象调用方法来实现对应的功能
        * 例子1： 通过return 暴露
            -- 在一个独立的 myModule.js 文件中，我们定义： 
                     function myModule() {
                    // myModule 函数私有的数据msg：
                    var msg = 'My atguigu'
                        // 操作数据 msg的方法（或者函数）
                    function doSomething() {
                        console.log('doSometing' + msg.toUpperCase())
                    }

                    function doOtherthing() {
                        console.log('doOtherthing' + msg.toLowerCase())

                    }
                    // 如果想向外暴露上面两个嵌套的函数（方法）供外部使用： 我们需要return 一个对象，把这两个属性（方法）封装到对象，打包暴露；
                    return {
                        doSomething: doSomething, // 名字虽然一样，第一个是属性名，本质上字符串，第二个是属性值，本质是函数（或者叫方法）
                        doOtherthing: doOtherthing
                    }
                }
            -- 在任意一个 html 文件中，我们引入这个 myModule.js 文件： 
               <script type ="text/javascript" src = '../myModule.js'></script>
               <script>
                   // 调用myModule.js 模块中的方法： 
                     var module = myModule();
                    // 此时， module 就是 myModule()执行完毕后返回的封装有方法的对象；然后调用对象的属性（方法）
                    module.doSomething() // 输出： doSometing: MY ATGUIGU
                    module.doOtherthing() // 输出： doOtherthing: my atguigu
                </script>
        * 例子2： 通过绑定window 暴露： 
            -- 创建新的 myModule2.js 文件，然后写入： 
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
            -- 在任意html文件中，引入 myModule2.js：引入后，由于myModule2.js中函数的自调用，该函数内嵌的属性方法已经被绑定到window 属性上供全局调用，因此可以在 html 中直接引用： 
                         <script type ="text/javascript" src = '../myModule2.js'></script>
                         <script>
                             module2.doSomething() // 输出： doSometing: MY ATGUIGU
                             module2.doOtherthing() // 输出： doOtherthing: my atguigu
                             </script>
                        // 方法2；不需要执行任何函数就可以在外部直接调用，因为模块JS文件中函数已经自调用执行完毕了，并且把内嵌的函数方法绑定在了window 属性中；
                        // 两种方法都使用了闭包，去实现了外部调用；
    - 内存溢出与内存泄露： 
        * 闭包缺点：
            -- 函数执行完毕后，函数内的局部变量没有释放，占用内存时间会变长
            -- 容易造成内存泄露
                         <script>
                            function fn1() {
                                var arr = new Array[100000]; // 创建一个占用100000个位置的数组arr； 
                                function fn2() {
                                    console.log(arr.length)
                                }
                                return fn2
                            }
                            var f = fn1();
                            f(); // f 不死， 闭包就在，arr 就一直存在占用内存； 
                            f = null; // 这样让f 所指的内部函数fn2成为垃圾对象，因为切断引用地址，从而释放闭包，进而arr 内存释放；
                        </script>

        * 解决方法： 
            -- 能不用闭包就不用
            -- 及时释放； // 如上例 f = null
        * 内存溢出： 
            - 一种程序运行出现的错误
            - 当程序运行需要的内存超过了剩余的内存时，就报错： 内存溢出；
            - 例子： 
                    <script>
                        function fn1(){
                        var obj ={}；
                        for (var i =0; i<10000; i++>){
                            obj[i] = new Array(100000) // 此处 obj 相当于是个伪数组，属性名为： 1,2,3.... 每个属性的属性值为 长度是100000的数组；
                        } // 此处这个obj 就很占内存，如果闭包里参考了这个变量，闭包不及时释放的话，obj会在内存里占领太多空间；
                        function fn2(){
                            console.log(obj)
                        }
                        return fn2
                        }
                        var f = fn1();
                        f(); // 此处 f() 执行完毕后，闭包并没有释放，依然储存在全局变量 f 中，同样 obj 也在闭包对象里，占用内存太大，
                        f = null // 切断 变量 f 对闭包对象的引用，从而闭包死亡，内存释放； 方法是 给 变量 f  重新赋值为 null；
                    </script> 
                
        * 内存泄露： 就是本来应该有更大的内存可以使用，但是泄露了一些，可用内存变小了，泄露原因如下： 
            - 占用的内存没有及时释放
            - 内存泄露积累多了就容易导致内存溢出
            - 常见的内存泄露： 
                --- 意外的全局变量
                   比如: function fn(){a=3; console.log(a)} 这样a 就成了全局变量，如果让其是局部变量，应该前面有 var 引入： var a  = 3 ;
                --- 没有及时清理的计时器或者回调函数:
                    忘记了 clearInterval() 启动循环定时器后不关闭就会一直循环执行，占用内存； 不用时候要关闭： clearInterval('定时器标识')
                --- 闭包
                    比如上例，忘了给 f 切断闭包地址， 应该用 f = null 释放闭包内存；
    - 面试题： 
        * 题目1： 
                                <script>
                                var name = 'tw'
                                var object = {
                                    name: 'mo',
                                    getNameFunc: function() {
                                        return function() {
                                            return this.name;// 这个例子不是闭包，闭包条件是函数嵌套，内部函数引用了外部函数的变量，在这里没有引用外部函数变量，而是引用的全局变量 this, 因为外部函数根本没有变量！
                                        };
                                    }
                                };
                                alert(object.getNameFunc()()) // 输出：tw ; ---> 此处：第一步： object.getNameFunc() 是一个返回来的函数，第二步：再加（）就是直接执行这个函数，直接执行函数，是在window中调用执行，this是在window全局中执行的，this 就应该是window，输出的也应该是全局的 name;  
                            </script>
        * 题目2： 
                            <script>
                                var name2 = 'tw';
                                var object2 = {
                                    name2: 'mo',
                                    getNameFunc: function() {
                                        var that = this;
                                        return function() {
                                            return that.name2;// 这个例子就产生了闭包： 函数嵌套，内部函数引用了外部函数变量 that； 同时 that是object;
                                        }
                                    }
                                }
                                alert(object2.getNameFunc()()) // 输出： mo --->此处，虽然第一步与题目1的相同，就是首先得到 object.getNameFunc()执行后返回的函数； 第二步要执行第一步返回的函数，所以加（）； 第三步： 在第二步函数执行时候，要输出的是 that.name,此处函数体内没有that, 向上一级函数内寻找，找到 var that = this; 这一句其实是定义赋值了that, that 引用的地址指向 调用getNameFunc里的对象this, 这个this 就是 object自己， 因为是 object 调用的；
                            </script>
        * 题目3： 
                    <script>
                        function fun(n, o) {
                            console.log(o)
                            return {
                                fun: function(m) {
                                    return fun(m, n); //第一： 此处 return 的这个 fun(m,n) 是递归，返回的外层函数 fun(); 第二： 此处如果调用外部函数还会产生了闭包： 内部嵌套的属性方法引用了外部函数变量 n; 第三： 内层嵌套函数是递归实现，并将参数n 传给了外层函数中的形参 o; 第四步：  console.log(o) 这个o 逆向寻找就是嵌套函数里的n, 嵌套函数里的n 就是逆序寻找外层最早的n ,因为内层函数引用了外层函数的变量n；
                                }
                            }
                        }
                        var a = fun(0);// 输出 undefined; --->调用外部函数； 产生了闭包，而且闭包保存在了变量a里，a 不释放，闭包不死； 此时 a 的值指向返回的对象，对象里有个函数方法；此处只传了0 给n， o 未被赋值，是undefined, 输出o 就是输出 undefined;
                        a.fun(1); // 输出：0
                        a.fun(2); // 输出： 0
                        a.fun(3) // 输出： 0
                        var b = fun(0).fun(1).fun(2).fun(3); // 输出： undefined, 0,1,2
                        var c = fun(0).fun(1);// 输出 undefined,0
                        c.fun(2); // 输出：1
                        c.fun(3); // 输出1；
                    </script>
11. 面向对象高级： 
        * 对象创建模式：
            1. Object 构造函数模式： 
                -- 套路： 先创建一个空Object 对象，再动态添加属性/方法
                -- 适用场景： 起始时刻不确定对象内部数据
                -- 问题： 语句太多；
                -- 例子： 
                    <script>
                        var obj = new Object();
                        obj.name = 'tom';
                        obj.age = 15;
                        obj.setName = function(name) {
                            this.name = name
                        }
                        obj.setName('jack');
                        console.log(obj) // 输出：{name: 'jack', age: 15, setName: ƒ}
                    </script>
                     
            2. 对象字面量模式： 
                --  套路： 使用{} 创建对象，同时指定属性/方法
                -- 适用场景： 起始对象内部数据是确定的
                -- 问题： 如果创建多个对象，有重复代码
                -- 例子： 
                    <script>
                        var obj = {
                            name: 'jack',
                            age: 15,
                            setName: function(name) {
                                this.name = name
                            },
                        }
                        console.log(obj) // 输出： {name: 'jack', age: 15, setName: ƒ}
                    </script>
            3. 工厂模式： （类似于构造函数）
                -- 套路： 通过工厂函数动态创建对象并返回
                -- 适用场景： 需要创建多个对象
                -- 问题： 对象没有一个具体的类型，都是 Object  类型： 比如 createPerson() 和 createStudent() 类型一样，有时我们需要知道具体类型；
                -- 例子： 
                    <script>
                        function createPerson(name, age) {
                            var obj = {
                                name: name,
                                age: age,
                                setName: function(name) {
                                    this.name = name
                                }
                            };
                            return obj;
                        };
                        var person1 = createPerson('jack', 15);
                        var person2 = createPerson('tom,', 30);
                        console.log(person1, person2); // 输出： {name: 'jack', age: 15, setName: ƒ} {name: 'tom,', age: 30, setName: ƒ}
                    </script>
            4. 自定有构造函数模式： 
                -- 套路： 自定义构造函数，通过 new 创建对象
                -- 适用场景： 需要创建多个类型确定的对象，比如就创建 student 类型
                -- 问题： 每个对象都有相同的数据，浪费内存；比如每个对象都可能有一个相同的 setName 属性方法； 
                -- 解决上述问题： 将 setName 属性方法放在原型中，因为所有的子类都可以调用原型中的方法， s1,s2,s3...都可以访问Student 构造函数的显示原型中的属性方法；因为实例对象 s1,s2,s3 ....的隐式原型 __proto__ 都指向构造函数 Student 的显式原型 prototype
                -- 例子： 
                    <script>
                    function Student(name, age, address) {
                        this.name = name;
                        this.age = age;
                        this.address = address;
                        this.setName=function(name){
                            this.name = name;
                        }
                    }
                    var s1 = new Student('tom', 20, 'Toronto')
                    console.log(s1) // 输出： Student {name: 'tom', age: 20, address: 'Toronto',setName:f} --> 明确了是 Student 类型； 是实例 instanceof Student
                    console.log(s1 instanceof Student)// 输出： true
                    var s2 = new Student('jack',18,'Regin');
                    console.log(s2) // 输出： Student {name: 'jack', age: 18, address: 'Regina',setName:f}-->和s1拥有相同的 setName 方法，重复部分占用了不必要的内存，可以把共同的方法属性放在构造函数 Student的显示原型中，这样所有实例都可以通过原型链访问使用：
                    </script>
            5. 构造函数加原型的组合模式： 
                -- 套路： 自定义构造函数，一般属性在函数中初始化，属性方法添加到构造函数的显式原型上；
                -- 适用场景： 需要构建多个类型确定的对象
                -- 例子：
                    <script>
                        function Student(name, age) {
                            this.name = name;
                            this.age = age;
                        }
                        // 将方法绑定在构造函数的原型上
                        Student.prototype.setName = function(name) {
                            this.name = name //此处这个原型对象上绑定的方法一般是给实例用的， 实例调用此方法时候，this 就是该实例，如下面 s1.setNamn('jack') ,其实就是 s1 调用的，所有this 是 s1, 只不过调用的方法时通过原型链找到原型读取调用的，本质依然是s1调用的，this 还是指向调用者s1;
                        }
                        // 通过构造函数创建新的实例s1
                        var s1 = new Student('tom', 22)
                        console.log(s1); // 输出： Student {name: 'tom', age: 22} // 这样输出的每个实例对象上只有姓名年龄，节省了属性方法的内存，因为属性方法放在了原型上；如下： 
                        /* Student {name: 'tom', age: 22}
                            age: 22
                            name: "jack"
                            [[Prototype]]: Object 
                            setName: ƒ (name)
                            constructor: ƒ Student(name, age)
                            [[Prototype]]: Object
                        */ 
                        // 通过原型链，实例可以直接访问构造函数显式原型中的方法：
                        s1.setName('jack');
                        console.log(s1) // 输出： Student {name: 'jack', age: 22} ---> 通过调用原型中的方法，改变实例的属性值；
                    </script>
           
        6.  原型链继承： 
            1. 方式1： 原型链继承
                --套路： 
                    1. 定义父类型构造函数
                    2. 给父类型的原型添加方法；
                    3. 定义子类型的构造函数
                    4. 创建父类型的实例对象赋值给子类型的原型
                    5. 将子类型原型的构造属性设置为子类型
                    6. 给子类型原型添加方法
                    7. 创建子类型的实例对象，可以调用父类型的方法
                -- 关键： 
                    1. 子类型的原型为父类型的一个实例对象！（这样原型链才可以指向父类型的显式原型）
                -- 例子： 
                    <script>
                        // 创建父类型构造函数
                        function Super() {
                            this.supProp = 'Super Property'
                        }
                        // 为父类构造函数的显式原型添加属性方法
                        Super.prototype.showSuperProp = function() {
                                console.log(this.supProp)
                            }
                            // 创建子类型构造函数
                        function Sub() {
                            this.subProp = 'Sub Property'
                        }
                        // 将子类型构造函数的原型变成父类型构造函数的一个实例，创建父子联系，打通原型链：
                        Sub.prototype = new Super() // 将Sub的原型变成 Super 的实例，这样Sub的实例就可以找到 Super 的prototype ,进而调用： 
                        // 让子类型构造函数的原型里面添加 costructor 属性，并指向子类型构造函数 这样 console.log(sub.constructor)
                        // 就会输出 Sub, 而不是通过原型链找到Super 原型里的 constructor 属性（那个属性指向 Super父类构造函数）
                        Sub.prototype.constructor = Sub 
                            // 为子类型的构造函数的显式原型添加属性/方法
                        Sub.prototype.showSubProp = function() {
                                console.log(this.subProp);
                            }
                            // 创建子类型构造函数的实例； 子类型的实例可以直接访问子类型构造函数的原型的属性/方法
                        var sub = new Sub();
                        sub.showSubProp() // 输出 sub Property
                            // sub.showSuperProp() // 会报错，因为找不到， 返回 showSuperProp 不是个函数--->
                            /* 此时 父类型构造函数 Super 和子类型构造函数 Sub 还没有建立父子联系，如果我们想让子类型构造函数 Sub 的 实例 sub 去调用父类型构造函数的 原型的方法： showSuperProp, 
                                我们需要将 Sub 和 Super 建立父子关系连接：
                            */
                            // 想办法让 Sub 的原型，变成 Super 的实例： 这样 Sub 的 实例 sub 就可以顺着原型链按照_proto__路线找到 Super 的 prototype: 进而读取数据；
                        sub.showSuperProp() // 输出：Super Property
                        console.log(sub.constructor) // 输出： Sub --> 更符合逻辑，指向一级构造者
                    </script>
            2.  借用构造函数继承： 
                    -- 套路： 
                        1. 定义父类型构造函数
                        2. 定义子类型构造函数
                        3. 在子类型构造函数中，调用父类型构造
                    -- 关键：
                        1. 在子类型构造函数中通用 call()调用父类型构造函数
                    -- 例子：
                        <script>
                            // 创建构造函数 Person
                            function Person(name, age) {
                                this.name = name;
                                this.age = age;
                            };
                            // 创建 构造函数 Student,因为Student 也是person， 我们想继承 Person 的属性，用函数.call 方法绑定调用；
                            function Student(name, age, price) {
                                Person.call(this, name, age) // 将person 函数作为临时作为对象this 的属性方法进行调用，并传入形参 name, age; 可以理解为：： this.Persong(name,age)；
                                    // 此处的this 是动态指定的，实例对象调用就是实例对象，比如下面的 s1; 
                                this.price = price // 继续添加对象 this 的属性、
                            };
                            var s1 = new Student('tom', 55, 10000);
                            console.log(s1); // 输出：Student {name: 'tom', age: 55, price: 10000}
                        </script>
            3.  组合继承： 
                -- 套路： 原型链+借用构造函数的组合继承
                    1. 利用原型链实现对父类对象的方法继承
                    2. 利用super().call借用父类型构建函数的初始化相同属性；
                -- 例子： 
                 
                    <script>
                        // 创建构造函数 Person
                        function Person(name, age) {
                            this.name = name;
                            this.age = age;
                        };
                        Person.prototype.setName = function(name) {
                                this.name = name
                            }
                            // 创建 构造函数 Student,因为Student 也是person， 我们想继承 Person 的属性，用函数.call 方法绑定调用；
                        function Student(name, age, price) {
                            Person.call(this, name, age) // 将person 函数作为临时作为对象this 的属性方法进行调用，并传入形参 name, age; 可以理解为：： this.Persong(name,age)；这样做是为了得到父类属性
                                // 此处的this 是动态指定的，实例对象调用就是实例对象，比如下面的 s1; 
                            this.price = price // 继续添加对象 this 的属性、
                        };
                        Student.prototype = new Person() // 原型链继承父类构造函数的原型的属性方法！
                        Student.prototype.constructor = Student // 添加constructor 属性，让其指向直接上一级的构造函数 Student, 不然会继续找到最高父类Person 的原型里的 constructor(指向Person)
                        Student.prototype.setPrice = function(price) {
                                this.price = price
                            } // 给 Student 构造函数的原型绑定属性方法：
                        var s1 = new Student('tom', 55, 10000);
                        console.log(s1); // 输出：Student {name: 'tom', age: 55, price: 10000}
                        s1.setName('jack');
                        console.log(s1) // 输出： Student {name: 'jack', age: 55, price: 10000}
                        s1.setPrice(20000)
                        console.log(s1) //输出：Student {name: 'jack', age: 55, price: 20000}
                    </script>
12. 线程机制与事件机制： 
    - 进程(process)与线程(thread)： 
        * 进程： 程序的一次执行，它占有一片独有的内存空间； 可以通过Windows任务管理器查看； 一个程序可以有一个或者多个进程；
        * 线程： 是进程的一个独立单元，是程序执行的一个完整流程，也是CPU的最小调度单元；一个进程里面可以有一个或者多个线程；
        * 应用程序必须运行在某个进程的某个线程上
        * 一个进程至少有一个运行的线程： 主线程，进程启动后自动创建
        * 一个进程中也可以同时运行多个线程，我们会说程序是多线程运行的
        * 多个进程之间的数据是不能直接共享的； 进程之间是互相独立的，不能数据共享；
        * 线程池（thread pool)： 保存多个线程对象的容器，实现线程对象的反复利用；
    - 相关问题： 
        * 何为多进程？何为多线程？
            -- 多进程运行： 一个程序可以同时启用多个实例运行
            -- 多线程： 在一个进程内，同时有多个线程运行
        * 比较单线程与多线程？ 
            -- 多线程： 
               1. 优点： 可以有效提升CPU 的利用率
               2. 缺点： 创建多线程的开销； 线程之间切换的开销，以及死锁与状态同步的问题；
            -- 单线程： 
               1. 优点： 顺序编程，简单易懂
               2. 缺点： 效率低
        * JS 是单线程还是多线程？
            -- JS 是单线程运行的
            -- 但使用H5中的 web Workers 可以多线程运行（一个主线程，多个分线程）
        * 浏览器运行是单线程还是多线程？
            -- 浏览器都是多线程运行的；
        * 浏览器运行是单进程还是多进程？
            --  浏览器有单进程(firefox)也有多进程（chrome)  
            -- 如何查看浏览器是否多进程运行？ 任务管理器；
    - 浏览器内核：
        * 就是支持浏览器运行的最核心的程序，
        * 不同的浏览器不一样，（Chrome，safari: webkit)(firefox: gecko)(IE: triden)
        * 内核由很多模块组成；比如： JS 引擎； html,css 文档解析模板； DOM/CSS 模块； 布局和渲染模块； 定时器模块； 事件响应模块； 网络请求模块
    - 定时器引发的思考： 
        * 定时器真的是定时执行的吗？
            -- 定时器并不能真正保证定时执行
            -- 一般会延时一点点，也肯能延迟很久：
            -- 例子1： 延迟一丁点
                <script>
                var btn = document.getElementById('btn');
                btn.onclick = function() {
                    var start = Date.now();
                    console.log('启动定时器前')
                    setTimeout(function() {
                        console.log('执行了： ' + (Date.now() - start))
                    }, 100)
                    console.log('启动定时器后') // 输出： 启动定时器前 启动定时器后  执行了： 107
                }
                </script> 
            -- 例子2： 延迟很久
                 <script>
                        var btn = document.getElementById('btn');
                        btn.onclick = function() {
                                var start = Date.now();
                                console.log('启动定时器前')
                                setTimeout(function() {
                                    console.log('执行了： ' + (Date.now() - start))
                                }, 100)
                                console.log('启动定时器后')
                            }
                            // 做一个长时间的工作： 
                        for (var i = 0; i < 10000000000; i++) {
                        }
                        // 输出结果是 执行了 205， 延时了很久 
                 </script>
        *  定时器的回调函数是在分线程执行的吗？ 
            -- 在主线程执行的，所以上面有延迟很久， JS 是单线程的，
        * 定时器是如何实现的？ 
            -- 事件循环模型：（参考后面）
    - JS 是单线程执行的： 
        * 如何证明 JS 执行时单线程的？ 
            -- setTimeout() 的回调函数是在主线程执行的
            -- 定时器回调函数只有在运行栈中的代码全部执行完毕后才有可能执行
            -- 例子： 
                 <script>
                    setTimeout(function() {
                        console.log('timeout 2222')
                    }, 2000) // 此处 setTimeout 是初始化代码， setTimeout里面有一个回调函数作为参数，是回调代码；
                    setTimeout(function() {
                        console.log('timeout 1111')
                    }, 1000)
                     setTimeout(function() {
                        console.log('timeout 0000')
                    }, 0)
                    function fn() {
                        console.log('fn')
                    }
                    fn()
                    console.log('alert 之前')
                    alert('--------') //此处alert 弹出后会暂停当前主线程的执行；而且还暂停了计时！点击弹出框的确认后，再一切恢复（也恢复计时）；（证明 定时器是主线程执行）
                    console.log('alert 之后')
            </script>


        * 为什么JS 要用单线程模式，而不是多线程模式？
            -- JS 的单线程与他的用途有关
            -- 作为浏览器脚本语言，JS 的主要用途是与用户互动，以及操作DOM
            -- 这决定了它只能是单线程，否则会代合很多复杂的同步问题
        * 代码分类：
            -- 初始化代码
            -- 回调代码
        * JS 引擎执行代码的基本流程
            -- 先执行初始化代码：包含一些特别的代码 如 设置定时器，绑定监听，发送 ajax 请求
            -- 然后在后面某个时候才会执行回调代码；（比如所有的 setTimeout()里的回调函数都会在主线程执行完毕后在执行；计时计时器设置世间步长为0）； 通常我们会说上述特别代码（初始化代码）中的回调函数（回调代码）会异步执行（必须在所有的初始化代码执行完毕后才执行）； 
            -- 例子： 
                  <script>
                    setTimeout(function() {
                        console.log('timeout 2222')
                    }, 2000) // 此处 setTimeout 是初始化代码， setTimeout里面有一个回调函数作为参数，是回调代码；
                    setTimeout(function() {
                        console.log('timeout 1111')
                    }, 1000)
                     setTimeout(function() {
                        console.log('timeout 0000') // 此处的console.log 会在最下面主线程的 console.log('alert 之后')执行输出后才会输出！因为回调代码会最后执行，等待初始化代码执行完毕后才会回调执行； 
                    }, 0)
                    function fn() {
                        console.log('fn')
                    }
                    fn()
                    console.log('alert 之前')
                    alert('--------') //此处alert 弹出后会暂停当前主线程的执行；而且还暂停了计时！点击弹出框的确认后，再一切恢复（也恢复计时）；（证明 定时器是主线程执行）
                    console.log('alert 之后')
            </script>
    - 事件循环模型： 
        * heap 堆 （堆里面存储一个一个的对象）  stack 栈 （类似存储执行上下文，嵌套函数） 
        * 初始化代码包含： 设置定时器，绑定事件监听；实在主线程的JS 引擎执行
        * 定时器和事件监听的回调函数都是在之后某个时候执行（叫回调代码）； 所有回调函数被触发时候（事件触发，或者定时器到点触发），浏览器的分线程（web Apis) 里的 DOM 模块或者 ajax 请求模块或者是定时器模块就会工作，把回调函数就会被放入一个队列，叫callback queque (回调队列)， 然后等待执行；执行会等待初始化代码（主线程）执行完毕以后，才会回来执行回调函数：同时，回调函数也是一个一个的执行，是单线程执行； 
        * 总结流程： 
            1. 所有代码分类： 
                -- 初始化执行代码（同步代码）： 包含绑定DOM 事件监听，设置定时器，发送 ajax请求的代码
                -- 回调执行代码（异步代码）： 处理回调函数（逻辑）
            2. js 引擎执行代码的基本流程：
                -- 初始化代码---> 回调代码
            3. 模型的2个重要组成部分： 
                -- 事件(定时器/DOM事件/ajax 请求） 管理模块
                -- 回调队列
            4. 模型的运转流程： 
                -- 执行初始化代码，将事件回调函数交给对应模块管理
                -- 当事件发生时，管理模块会将回调函数及其数据添加到回调队列中（待处理的回调函数列）
                -- 只有当初始化代码执行完毕后（可能要一定时间），才会遍历读取回调队列中的回调函数执行
                -- 事件轮询（ event loop)， 然后从任务队列中循环取出回调函数，然后放入执行栈中处理（一个接一个）
                -- 事件驱动模型： heap+stack; WebApis; callback queue;
                -- 请求响应模型： request-response model


            5. 例子： 
                            <script>
                    function fn1() {
                        console.log('fn1')
                    }
                    fn1();
                    document.getElementById('btn').onclick = function() {
                        console.log('点击了 btn')
                    }
                    setTimeout(function() {
                            console.log('定时器执行了')
                        },
                        2000)

                    function fn2() {
                        console.log('fn2')
                    }
                    fn2()
                </script> // 输出： fn1,fn2,'定时器执行了' （点击后，输出： 点击了btn) 
    -  H5 Web Workers 多线程： 
        * H5 规范提供了 JS 分线程的实现，取名为 web workers；
            -- 我们可以将一些计算量大的代码交由 web worker 运行而不冻结用户界面（不再响应用户操作）
            -- 但是子线程完全受主线程控制，且不得操作DOM
            -- 所以这个新标准并没有改变 JS 单线程的本质
        *  使用：
            -- 创建在分线程执行的JS 文件
            -- 在主线程中的JS中发消息并设置回调函数： （比如上例，主线程把id 参数传给分线程，分线程把计算结果返回主线程） 
        * 相关API: 
            -- Worker: 构造函数，加载分线程执行的js 文件: 
                var worker = new Worker('worker.js')
            -- Worker.prototype.onmessage: 用于接收另一个线程的回调函数: 
                worker.onmessage = function(event){
                    console.log(event.data)
                }
            -- 向 worker 发送数据： 
               worker.postMessage('hello world')
        * 不足： 
            -- worker 内代码不能操作 DOM (更新UI)
            -- 不能跨域加载JS
            -- 不是每个浏览器都支持这个新特性
            -- 分线程里面的 worker 工作全局对象是 Dedicated Worker Global Scope, 不是 window! 所以不能直接调用 Window 里的原型属性方法，如 alert, toString, Date 等； 同时 worker 的全局对象原型中有自带的属性方法： 如 onmessage, postMessage 等；在分线程里面是看不到 window 的！这也就是为什么分线程不能操作DOM 的原因，因为 DOM 是 window 对象里的方法；
        * 例子1.： 
            <body>
        <input type='text' placeholder="id">
        <button id='btn'>计算</button>
        </body>
      
<script>
        // 要实现功能： input  输入框里是位数id，点击计算按钮，返回 第id 为的斐波那契数列数值：
        function fibonacci(id) {
            // 斐波那契数列： 1,1,2，3,5,8,13,21.。。。(每一位都是前两位的和) 当 n >2 时， f(n)=f(n-1)+f(n-2); 
            return id <= 2 ? 1 : (fibonacci(id - 1) + fibonacci(id - 2)) // 这其实就是递归调用（函数内部，调用自己）
        }
        //console.log(fibonacci(8)); // 输出：  21
        // 第一步： 得到 Input 里面的 id 值： 
        var input = document.getElementsByTagName('input')[0]

        // 给按钮计算加绑定函数： 
        var btn = document.getElementById('btn')
        btn.onclick = function(id) {
            var id = input.value
            console.log(id)
            console.log(id <= 2 ? 1 : (fibonacci(id - 1) + fibonacci(id - 2)))
        }
    </script>
        * 上述例子可以看到当我们输入的位数较大，例如45时候，程序会运行一段时间，在此时间段内，我们无法再操作网页其他部位进行操作，因为主线程里的斐波那契调用还没有执行完毕；（递归的效率较低） 
        * 为了解决上述问题，我们可以把这个递归调用（需要长时间完成）操作放在分线程去做： 
        * 例子2： 
          // 第一步： 创建一个在分线程执行的 JS 文件 worker.js： 
          // 第二步： 
 
 <script>
        // 要实现功能： input  输入框里是位数id，点击计算按钮，返回 第id 为的斐波那契数列数值：
        function fibonacci(id) {
            // 斐波那契数列： 1,1,2，3,5,8,13,21.。。。(每一位都是前两位的和) 当 n >2 时， f(n)=f(n-1)+f(n-2); 
            return id <= 2 ? 1 : (fibonacci(id - 1) + fibonacci(id - 2)) // 这其实就是递归调用（函数内部，调用自己）
        }
        //console.log(fibonacci(8)); // 输出：  21
        // 第一步： 得到 Input 里面的 id 值： 
        var input = document.getElementsByTagName('input')[0]

        // 给按钮计算加绑定函数： 
        var btn = document.getElementById('btn')
        btn.onclick = function(id) {
            var id = input.value
        // 将 主线程的 id 参数传递给分线程： 
        // 创建一个Worker构造函数的对象：  并向它传递将在新线程中执行的脚本的URL
         var worker = new Worker('worker.js')
              // 向分线程发送数据消息（此处是 id 数值）： 
         worker.postMessage(id);
         console.log('主线程向分线程发送数据： '+id)
        // 主线程除了发送消息还要收集分线程执行完毕的返回结果： 
        worker.onmessage=function(event){
            console.log('主线程接收分线程执行的返回数据： '+event.data)
                } // 这个函数也可以写在前面，是异步执行的，回调代码
        console.log(this) // 这里的 this 是 btn

            
        }
    </script>
                --分线程代码 worker.js 文件里： 
                                // 基本模式流程： 
                            var onmessage = function(event) { // 不能用函数声明方式
                                var id = event.data；
                                console.log(this) // 这里的 this 是 DedicatedWorkerGlobalScape （是 Worker 的全局scope对象，这个对象里有属性方法： onmessage; postMessage; 等； 类似于 window 对象中保存的 各种函数 toString, Date 等；)
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
         -- 在输入框里输入10后点击计算按钮， 输出： 
                                主线程向分线程发送数据： 10
                                 分线程接收到了主线程发送的数据: 10
                                 分线程向主线程返回处理后的数据： 55
                                主线程接收分线程执行的返回数据： 55



    
            

          




        











                     

                

                  





                        

        


 





            




            

      
        






                    
      
