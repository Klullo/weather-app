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
            .get('http://api.openweathermap.org/data/2.5/weather?q='+term+'&units=imperial&apikey=8139ff48cb86336c265604fe16caf475')
            .then(function(response){
                vm.weather = response.data;
                console.log(response.data);
                vm.term;
                


            
                  
            });  


            
        }
         activate();

       function activate() { }
    }
})();