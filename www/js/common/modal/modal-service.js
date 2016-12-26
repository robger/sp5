angular.module('app')
	.service('modalService', function($modal) {
    self = this;

		self.animationsEnabled = false;

		self.openModal = function(selectedItem){
			return modalInstance = $modal.open({
	      animation: self.animationsEnabled,
	      templateUrl: 'js/common/modal/modal-content.html',
				controller: 'modalController as ctrl',
	      size: modalSize.Medium,
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


		var modalSize = {
			Small: 'sm',
			Medium: 'md',
			Large: 'lg',
		}




});
