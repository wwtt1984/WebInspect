Ext.define('WebInspect.view.Test', {
    extend: 'Ext.List',
    xtype: 'test',
    id: 'test',
    
    requires: [
    ],
    
    config: {
    	
    	title: '测试',

        style: 'background: #fff;',
//    	store: 'TestStore',            	    
            	    
        itemTpl:[
    	    '<div style="font-size:18px; font-weight: bold; line-height: 1.6em;">{name}</div>',
    	    '<div style="font-size:15px; line-height: 1.6em;">时间:{date}</div>'
        ]    	
    }
});