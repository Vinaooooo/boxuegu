// jqueryCookie是difine定义的模块,但像jQuery这种插件
// 他们提供的功能都放置到了jQuery原型或自己身上,并没有返回东西,所以要使用这些功能,必须依赖jQuery
define(['jquery', 'jqueryCookie'], function ($, undefined) {

    // // 判断用户有没有登录过,没有则跳转到登录页
    // var cookieArr = document.cookie.split('; ');
    // var isLogin = false;
    // // 必须所有cookie都没有PHPSESSID,才算没有登录过,跳到登录页面
    // for(var i =0; i<cookieArr.length; i++){
    //     // 存在,证明登录过,结束循环
    //     if(cookieArr[i].indexOf('PHPSESSID=') === 0){
    //         isLogin = true;
    //         break;
    //     }
    // }
    // // 如果没有登录过,打开登录页面
    // !isLogin && (location.href = '/html/home/login.html');

    // 登录校验
    (function () {
        if (!$.cookie('PHPSESSID')) {
            location.href = '/html/home/login.html';
        }
    })();

    // ajax-loading
    (function(){
        $(document).on('ajaxStart',function(){
            $('.overlay').show();
        }).on('ajaxStop',function(){
            $('.overlay').hide();
        });
    })();

    // 对外暴露一个对象
    return {
        // 把页面中的查询字符串转换为对象的形式
        parseSearch:function(searchName){
            var searchArr = location.search;
            var searchObj = {};
            for(var i=0;i<searchArr.length;i++){
                tempArr = searchArr[i].split('=');
                searchObj[tempArr[0]] = tempArr[1];
            }

            return (searchName == null)? searchObj: searchObj[searchName];
        }
    }

})