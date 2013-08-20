window.app.factory("Global", function(){

	var current_user = window.user;

	return {
		currentUser: function() {
			return current_user;
		},
		isSignedIn: function() {
			return !!current_user;
		}
	};

	// var _this = this;
 //    _this._data = { user: window.user, authenticated: !!window.user };

	// return _this._data;
});