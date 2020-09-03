/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"worklist/app/BusinessITProject-WorklistApp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});