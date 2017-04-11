define(['jquery'], function ($) {

	function Header(options) {

		// 默认配置
		var _default = {
			logoutSelector: '#logout',
			logoutApi: '/v6/logout',
			logoutMethod: 'post',
			logoutGo: '/html/home/login.html'
		};

		// 合并用户传入的配置,得到最终配置
		util.extend(_default,options);

		// 把合并后最终的参数添加到this身上
		this.$logoutBtn = $(_default.logoutSelector);
		this.logoutApi = _default.logoutApi;
		this.logoutMethod = _default.logoutMethod;
		this.logoutGo =  _default.logoutGo;
	}

	Header.prototype = {
		// 退出登录
		logout: function(){
			var self = this;
			this.$logoutBtn.on('click',function(){
				$[self.logoutMethod](self.logoutApi,function(data){
					data.code == 200 && (location.href = self.logoutGo);
				})
			})
		}
	}
	return Header;

	// $('#logout').on('click', function () {
	// 	$.post('/v6/logout', function (data) {
	// 		data.code == 200 && (location.href = '/html/home/login.html');
	// 	});
	// });
});