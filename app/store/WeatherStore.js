Ext.define('WebInspect.store.WeatherStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WebInspect.model.WeatherModel',

        
        proxy: {
            type: 'sk'
        }
    }
});