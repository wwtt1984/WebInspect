Ext.define('WebInspect.model.UserModel',{
	extend: 'Ext.data.Model',
    config: {
        fields: [
            'id',
            'uid',
            'name',
            'password',
            'mobile',
            'tel',
            
            'sms',
            'mail',
            'sexy',
            'ITEM_Id',
            'DeptId',
            
            'rtxsession'
        ],
        
        proxy: {
            type: 'localstorage',
            id: 'user'
        }
    }
        
});