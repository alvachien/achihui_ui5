sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("ac.hihui.ui5.controller.App", {
        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
        }
    });
});
