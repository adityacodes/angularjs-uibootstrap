app.service('modalService', ['$uibModal', function($uibModal) {


	this.open = function(size, parentSelector, items){
		var parentElem = parentSelector ? 
	      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
	    var modalInstance = $uibModal.open({
	      animation: true,
	      ariaLabelledBy: 'modal-title',
	      ariaDescribedBy: 'modal-body',
	      templateUrl: 'myModalContent',
	      controller: 'ModalInstanceCtrl',
	      controllerAs: '$ctrl',
	      size: size,
	      appendTo: parentElem,
	      resolve: {
	        items: function () {
	          return items;
	        }
	      }
	    });
	    return modalInstance;
	}
}]);

app.controller('ModalInstanceCtrl', ['$uibModalInstance', 'items', function ($uibModalInstance, items) {
  var $ctrl = this;
  $ctrl.items = items;
  
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

}]);