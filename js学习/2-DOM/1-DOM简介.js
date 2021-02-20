// 宿主对象：
//  由浏览器或宿主环境创建的对象
// DOM：文档对象模型
// JS通过DOM来对html进行操作，了解DOM就可以随心所欲操作web页面
// **获取元素节点
//     通过document对象调用
//     1.获取元素节点
//         通过document对象调用
//         1.document.getElementById()
//         2.document.getElementsByTagName()
//         3.document.getElementsByName()
//     2.innerHTML用于获取元素内部的HTML代码，对于自结束标签没有意义。
//     2.a innerText没有标签，其他与innerHTML类似。
//     3.如果需要读取元素的节点属性：直接使用元素.属性名，如：
//     元素.id  元素.name  元素.value
//     注意：对于class属性，由于是保留字，不可以采用这种方式，应该用 元素.className代替
// **获取元素节点的子节点
//     通过具体的元素节点调用
//     1.getElementsByTagName() -方法
//     2.childNodes -属性 该属性会获取包括文本节点在内的所有节点
//         例子：
//             <ul>
//                 <li>1</li>
//                 <li>2</li>
//                 <li>3</li>
//                 <li>4</li>
//             </ul>
//         当返回ul下面子节点个数时，会把标签之间的空白当成文本节点，数量为9；但是对于ie8及以下的浏览器，
//         不会将空白文本当成子节点。
//     2.a children属性可以获取当前元素的所有子元素，不包括文本，这样上述例子结果就统一为4了。
//     3.firstChild 返回第一个子节点，包括文本
//     3.a firstElementChild获取当前元素的第一个子元素 不支持IE8及以下浏览器 
//     4.lastChild
//     5.parentNode 父节点 不会包括空白文本
//     6.previousSibling 前一个兄弟节点，有可能获得空白文本
//     6.a previousElementSibling 前一个兄弟元素，不包含文本 注意不兼容ie8
// **其余知识点：
//     在document中有一个属性body，它保存的是body的引用 var body = document.body
//     document.documentElement保存的是html根标签
//     document.querySelector(".box1 div") css选择器 只会找到第一个
//     document.querySelectorAll()  会找到所有符合规则的元素
//     removeChild()删除子节点
//     replaceChild()替换子节点
//     insertBefore()在子节点前插入新的节点
//     appendChild()
        var city = document.getElementById('city');
        var li = document.createElement('li');
        li.innerHTML='广州';
        city.appendChild(li);
//     createAttribute()创建属性节点
//     createElement()创建元素节点
//     createTextNode()创建文本节点
//     getAttribute()返回指定的属性值
//     setAttribute()把指定的属性设置或修改为指定的值