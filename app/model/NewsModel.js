Ext.define('WebInspect.model.NewsModel',{
	extend: 'Ext.data.Model',
    config: {
       fields: [
            'sid', 
            'stitle',
            'slink',
            'sdescription',
            'spubdate',
            
            'stype',
            'sauthor',
            'simg',
            'simgtype'
        ]
    }
        
});