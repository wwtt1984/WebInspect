Ext.define('WebInspect.view.Info', {
    extend: 'Ext.navigation.View',
    xtype: 'info',
    
    requires: [
    ],
    config: {

    	navigationBar: {
    		ui: 'light',
            items: [
            {
            	xtype: 'button',
            	itemId: 'infofunction',
            	ui: 'back',
            	text: '主页面'
            }]
        }
    }
});
