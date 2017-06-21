(function(){
    'use strict';

    angular
        .module('app')
        .controller('weatherController', weatherController)

    weatherController.$inject = ['$http'];

    function weatherController($http) {
        /* jshint validthis:true */
        var vm = this;
        vm.cityName = [];
        vm.getWeather = getWeather;
       
        
        function getWeather(term){
            console.log(term);
       $http
            .get('http://api.openweathermap.org/data/2.5/weather?q='+term+'&units=imperial&apikey=c290bc6fa7278451b2d24d29650191bb')
            .then(function(response){
                vm.weather = response.data;
                console.log(response.data);
                
                


            
                  
            });  


            
        }
         activate();

       function activate() { }
    }
})();