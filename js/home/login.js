define(['jquery', 'jqueryCookie','nprogress','loading'], function ($, undefined,nprogress,undefined) {

    // 登录校验
    (function () {
        
        // 如果有PHPSESSID这个cookie,证明登录过,跳到首页
        if ($.cookie('PHPSESSID')) {
            
            location.href = '/';
        }
    })();

    // 表单提交
    (function () {
        $('#login-form').on('submit', function () {

            $.ajax({
                type: 'POST',
                url: '/v6/login',
                data: $(this).serialize(),
                success: function (data) {
                    if (data.code == 200) {
                        // 把返回的用户信息保存到cookie中,供其它页面使用
                        // 要设置path属性,否则默认为当前路径,其它页面无法使用
                        $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
                        location.href = '/';
                    }
                },
                error: function () {
                    alert(arguments[2]);
                }
            });
            return false;
        });
    })();
    // 页面所有代码执行完毕，进度条结束
	nprogress.done();

});