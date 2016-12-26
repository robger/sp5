angular.module('app')
	.controller('modalController', function($modalInstance,selectedItem,translateService,usersDataService,notificationService) {
    var self = this;

		self.translateService = translateService;
    self.selectedItem = angular.copy(selectedItem);

    self.save = function () {
			usersDataService.updateUser(self.selectedItem).then(
				function(response){
					$modalInstance.close(response);
				},function(error){
					notificationService.showError("Gebruikers", "Gebruiker niet opgeslaan");
				});
    };

		self.add = function(){
			usersDataService.addUser(self.selectedItem).then(
				function(response){
					$modalInstance.close(response);
				},function(error){
					notificationService.showError("Gebruikers", "Gebruiker niet opgeslaan");
				});
		}

		self.delete = function(){
			usersDataService.deleteUser(self.selectedItem).then(
				function(response){
					notificationService.showSuccess("Gebruikers", "Gebruiker werd op inactief geplaatst (TODO: nog verwijderen uit grid)");
					$modalInstance.close(response);
				},function(error){
					notificationService.showError("Gebruikers", "Gebruiker niet opgeslaan");
				});
		}

    self.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

	});
