Ext.define('WebInspect.store.TideStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WebInspect.model.TideModel',
        
//        data:[
//            {sname: '盐官', stime:'9:00',stide:'3.00', stime3:'11:',stide3:'3', sdate: '2013-12-16'},
//    		{sname: '萧山观潮城', stime:'9:00',stide:'3.00', stime3:'11:',stide3:'3', sdate: '2013-12-16'},
//    		{sname: '通知公告', stime:'9:00',stide:'3.00', stime3:'11:',stide3:'3', sdate: '2013-12-16'},
//    		{sname: '水情信息', stime:'9:00',stide:'3.00', stime3:'11:',stide3:'3', sdate: '2013-12-16'},
//    		{sname: '雨情信息', stime:'9:00',stide:'3.00', stime3:'11:',stide3:'3', sdate: '2013-12-16'},
//    		{sname: '工情信息', stime:'9:00',stide:'3.00', stime3:'11:',stide3:'3', sdate: '2013-12-16'},
//    		{sname: '通讯录', stime:'9:00',stide:'3.00', stime3:'11:',stide3:'3', sdate: '2013-12-16'},
//    		{sname: '潮位信息', stime:'9:00',stide:'3.00', stime3:'11:',stide3:'3', sdate: '2013-12-16'},
//    		
//    		{sname: '盐官', stime:'12:00',stide:'3.00', stime3:'21:',stide3:'3', sdate: '2013-12-17'},
//    		{sname: '萧山观潮城', stime:'12:00',stide:'3.00', stime3:'21:',stide3:'3', sdate: '2013-12-17'},
//    		{sname: '通知公告', stime:'12:00',stide:'3.00', stime3:'21:',stide3:'3', sdate: '2013-12-17'},
//    		{sname: '水情信息', stime:'12:00',stide:'3.00', stime3:'21:',stide3:'3', sdate: '2013-12-17'},
//    		{sname: '雨情信息', stime:'12:00',stide:'3.00', stime3:'21:',stide3:'3', sdate: '2013-12-17'},
//    		{sname: '工情信息', stime:'12:00',stide:'3.00', stime3:'21:',stide3:'3', sdate: '2013-12-17'},
//    		{sname: '通讯录', stime:'12:00',stide:'3.00', stime3:'21:',stide3:'3', sdate: '2013-12-17'},
//    		{sname: '潮位信息', stime:'12:00',stide:'3.00', stime3:'21',stide3:'3', sdate: '2013-12-17'},
//        ],
        
        proxy: {
            type: 'sk'
        }
    }
});