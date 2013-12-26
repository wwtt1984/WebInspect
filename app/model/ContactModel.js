Ext.define('WebInspect.model.ContactModel',{
	extend: 'Ext.data.Model',
    config: {
       fields: [
            'samaccountname', 
            'userprincipalname',
            'displayname',
            'mobile',
            'telephonenumber',
            
            'pager',
            'mail',
            'description',
            'memberof'
        ]
    }
        
});