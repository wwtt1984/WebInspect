Ext.define('WebInspect.store.InfoStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WebInspect.model.NewsModel',

        pageSize: 10,
        clearOnPageLoad: false,
        
        proxy: {
            type: 'sk'
        }
    }
});