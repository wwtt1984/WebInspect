Ext.define('WebInspect.store.FirstLevelStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WebInspect.model.LevelModel',

//        pageSize: 10,
//        clearOnPageLoad: false,
        
        proxy: {
            type: 'sk'
        }
    }
});