angular.module('app')
	.controller('modalController', function($modalInstance,selectedItem,translateService,usersDataService,notificationService) {
    var self = this;
    debugger;

		self.translateService = translateService;
    self.selectedItem = angular.copy(selectedItem);

    self.save = function () {
      debugger;
			usersDataService.updateUser(self.selectedItem).then(
				function(response){
					debugger;
					$modalInstance.close(response);
				},function(error){
					debugger;
					notificationService.showError("Gebruikers", "Gebruiker niet opgeslaan");
				});
    };

    self.cancel = function () {
      debugger;
      $modalInstance.dismiss('cancel');
    };

	});
