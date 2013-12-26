Ext.define('WebInspect.view.Main', {
//    extend: 'Ext.navigation.View',
	extend: 'Ext.Container',
    xtype: 'main',
    
    requires: [
        'WebInspect.view.Login',
        'WebInspect.view.Function'
//        'WebInspect.view.Info'
    ],
    config: {

//    	navigationBar: {
//    		ui: 'light'
//            
//        },
    	layout: 'card',
    
//    	style: 'background:url(resources/images/bg1.jpg);',

        items: [
            {
                xclass: 'WebInspect.view.Login'
            },
            {
            	xclass: 'WebInspect.view.Function'
            }
//            {
//            	xclass: 'WebInspect.view.Info'
//            }
        ]
    }
});
