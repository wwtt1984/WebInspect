Ext.define('WebInspect.view.tide.Tide', {
    extend: 'Ext.List',
    xtype: 'tide',
    
    requires: [
        'Ext.SegmentedButton'
    ],
    
    config: {
    	
    	title: '潮位信息',
	    
	    loadingText: '努力加载中...',
	    scrollToTopOnRefresh: false,
	    
	    cls: 'tidelist',
	    store: 'TideStore',
        
        emptyText: '<p class="no-searches">没有符合要求的记录</p>',
	      
        itemTpl: [
            '<div style="min-height:4em;width:100%; font-size:18px;line-height:2em;text-align:center;padding:0;margin:0;">',
                '<div style="height:100%; width:40%; float: left;line-height:4em;">{sname}</div>',
                '<div style="height:100%; width:60%; float: left;">',
                  '<div style="height:50%; width:100%;clear:both;">',
                    '<div style="height:100%; width:50%;border-left:1px #ccc solid;float:left;">{stime}</div>',
                    '<div style="height:100%; width:50%;float:left;">{stide}</div>',
                  '</div>',
                  '<div style="height:50%; width:100%;clear:both;">',
                    '<div style="height:100%; width:50%;border-left:1px #ccc solid;border-top:1px #ccc solid;float:left;">{stime3}</div>',
                    '<div style="height:100%; width:50%;border-top:1px #ccc solid;float:left;">{stide3}</div>',
                  '</div>',
                '</div>',
//                '<div style="height:100%; width:30%; float: left;">',
//                    '<div style="height:50%;border-bottom:1px #ccc solid;">{stime}</div>',
//                    '<div style="height:50%;">{stime3}</div>',
//                '</div>',
//                '<div style="height:100%; width:30%; float: right;">',
//                    '<div style="height:50%;border-bottom:1px #ccc solid;">{stide}</div>',
//                    '<div style="height:50%;">{stide3}</div>',
//                '</div>',
            '</div>'
        ],
        
        items: [
        {
        	docked: 'top',
            xtype: 'panel',
            cls: 'tidelist-header',
            html: '<div style="width:40%;height:100%;float:left;">观潮点</div><div style="width:30%;height:100%;float:left;">时间</div><div style="width:30%;height:100%;float:left;">高潮位</div>'
        },
        {
        	docked: 'bottom',
            ui: 'gray',
            id: 'tidetoolbar',
            xtype: 'toolbar',
            style: 'border-top: 1px #ccc solid;',
            items:[
            {
            	width: '100%',
				padding: '0 5 0 0',
				defaults: {
				    flex: 1
				},
				xtype: 'segmentedbutton',
				id:'tideSegmentedButton',
				allowDepress: false,
				allowMultiple: false,
				items: [
            	{
                	text: Ext.Date.format(new Date(), 'Y-m-d'),
                	pressed: true
            	},
            	{
                	text: Ext.Date.format(Ext.Date.add(new Date(), Ext.Date.DAY, +1), 'Y-m-d')
            	}]
			}]
        },
        {
        	docked: 'bottom',
            cls: 'tidetime',
            xtype: 'panel',
            id: 'tidepanel',
//            hidden: true,
            html: '<div style="width:100%;height:100%;float:left;">日期：' + Ext.Date.format(new Date(), 'Y-m-d') + '</div>'
        }]
    }
});