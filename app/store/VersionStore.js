Ext.define('WebInspect.store.VersionStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'WebInspect.model.VersionModel'
    },
    proxy: {
        type: 'sk'
    }
});