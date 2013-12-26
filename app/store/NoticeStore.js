Ext.define('WebInspect.store.NoticeStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WebInspect.model.NewsModel',
//        data:[
//            {"stitle":"浙江水利水电学院郭京等到我局嘉兴管理处交流水文化建设工作","slink":"http://web.qgj.cn/basicinfo/infoshow.aspx?c=25$d=dd4cc82b-6aa4-4775-b84c-46efec26368d","sdescription":"","spubDate":"2013-12-4 17:24:00","sauthor":"局办","stype":"news","simg":"resources/images/test/test1.JPG","sid":"1"},
//            {"stitle":"我局召开12月工作例会","slink":"http://web.qgj.cn/basicinfo/infoshow.aspx?c=25$d=4400bd0c-e2fc-44d6-8df2-e1457056285e","sdescription":"","spubDate":"2013-12-3 11:02:00","sauthor":"局办","stype":"news","simg":"resources/images/test/test1.JPG","sid":"2"},
//            {"stitle":"徐有成局长参加中国大运河水利遗产保护与利用战略论坛","slink":"http://web.qgj.cn/basicinfo/infoshow.aspx?c=25$d=51ececb5-0aaa-43bb-b39b-6faed409171a","sdescription":"","spubDate":"2013-12-3 10:38:00","sauthor":"局办","stype":"news","simg":"resources/images/test/test1.JPG","sid":"3"},
//            {"stitle":"局团员青年赴上海开展“科技水利”主题参观活动","slink":"http://web.qgj.cn/basicinfo/infoshow.aspx?c=25$d=2bc4c209-de18-4281-812a-581a137f2433","sdescription":"","spubDate":"2013-12-2 16:21:00","sauthor":"局办","stype":"news","simg":"resources/images/test/test1.JPG","sid":"4"},
//            {"stitle":" 局部分副科级岗位竞争上岗笔试工作顺利举行","slink":"http://web.qgj.cn/basicinfo/infoshow.aspx?c=25$d=96a76d29-6539-43d5-b538-970d6c202df5","sdescription":"","spubDate":"2013-12-2 15:43:00","sauthor":"局办","stype":"news","simg":"resources/images/test/test1.JPG","sid":"5"}
//        ],
//                
//        autoLoad: true

        pageSize: 10,
        clearOnPageLoad: false,
        
        proxy: {
            type: 'sk'
        }
    }
});