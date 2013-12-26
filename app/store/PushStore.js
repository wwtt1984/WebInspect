Ext.define('WebInspect.store.PushStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WebInspect.model.PushModel',
        data:[
            {id: '01', text: '待办事项', content:'轻松管理', img: 'resources/images/notice/notice.png', num: '0'},
    		{id: '02', text: '内网新闻', content:'内网新闻', img: 'resources/images/notice/news.png', num: '0'}
        ]
                
//        autoLoad: true
    }
});