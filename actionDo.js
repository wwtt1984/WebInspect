if (typeof cordova !== "undefined") {
	function testPlugin() {

        debugger;
		this._callback;
	}

	testPlugin.prototype.test = function(method, url , cb) {

        debugger;
		this._callback = cb;
		return cordova.exec(cb, null, 'transport', method, [url]);
	};

	cordova.addConstructor(function() {
		if (!window.plugins) {
			window.plugins = {};
		}
		window.plugins.testPlugin = new testPlugin();
	});
};


var getBottomData = function(method,url){
    var cb = function(result){
        show(result);
    };    
      
    window.plugins.testPlugin.test(method, url , cb); 
}