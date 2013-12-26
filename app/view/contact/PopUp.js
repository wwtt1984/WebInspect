Ext.define('WebInspect.view.contact.PopUp', {
    extend: 'Ext.Panel',
    xtype: 'PopUp',

    requires: [
    ],

    config: {
        modal: true,
        centered: false,
        hideOnMaskTap: true,

        ui: 'detail',

        // we always want the sheet to be 400px wide and to be as tall as the device allows
        width: '100%',
        top: '48%',
        bottom: 0,
        right: 0,

        defaults: {
            xtype : 'button',
            style: 'height: 20px;width:94%;margin:10px 3% 10px 3%;',
            cls   : 'demobtn',
            flex  : 1
        },
        layout: {
            type: 'vbox',
            align: 'middle'
        },
        items: [
        {
            text: '长号',
            id:  'fullnum'               
        },
        {
            text: '短号',
            id:  'shortnum'            
        },
        {
            text: '取消',
            id:  'numcancel'                
        }]
    },

    onDataSet: function(record) {
        Ext.getCmp('fullnum').setText(record.data.mobile);
        Ext.getCmp('shortnum').setText(record.data.pager);
    }
});
