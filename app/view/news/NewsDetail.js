Ext.define('WebInspect.view.news.NewsDetail',{

	extend: 'Ext.Panel',
	xtype: 'newsdetail',
//	id: 'newsdetail',
	requires: [
	    'Ext.XTemplate'
	],
	
	config: {
		title: '详细新闻',
		scrollable: {
    		direction: 'vertical',
    		directionLock: true
		},
		itemId: 'newsdetail',
		
		style: 'background:#f7f7f7; padding: 10px;',
		
		tpl: Ext.create('Ext.XTemplate',
		    '<div style="min-height:2.2em;width:100%;font-size:18px;font-weight:bold; line-height:1.6em;text-justify:newspaper;margin-bottm:0.3em;">{stitle}</div>',
		    '{[this.getImg(values)]}',
		    '<div style="min-height:20em;width:100%;line-height:1.6em;text-align:justify;text-justify:distribute-all-lines;text-align-last:justify;-moz-text-align-last:justify;-webkit-text-align-last:justify;">{[this.getContent(values)]}</div>',
		    {
		    	getImg: function(values){
		    	    var img = [];
		    	    var string = '';
		    	    img = values.simg.split('$');
		    	    
		    	    if(img.length > 0){
		    	    	if(img[0].toLowerCase().indexOf(".jpg") > 0){
		    			    string += '<img src="' + img[0] + '" style="width:100%; height: auto; padding:3px; border:1px #f7f7f7 solid;background:white;" id="' + this.getLinkId(values) + '"/>';
		    			
		    		        string += '<div style="min-height: 1.8em; width: 100%; font-size:12px; font-weight: normal; text-align: right; color: #666;padding:0 8px 5px 8px;"><div style="float: right;padding: 0.2em 0 0 0.3em;">张图片</div><div style="font-size: 16px;color: #000; font-weight: bold;float: right;">' + img.length + '</div><div style="float: right;padding: 0.2em 0.3em 0 0;">共计</div></div>';
		    	    	}
		    	    }
		    		return string;
		    	},
		    	
		    	getContent: function(values){

		    		var content = [];
		    		content = values.scontent.split('\r\n');
		    		var string = '';
		    		
		    		if(content.length > 0){
		    		    for(var i=0; i<content.length; i++){
		    		    	if(content[i] != "" ){
		    			        string += '<p style="text-indent:2em;font-size:16px;-webkit-margin-after: 0px;margin-top:0.5em;">' + content[i] + '</p>';		    			
		    		    	}
		    		    }
		    		}
		    		Ext.Viewport.setMasked(false);
		    		return string;
		    	},
		    	getLinkId: function(values) {
//		    		debugger;
					var result = Ext.id();
					Ext.Function.defer(this.addListener, 1, this, [result,values]);
					return result;
				},
				addListener: function(id,values) {	
//					debugger;
				    var me = this;
					Ext.get(id).on('tap', function(e){
						me.addImg(values);
					})//////增加add图片的事件
				},
				addImg:function(values){

					Ext.ComponentQuery.query('#newsdetail')[0].onImageShow(values);
//					Ext.getCmp('newsdetail').onImageShow(values);
	
				}
		    }
		)
	},
	
	onDataSet: function(record){
		this.setData({stitle: record.data.stitle, scontent: record.data.scontent, simg: record.data.simg});
	},
	
	onImageShow: function(values){

		this.view = this.down('newsimg');
		if(!this.view){
    		this.view = Ext.create('WebInspect.view.news.NewsImg');
		}	
			
	    this.view.onImgDataSet(values);
		
		if (!this.view.getParent()) {
            Ext.Viewport.add(this.view);
        } 				       
        this.view.show();
	},
	
	onViewHide: function(){

		this.view.hide();
	}
});