Ext.define('WebInspect.store.UserStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WebInspect.model.UserModel',
        autoLoad: true,
        proxy: {
      
            type: 'localstorage',
            id  : 'user'
        }
    }
});