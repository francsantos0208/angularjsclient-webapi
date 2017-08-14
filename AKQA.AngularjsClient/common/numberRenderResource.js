(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("numberRenderResource",
            ["$resource",
                "appSettings",
                numberRenderResource])

    function numberRenderResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "/api/v1/numbers/:number/numberinwords");



    }
}());

