Ext.setup({
	onReady             : function() {
		var form = new Ext.form.FormPanel({
			fullscreen : true,
			items      : [
				{ xtype : "textfield", fieldLabel : "Speech Textfield", plugins : { ptype : "form.speech" } }
			]
		});
	}
});