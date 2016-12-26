angular.module('app')
	.controller('modalController', function($modalInstance,title,body) {

    self = this;

    self.title = title;
    self.body = body;

    self.ok = function(){
		    $modalInstance.close("OK");
		}

    self.cancel = function () {
        $modalInstance.dismiss("CANCEL");
    };

});
