Ext.define('WebInspect.controller.MainControl',{
    extend: 'Ext.app.Controller',
    
    config:{
    	refs: {
    		main: 'main',
    		functionmain: 'main functionmain',
    		info: 'main info',
    		infofunction: '[itemId=infofunction]',
    		task: 'main info task',
    		news: 'main info news',
    		newspdf: 'info newspdf',
    		newsdetail: 'info newsdetail',
            newsback: '[itemId=newsback]',
    		firstlevel: 'main info firstlevel',
    		secondlevel: 'main info secondlevel',
    		contact: 'main info contact',
    		PopUp: 'main info PopUp',
    		numcancel: '#numcancel',
    		tide: 'info tide',
    		tidepop: 'info tidepop'
    	},
    	
    	control: {
    		main: {
    			initialize:'onMainInit'
    		},
    		'info':{
				initialize:'InfoInit',
				back: 'onInfoBackTap'
			},
			'#confirm': {
    			tap: 'onLoginTap'
    		},
    		'#noticelist': {
//    			itemtaphold: 'onNoticeListTapHold',
    			itemtap: 'onNoticeListTap'
    		},
    		'#functionlist': {
    			itemtap: 'onFunctionLsitTap'
    		},
    		
    		'infofunction': {
    			tap: 'onInfoFunctionBackTap'
    		},
    	
    		news: {
    			itemtap: 'onNewsListTap'
    		},
    		newsback: {
    			tap: 'onNewsBackTap'
    		},
    		
    		firstlevel: {
    			itemtap: 'onFirstLevelTap'
    		},
    		secondlevel: {
    			itemtap: 'onSecondLevelTap'
    		},
    		contact: {
    			itemtap: 'onContactItemTap'
    		},
    		numcancel: {
    			tap: 'onNumCancelTap'
    		},
    		tide: {
    			itemtap: 'onTideItemTap'
    		},
    		'#tideSegmentedButton': {
    			toggle: 'onTideSegmentedTap'
    		}
    	}
    },
    
    onMainInit: function(){

    	var store = Ext.getStore('UserStore');
    	if(store.getAllCount() != 0){
    		Ext.getCmp('name').setValue(store.getAt(0).data.uid);
    	    Ext.getCmp('password').setValue(store.getAt(0).data.password);
    	}
    },
    
    onBtnConfirm: function(){ ////////////////////重写Confirm////////////////////
	
		if(Ext.MessageBox) {
          var MB = Ext.MessageBox;
          Ext.apply(MB, {
                    YES: { text: '确认', itemId: 'yes', ui: 'action' },
					NO:  { text: '取消', itemId: 'no' },
					OK:  { text: '确定', itemId: 'ok' }
          });
          Ext.apply(MB, {
                    YESNO: [Ext.MessageBox.NO, Ext.MessageBox.YES]
          });
		}

	},
    
    onInfoBackTap: function(view, eOpts){

    	if(view.getActiveItem() == view.getAt(1)){
    		this.getInfofunction().show();
    	}
    },
    
    onLoginTap: function(){
    	var me = this;
    	
    	Ext.Viewport.setMasked({
       		xtype: 'loadmask',       		        
       		message: '登录中,请稍后...'
        });
        
    	WebInspect.app.user.uid = Ext.getCmp('name').getValue();
    	WebInspect.app.user.password = Ext.getCmp('password').getValue();

    	if(WebInspect.app.user.uid && WebInspect.app.user.password){
  		
    		var store = Ext.getStore('UserStore');
    		var results = WebInspect.app.user.uid + '$' + WebInspect.app.user.password + '$1234567$123';
    		
    	    if(store.getAllCount() == 0){
    	    	me.onUserCheck(store, results, me);
            }
            else{
            	if((WebInspect.app.user.uid == store.getAt(0).data.uid) && (WebInspect.app.user.password == store.getAt(0).data.password)){
            		WebInspect.app.user = store.getAt(0).data;
            		me.onTaskStoreLoad();
                    ///////////////////验证版本号
                    me.onCheckVesion();
            	}
            	else{            		
            		me.onUserCheck(store, results, me);
            	}
            }                          
    	}
    	else{
    		Ext.Viewport.setMasked(false);
    		Ext.Msg.alert('用户名和密码不能为空！');
    	}               
    },
    
    onUserCheck: function(store, results, me){
    	
    	var userstore = Ext.create('Ext.data.Store', {model: 'WebInspect.model.UserModel', proxy: {type: 'sk'}});
    	userstore.getProxy().setExtraParams({
            t: 'CheckUser',
            results: results
        });
    	    
    	userstore.load(function(records, operation, success) {

        	if((userstore.getAllCount() != 0) && (userstore.getAt(0).data.uid != null)){
        	     Ext.Viewport.setMasked({
       			     xtype: 'loadmask',       		        
       			     message: '验证成功,页面加载中...'
        	     });

        	     userstore.getAt(0).data.password = WebInspect.app.user.password;
        	     store.add(userstore.getAt(0));
        	     store.sync();
        	     WebInspect.app.user = userstore.getAt(0).data;
        	     me.onTaskStoreLoad();
        	}
        	else{
        	     Ext.Viewport.setMasked(false);
        	     Ext.Msg.alert('验证失败！请重新输入！');
        	}
        });
    },

    onCheckVesion:function()
    {
        var me = this;
        var store = Ext.getStore('VersionStore');
        store.getProxy().setExtraParams({
            t: 'CheckVersion'
        });
        store.load(function(records, operation, success){

            if(records[0].data.strThisVersion != WebInspect.app.user.version)
            {
                Ext.Msg.confirm("提示", "版本已更新，是否下载更新？",function(btn){
                    if(btn == 'yes'){
                        me.downLoad();
                    }
                });
            }


        }, this);

    },

    downLoad:function(){
        Ext.Viewport.setMasked({xtype:'loadmask',message:'下载中,请稍后...'});
        var fileTransfer = new FileTransfer();
        var uri = encodeURI("http://webservices.qgj.cn/htxcService/qgjapp.apk");
        var me = this;
        fileTransfer.download(
            uri,
            "file:///mnt/sdcard/dx_download/qgjapp.apk",
            function(entry) {
                Ext.Viewport.setMasked(false);
                window.plugins.ToastPlugin.ShowToast('下载完成！',3000);
                window.plugins.Install.installAPK("mnt/sdcard/dx_download/qgjapp.apk");
            },
            function(error) {
                Ext.Viewport.setMasked(false);
                window.plugins.ToastPlugin.ShowToast('下载失败！请检查网络！',3000);
            }
        );
    },


    onTaskStoreLoad: function(){
    	var me = this;
    	var store = Ext.getStore('TaskStore');
        store.getProxy().setExtraParams({
           	t: 'GetTaskListUser',
            results: WebInspect.app.user.uid
        });
        
        store.load(function(records, operation, success){
        	var pushstore = Ext.getStore('PushStore');
        	pushstore.getAt(0).data.num = store.getAllCount();
        	Ext.getCmp('noticelist').setStore(pushstore);
        	me.onWeatherStoreLoad();
        }, this);
    },
    
    onWeatherStoreLoad: function(){
    	var me = this;
    	var store = Ext.getStore('WeatherStore');

    	store.getProxy().setExtraParams({
            t: 'GetWeather',
            results: 'jsonp'
        });
           
        store.load(function(records, operation, success) {

        	Ext.Viewport.setMasked(false);

            Ext.getCmp('maintitle').onDataSet(store.getAt(0), WebInspect.app.user.name, WebInspect.app.user.mobile);
            Ext.getCmp('noticelist').addCls('hidden-disclosure-list');

    	    me.getMain().setActiveItem(me.getFunctionmain());
        }); 
    },
    
    //noticelist的长按事件，显示“删除”按钮。
    onNoticeListTapHold: function(list, index, target, record, e, eOpts){

    	list.lastTapHold = new Date();
    	Ext.getCmp('noticelist').removeCls('hidden-disclosure-list');        
    },
    
    onNoticeListTap: function(list, index, target, record, e, eOpts ){
    	
    	//判断是否为itemtap
    	if (!list.lastTapHold || (list.lastTapHold - new Date() > 1000)) {
    		
    		//判断是否为disclosure事件，若不是，则执行下列代码
    		if(!e.getTarget('.x-list-disclosure')){
    			//判断“删除”按钮是否已经显示，若已显示，则隐藏
    			if(Ext.getCmp('noticelist').getCls().length == 2){
                	Ext.getCmp('noticelist').addCls('hidden-disclosure-list');
    			}
    			else{
    				this.info = this.getInfo();
    				if(!this.info){
    					this.info = Ext.create('WebInspect.view.Info');
    				}
    	
    				this.getMain().add(this.info);
    				
    	    		switch(index){
    		    		case 0:
            	    		
           	            	this.task = Ext.create('WebInspect.view.Task');        	        

        	        		this.getInfo().push(this.task);	
        	        		
        	        		this.task = this.getTask();
        	        		if(!this.task){
            	        		this.task = Ext.create('WebInspect.view.Task');
        	        		}
        
        	        		this.getInfo().push(this.task);	
        
        	        		this.getMain().setActiveItem(this.getInfo());
        	        		
    		        		break;
    		    		case 1:

           	                this.onNewsStypeSet('NewsStore', 'GetInfoList', 'news$jsonp', '内网新闻');	  
    		        		break;
    	    		}
    			}
    		}
    	}
    	list.lastTapHold = null;
    },
    
    /////////////////////////////////////////////
    onFunctionLsitTap: function(list, index, target, record, e, eOpts ){

    	this.info = this.getInfo();
    	if(!this.info){
    		this.info = Ext.create('WebInspect.view.Info');
    	}
    	
    	this.getMain().add(this.info);
    	
    	if(record.data.name == '内网新闻'){

    		this.onNewsStypeSet('NewsStore', 'GetInfoList', 'news$jsonp', record.data.name);
    	}
    	else if(record.data.name == '综合信息'){

    		this.onNewsStypeSet('InfoStore', 'GetInfoList', 'info$jsonp', record.data.name);
    		
    	}
    	else if(record.data.name == '通知公告'){

    		this.onNewsStypeSet('NoticeStore', 'GetInfoList', 'notice$jsonp', record.data.name);

    	}
    	else if(record.data.name == '通讯录'){

    		var store = Ext.getStore('FirstLevelStore');

    		store.getProxy().setExtraParams({
            	t: 'GetContactsList',
            	results: '00$jsonp'
        	});

        	this.firstlevel = this.getFirstlevel();
        
        	Ext.Viewport.setMasked({
       	    	xtype: 'loadmask',       		        
       			message: '努力加载中...'
        	});
        
        	store.load(function(records, operation, success){
            	store.filter('ORG_Id_0', '0');
        		Ext.Viewport.setMasked(false); 
        	}, this);
        
        	if(!this.firstlevel){
            	this.firstlevel = Ext.create('WebInspect.view.contact.FirstLevel');
        	}
        	this.firstlevel.setTitle('钱塘江管理局');   

        	if(this.getInfo().getAt(1)){
        		this.getInfo().push(this.firstlevel);
        		this.getInfo().removeAt(1);
        	}
        	else{
        	    this.getInfo().push(this.firstlevel);
        	}
    		this.getMain().setActiveItem(this.getInfo());
    	}
    	else if(record.data.name == '潮位信息'){

    		var store = Ext.getStore('TideStore');

    		store.getProxy().setExtraParams({
            	t: 'GetTidal',
            	results: 'jsonp'
        	});
        
        	Ext.Viewport.setMasked({
       	    	xtype: 'loadmask',       		        
       			message: '努力加载中...'
        	});
        	
        	this.tide = this.getTide();
        	if(!this.tide){
        	    this.tide= Ext.create('WebInspect.view.tide.Tide');
        	}
        
        	store.load(function(records, operation, success){
        		store.clearFilter();
        		store.filter("sdate", Ext.Date.format(new Date(), 'Y-m-d').toString());
        		if(store.getAllCount() == store.getCount()){
        		    Ext.getCmp('tidetoolbar').hide();
        		    Ext.getCmp('tidepanel').show();
        		}
        		else{
        			Ext.getCmp('tidetoolbar').show();
        		    Ext.getCmp('tidepanel').hide();
        		}
        		Ext.Viewport.setMasked(false); 
        	}, this);
                	   	                
        	this.getInfo().push(this.tide);
    		this.getMain().setActiveItem(this.getInfo());
    	}
    	else{
    	
//    		var store = Ext.create('Ext.data.Store', {
//            	model: 'WebInspect.model.TestModel',
//
//            	data: [
//                	{ name: 'Tommy',   id: '01', date: '2013-10-27'  }
//            	]
//        	});
//        
//        	this.test = Ext.create('WebInspect.view.Test');        
//        		    	
//        	Ext.getCmp('test').setStore(store);
//
//        	this.getInfo().push(this.test);	
    		Ext.Msg.alert('此模块正在完善中！');
    	}
    },
    
    onNewsStypeSet: function(storename, t, results, title){


    	var store = Ext.getStore(storename);

    	store.getProxy().setExtraParams({
            t: t,
            results: results
        });
            
        Ext.Viewport.setMasked({
       		xtype: 'loadmask',       		        
       		message: '努力加载中...'
        });
            
        store.loadPage(1,function(records, operation, success) {Ext.Viewport.setMasked(false)});

        this.news = this.getNews();
        if(!this.news){
            this.news = Ext.create('WebInspect.view.news.News');
        }
        this.news.setStore(store);
            
        this.news.setTitle(title);
        
        this.getInfo().push(this.news);	
        
        this.getMain().setActiveItem(this.getInfo());
    },
    
    onInfoFunctionBackTap: function(){
    	this.getMain().setActiveItem(this.getFunctionmain());
    	this.getInfo().destroy();    	
    },
    
    onNewsListTap: function(list, index, target, record, e, eOpts ){
    	var store = Ext.getStore('NewsDetailStore');

    	store.getProxy().setExtraParams({
            t: 'GetInfo',
            results: record.data.stype + '$jsonp',
            sid: record.data.sid
        });

        if(record.data.simgtype == 'pdf'){
        	this.newspdf = this.getNewspdf();
        	if(!this.newspdf){
                this.newspdf = Ext.create('WebInspect.view.news.NewsPdf');
            }
        
            Ext.Viewport.setMasked({
       	        xtype: 'loadmask',       		        
       		    message: '努力加载中...'
            });
        
            store.load(function(records, operation, success){
                Ext.Viewport.setMasked(false);
                this.newspdf.setPdfUrl(store.getAt(0).data.simg);
            }, this);
            this.getInfofunction().hide();
            this.getInfo().push(this.newspdf);
        }
        else{
        	this.newsdetail = this.getNewsdetail();
        	if(!this.newsdetail){
                this.newsdetail = Ext.create('WebInspect.view.news.NewsDetail');
            }
        
            Ext.Viewport.setMasked({
       	        xtype: 'loadmask',       		        
       		    message: '努力加载中...'
            });
        
            store.load(function(records, operation, success){
                
                this.newsdetail.onDataSet(store.getAt(0));  
            }, this);
           this.getInfofunction().hide();
           this.getInfo().push(this.newsdetail);
           
        }
    },
    
    onNewsBackTap: function(){
    	this.getNewsdetail().onViewHide();
    },
    
    onContactLevelSet: function(storename, guid, view, viewname, title){
    	var store = Ext.getStore(storename);

    	store.getProxy().setExtraParams({
            t: 'GetContactsList',
            results: guid + '$jsonp'
        });
        
        Ext.Viewport.setMasked({
       	    xtype: 'loadmask',       		        
       		message: '努力加载中...'
        });
        
        store.load(function(records, operation, success){
            store.filter('ORG_Id_0', '0');
        	Ext.Viewport.setMasked(false); 
        }, this);
        
        if(!view){
            view = Ext.create('WebInspect.view.' + viewname);
        }
        view.setTitle(title);   

       	this.getInfofunction().hide();
        this.getInfo().push(view);
    },
    
    onFirstLevelTap: function(list, index, target, record, e, eOpts){
    	this.onContactLevelSet('SecondLevelStore', record.data.guid, this.getSecondlevel(), 'contact.SecondLevel', record.data.OUName);
    	
    },
    
    onSecondLevelTap: function(list, index, target, record, e, eOpts){

    	var store = Ext.getStore('ContactStore');

    	store.getProxy().setExtraParams({
            t: 'GetContactsList',
            results: record.data.guid + '$jsonp'
        });

        
        
        Ext.Viewport.setMasked({
       	    xtype: 'loadmask',       		        
       		message: '努力加载中...'
        });
        
        store.load(function(records, operation, success){
        	Ext.Viewport.setMasked(false); 
        }, this);
        
        this.contact = this.getContact();
        if(!this.contact){
            this.contact = Ext.create('WebInspect.view.contact.Contact');
        }
        this.contact.setTitle(record.data.OUName);   	                
        this.getInfo().push(this.contact);
    },
    
    onContactItemTap: function(list, index, target, record, e, eOpts){
    	if (this.popup) {
            this.popup.hide();
        }
        this.popup = Ext.create('WebInspect.view.contact.PopUp');
        if (Ext.os.deviceType.toLowerCase() == "phone") {
            this.popup.setWidth(null);
            this.popup.setHeight('40%');
            this.popup.setTop(null);
            this.popup.setLeft(0);
        }
        
        this.popup.onDataSet(record);
        if (!this.popup.getParent()) {
            Ext.Viewport.add(this.popup);
        }
        this.popup.show();
    },
    
    onNumCancelTap: function(){
    	this.popup.hide();
    },
    
    onTideItemTap: function(list, index, target, record, e, eOpts){
    	if (this.tidepop) {
            this.tidepop.hide();
        }
        this.tidepop = Ext.create('WebInspect.view.tide.TidePop');
        if (Ext.os.deviceType.toLowerCase() == "phone") {
            this.tidepop.setWidth(null);
            this.tidepop.setMinHeight('45%');
            this.tidepop.setTop(null);
            this.tidepop.setLeft(0);
        }
        
        this.tidepop.onDataSet(record);
        if (!this.tidepop.getParent()) {
            Ext.Viewport.add(this.tidepop);
        }
        this.tidepop.show();
    },
    
    onTideSegmentedTap: function(me, button, isPressed, eOpts){
    	var store = Ext.getStore('TideStore');
    	store.clearFilter();
    	
    	store.filter("sdate",me.getPressedButtons()[0].getText());
    }
});