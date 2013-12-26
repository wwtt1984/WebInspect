Ext.define('WebInspect.view.contact.FirstLevel', {
    extend: 'Ext.List',
    xtype: 'firstlevel',
    
    requires: [
        'Ext.plugin.ListPaging',
        'Ext.plugin.PullRefresh'
    ],
    
    config: {
    	
    	title: '钱塘江管理局',

    	store: 'FirstLevelStore',            	    
	    
	    loadingText: '努力加载中...',
	    scrollToTopOnRefresh: false,
	    
	    ui: 'round',
	    
        items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            ui: 'light',

            items: [
            { 
                xtype: 'spacer' 
            },
            {
                xtype: 'searchfield',
                placeHolder: 'Search...',
                listeners: {
                    scope: this
//                    clearicontap: this.onSearchClearIconTap,
//                    keyup: this.onSearchKeyUp
                    }
                },
                { xtype: 'spacer' }
            ]
        }],
        
        emptyText: '<p class="no-searches">没有符合要求的记录</p>',
	      
        itemTpl: [
            '<div>{OUName}</div>'            
        ]
    }
});
