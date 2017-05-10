sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "ac/hihui/ui5/controller/HelloDialog"
], function (UIComponent, JSONModel, HelloDialog) {
    "use strict";
    return UIComponent.extend("ac.hihui.ui5.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data model
            var oData = {
                recipient: {
                    name: "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // Convert by the manifest!
            // // set i18n model
            // var i18nModel = new ResourceModel({
            //     bundleName: "ac.hihui.ui5.i18n.i18n"
            // });
            // this.setModel(i18nModel, "i18n");

            // Dialog
            this._helloDialog = new HelloDialog(this.getAggregation("rootControl"));

            // create the views based on the url/hash
			this.getRouter().initialize();
        },
        openHelloDialog: function() {
            this._helloDialog.open();
        }
    });
});
