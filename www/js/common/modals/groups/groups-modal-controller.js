angular.module('app')
	.controller('groupModalController', function($modalInstance,selectedItem,translateService,usersDataService,notificationService,modalService) {
    var self = this;

		self.translateService = translateService;
    self.selectedItem = angular.copy(selectedItem);

    // self.save = function () {
		// 	usersDataService.updateUser(self.selectedItem).then(
		// 		function(result){
		// 			result.type = 3;
		// 			$modalInstance.close(result);
		// 		},function(error){
		// 			notificationService.showError("Gebruikers", "Gebruiker niet opgeslaan");
		// 		});
    // };

		self.add = function(){
			usersDataService.addUser(self.selectedItem).then(
				function(result){
					$modalInstance.close(result);
				},function(error){
					notificationService.showError("Gebruikers", "Gebruiker niet opgeslaan");
				});
		}
		//
		// self.delete = function(){
		// 	var confirmModal = modalService.confirm("Gebruiker verwijderen","Ben je zeker dat je de geselecteerde gebruiker wil verwijderen?");
		//
		// 	confirmModal.result.then(
		// 		function(result){
		//
		// 			usersDataService.deleteUser(self.selectedItem).then(
		// 				function(result){
		// 					result.type = 4;
		// 					$modalInstance.close(result);
		// 				},function(error){
		// 					notificationService.showError("Gebruikers", "Gebruiker niet opgeslaan");
		// 				});
		// 		},function(error){
		//
		// 		});
		// }

    self.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

	});
