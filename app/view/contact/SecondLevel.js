Ext.define('WebInspect.view.contact.SecondLevel', {
    extend: 'Ext.List',
    xtype: 'secondlevel',
     
    config: {
    	
    	title: '钱塘江管理局',

    	store: 'SecondLevelStore',            	    
	    
	    loadingText: '努力加载中...',
	    scrollToTopOnRefresh: false,
	    
	    ui: 'round',
        
        emptyText: '<p class="no-searches">没有符合要求的记录</p>',
	      
        itemTpl: [
            '<div>{OUName}</div>'            
        ]
    }
});
