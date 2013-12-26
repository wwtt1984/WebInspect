Ext.define('WebInspect.model.LevelModel',{
	extend: 'Ext.data.Model',
    config: {
       fields: [
            'OUID', 
            'ParentOUID',
            'OUName',
            'OULevel',
            'SID',
            
            'Code',
            'ORG_Id',
            'guid',
            'ORG_Id_0',
            'RSID'
        ]
    }
        
});