(function () {
    "use strict";
    angular
        .module("numberRenderProcess")
        .controller("NumberRenderCtrl",
            ["numberRenderResource",
                NumberRenderCtrl]);

    function NumberRenderCtrl(numberRenderResource) {
        var vm = this;

        vm.numberRenderResource = numberRenderResource;

        vm.submit = function () {
            numberRenderResource.get(
                { number: vm.numberRenderResource.enteredNumber },
                function (data) { vm.numberInWords = data; },
                { isArray: false });
        };
    }

}());
