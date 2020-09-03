/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"worklist/app/BusinessITProject-WorklistApp/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
