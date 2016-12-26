angular.module('app')
	.service('usersLayoutService', function($modal,Backand) {

    var self = this;
    var baseUrl = Backand.getApiUrl();

    self.openEditModal = function(selectedItem){
      return modalInstance = $modal.open({
        animation: false,
        templateUrl: 'js/common/modals/users/users-modal-edit.html',
        controller: 'userModalController as ctrl',
        size: 'md',
        backdrop: 'static',
        keyboard: false,
        backdropClass: 'backdrop-modal',
        resolve: {
          selectedItem: function () {
            return selectedItem;
          }
        }
      });
    }

    self.openAddModal = function(selectedItem){
      return modalInstance = $modal.open({
        animation: false,
        templateUrl: 'js/common/modals/users/users-modal-add.html',
        controller: 'userModalController as ctrl',
        size: 'md',
        backdrop: 'static',
        keyboard: false,
        backdropClass: 'backdrop-modal',
        resolve: {
          selectedItem: function () {
            return selectedItem;
          }
        }
      });
    }

});
