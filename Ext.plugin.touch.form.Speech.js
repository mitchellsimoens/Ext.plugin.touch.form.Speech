Ext.ns("Ext.plugin.touch.form");

Ext.plugin.touch.form.Speech = Ext.extend(Object, {
	init: function(cmp) {
		var me = this;

		cmp.on("afterrender", me.onAfterRender, me);
	},

	onAfterRender: function(cmp) {
		cmp.fieldEl.set({
			"x-webkit-speech": ""
		});
	}
});

Ext.preg("form.speech", Ext.plugin.touch.form.Speech);