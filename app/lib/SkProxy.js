Ext.define('Ext.data.proxy.SkProxy', {
    extend: 'Ext.data.proxy.JsonP',
    alias: 'proxy.sk',
		
    config: {
        //url: 'http://localhost/htxcService/Data_Ht.ashx',
		//url: 'http://61.175.134.26:8090/htxcService/Data_Ht.ashx',
		url: 'http://bpm.qgj.cn/test/Data.ashx',
//    	url: 'http://webservices.qgj.cn/wt_test/Data.ashx',
        callbackKey: 'callback'
    },
	
    buildRequest: function(operation) {
    	
        var request = this.callParent(arguments);
        return request;
    }
});