angular.module('app')
	.controller('modalDirectiveController', function($modalInstance,title,body,params) {

    self = this;

    self.title = title;
    self.body = body;
    self.params = params;

    self.ok = function(){
		    $modalInstance.close("OK");
		}

    self.cancel = function () {
        $modalInstance.dismiss("CANCEL");
    };

});
