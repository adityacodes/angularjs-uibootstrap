app.controller("HomeController", ["$scope", "carouselService", "dateFactory", "$uibModal", "modalService",
                 function($scope, carouselService, dateFactory, $uibModal, modalService) {

    $scope.sliderProperties = {
        interval: 800,
        /*Slider Speed*/
        noWrapSlides: false,
        active: 0,
        slides: [{
                image: './assets/images/1.jpg',
                text: 'Nice image',
                id: 0
            },
            {
                image: './assets/images/2.jpg',
                text: 'Awesome photograph',
                id: 1
            },
            {
                image: './assets/images/3.jpg',
                text: 'That is so cool',
                id: 2
            }
        ]
    };

    carouselService.carousel($scope);

    dateFactory.date($scope);


    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function(size, parentSelector){

        var modalInstance = modalService.open(size, parentSelector, $scope.items);
        
        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    
    };

    $scope.open('sm');

}]);

