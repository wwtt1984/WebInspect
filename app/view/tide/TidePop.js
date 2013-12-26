Ext.define('WebInspect.view.tide.TidePop', {
    extend: 'Ext.Panel',
    xtype: 'tidepop',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        modal: true,
        centered: false,
        hideOnMaskTap: true,

        ui: 'detail',

        // we always want the sheet to be 400px wide and to be as tall as the device allows
        width: '100%',
//        top: '48%',
        
        bottom: 0,
        right: 0,
        padding: '10px 0 0 0',

        tpl: Ext.create('Ext.XTemplate',
        '<div style="margin:10px 5px 5px 5px;border:#ccc solid 1px;">',
          '<div style="min-height:2em;line-height:2em;font-size:1em;width:100%; text-align:center;border-bottom:#ccc solid 1px;">{sname}({sdate})</div>',
          '<div style="min-height:2em;line-height:2em;font-size:1em; text-align:center;border-bottom:#ccc solid 1px;">',
              '<div style="width:34%; float:left;">时间</div>',
              '<div style="width:33%; float:left;">{stime}</div>',
              '<div style="width:33%; float:left;">{stime3}</div>',
          '</div>',
          '<div style="min-height:2em;clear:both;line-height:2em;font-size:1em; text-align:center;border-bottom:#ccc solid 1px;">',
              '<div style="width:34%; float:left;">高潮位</div>',
              '<div style="width:33%; float:left;;">{stide}</div>',
              '<div style="width:33%; float:left;">{stide3}</div>',
          '</div>',
          '<div style="min-height:2em;clear:both;line-height:2em;font-size:1em; text-align:center;border-bottom:#ccc solid 1px;">',
              '<div style="width:34%; float:left;">涌高</div>',
              '<div style="width:33%; float:left;">{sheight}</div>',
              '<div style="width:33%; float:left;">{sheight3}</div>',
          '</div>',
          '<div style="min-height:2em;clear:both;line-height:2em;font-size:1em; text-align:center;">',
              '<div style="width:34%; float:left;">观赏等级</div>',
              '<div style="width:33%; float:left;">{sgrade}</div>',
              '<div style="width:33%; float:left;">{sgrade3}</div>',
          '</div>',
        '</div>'
        )
    },

    onDataSet: function(record) {
        this.setData(record.data);
    }
});
