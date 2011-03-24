Ext.ns("Ext.plugin.touch.form");

Ext.plugin.touch.form.Speech = Ext.extend(Object, {
	init: function(cmp) {
		var me = this;

		cmp.renderTpl = me.getRenderTpl();
	},

	getRenderTpl: function() {
		return [
			'<tpl if="label">',
				'<div class="x-form-label"><span>{label}</span></div>',
			'</tpl>',
			'<tpl if="fieldEl">',
				'<div class="x-form-field-container"><input id="{inputId}" type="{inputType}" x-webkit-speech name="{name}" class="{fieldCls}"',
					'<tpl if="tabIndex">tabIndex="{tabIndex}" </tpl>',
					'<tpl if="placeHolder">placeholder="{placeHolder}" </tpl>',
					'<tpl if="style">style="{style}" </tpl>',
					'<tpl if="maxlength">maxlength="{maxlength}" </tpl>',
					'<tpl if="autoComplete">autocomplete="{autoComplete}" </tpl>',
					'<tpl if="autoCapitalize">autocapitalize="{autoCapitalize}" </tpl>',
					'<tpl if="autoCorrect">autocorrect="{autoCorrect}" </tpl> />',
					'<tpl if="useMask"><div class="x-field-mask"></div></tpl>',
				'</div>',
				'<tpl if="useClearIcon"><div class="x-field-clear-container"><div class="x-field-clear x-hidden-visibility">&#215;</div></div></tpl>',
			'</tpl>'
		];
	}
});

Ext.preg("form.speech", Ext.plugin.touch.form.Speech);