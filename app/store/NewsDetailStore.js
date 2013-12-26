Ext.define('WebInspect.store.NewsDetailStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WebInspect.model.NewsDetailModel',
//        data: [
//            {"stitle":"浙江水利水电学院郭京等到我局嘉兴管理处","scontent":"水文化建设工作\r\n\r\n2013年12月3日上午，浙江水利水电学院党委委员郭京、浙江水文化研究教育中心常务副主任马燕燕等一行就《浙江通志》中《海塘卷》的编纂工作来我局嘉兴管理处交流。嘉兴管理处班子成员汪劲松主任、任火良书记等参加座谈。\r\n座谈会上，与会人员就各自在钱塘江水文化建设方面所做工作进行了交流。浙江水院党委委员郭京对我局近几年对水院工作的支持表示感谢，希望双方在钱塘江水文化上有更多的交流与合作，通过资源共享、优势互补，共同做好钱塘江水文化建设工作。嘉兴管理处处领导对郭京、马燕燕一行的到来表示欢迎，并表示将继续积极支持《海塘卷》的编纂工作，同时希望水院在钱塘江水文化建设、海塘工程建设等方面给予更多指导。\r\n会后，与会人员现场考察了钱塘江海盐段古海塘保护情况，并参观了海盐县博物馆。\r\n\r\n会议交流\r\n\r\n参观海盐博物馆\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n","simg":"resources/images/test/test1.JPG$resources/images/test/test1.JPG"}
//        ],
//        autoLoad: true
        proxy: {
            type: 'sk'
        }
    }
});