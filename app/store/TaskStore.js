Ext.define('WebInspect.store.TaskStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WebInspect.model.TaskModel',
//        data:[
//            {"StepID":"5709","TaskID":"743","ProcessName":"bf5","NodeName":"中转科室负责人","OwnerAccount":"xgh","ReceiveAt":"2013-7-23 14:19:41","Comments":"","TimeoutDeadline":"","CreateAt":"2013-7-23 14:19:07","Description":"","State":"Running ","SerialNum":"REQ2013070033","AgentAccount":""},
//            {"StepID":"9386","TaskID":"1086","ProcessName":"水政流程","NodeName":"呈批表承办人打印","OwnerAccount":"xgh","ReceiveAt":"2013-11-4 20:01:00","Comments":"","TimeoutDeadline":"","CreateAt":"2013-11-4 19:53:37","Description":"","State":"Running ","SerialNum":"HZX201311040009","AgentAccount":""},
//            {"StepID":"9640","TaskID":"1117","ProcessName":"水政流程","NodeName":"告知书文书承办人","OwnerAccount":"xgh","ReceiveAt":"2013-11-14 9:33:51","Comments":"","TimeoutDeadline":"","CreateAt":"2013-11-14 9:25:22","Description":"","State":"Running ","SerialNum":"HZX201311140001","AgentAccount":""},
//            {"StepID":"9544","TaskID":"1107","ProcessName":"水政流程","NodeName":"水管承办人2","OwnerAccount":"xgh","ReceiveAt":"2013-11-7 16:38:40","Comments":"","TimeoutDeadline":"","CreateAt":"2013-11-7 16:33:34","Description":"","State":"Running ","SerialNum":"HZX201311070001","AgentAccount":""}
//        ],
                
//        autoLoad: true

        proxy: {
            type: 'sk'
        }
    }
});