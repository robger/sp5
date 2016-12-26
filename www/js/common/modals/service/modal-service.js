angular.module('app')
	.service('modalService', function($modal) {

    var self = this;

    self.confirm = function(title, body){
			
      return modalInstance = $modal.open({
        animation: false,
        templateUrl: 'js/common/modals/service/modal-confirmation.html',
        controller: 'modalController as ctrl',
        size: 'md',
        backdrop: 'static',
        keyboard: false,
        backdropClass: 'backdrop-modal',
        resolve: {
          title: function () {
            return title;
          },
          body: function () {
            return body;
          },
        }
      });
    }


});
