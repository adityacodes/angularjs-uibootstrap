app.service('carouselService', function(){

  	this.carousel = function($scope){
  		$scope.myInterval = $scope.sliderProperties.interval;
  		$scope.noWrapSlides = $scope.sliderProperties.noWrapSlides;
  		$scope.active = $scope.sliderProperties.active;
  		$scope.slides = $scope.sliderProperties.slides;
  	}
  
});