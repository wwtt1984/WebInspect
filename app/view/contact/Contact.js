Ext.define('WebInspect.view.contact.Contact', {
    extend: 'Ext.List',
    xtype: 'contact',
    
    requires: [
        'Ext.field.Search'
    ],
     
    config: {
    	
    	title: '钱塘江管理局',

    	store: 'ContactStore',   
    	cls: 'contact-list',
	    
	    loadingText: '努力加载中...',
	    scrollToTopOnRefresh: false,
	    
//	    ui: 'round',
        
        emptyText: '<p class="no-searches">没有符合要求的记录</p>',
	      
        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="contact-list-item">',
            '    <img class="photo" src="{[this.getImg(values)]}" />',
            '    <h1>{displayname}</h1>',
            '    <span>{mobile}({pager})&nbsp;</span>',
            '    <p>{telephonenumber}</p>',
            '</div>',
            {
	        	getImg: function(values){
//	        		debugger;
	        		var string = '';

	        		if(values.description == '女'){
	        		    string += 'resources/images/woman.png';
	        		}
	        		else{
	        			string += 'resources/images/man.png';
	        		}
	        		return string;
	        	}
            }            
        )
    }
});
