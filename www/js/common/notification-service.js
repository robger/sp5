angular.module('app')
	.service('notificationService', function(toastr) {
    self = this;

		self.showSuccess = function(title, body){
			toastr.success(body,title);
		}

		self.showError = function(title, body){
			toastr.error(body,title);
		}

});
