Ext.define('WebInspect.view.news.NewsPdf',{

	extend: 'Ext.ux.panel.PDF',
	xtype: 'newspdf',
	
	requires: [
	    'Ext.XTemplate'
	],
	
	config: {
		title: '详细新闻',
//		fullscreen: true,
        layout    : 'fit',
        src       : 'http://cdn.mozilla.net/pdfjs/tracemonkey.pdf', // URL to the PDF - Same Domain or Server with CORS Support
        style     : {
            backgroundColor: '#333'
        }
	},
	
	setPdfUrl:function(url)
	{
		this.setSrc(url);
	}
});