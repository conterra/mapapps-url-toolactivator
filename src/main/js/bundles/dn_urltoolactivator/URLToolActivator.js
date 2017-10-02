//Mam kann ein Tool übergeben

define([
    "dojo/_base/declare",
    "dojo/_base/array"
], function (declare, array) {
    return declare([], {

        decodeURLParameter: function (params) {
            var activeTool = params.activeTool;
            if (!activeTool) {
                return;
            }

            array.forEach(
                    this._tools, function (tool) {
                        if (tool.id === activeTool) {
                            tool.set("active", true);
                        }
                    });

        }

    });
});


