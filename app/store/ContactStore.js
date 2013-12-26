Ext.define('WebInspect.store.ContactStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WebInspect.model.ContactModel',

        
        proxy: {
            type: 'sk'
        }
    }
});