var app = angular.module('app', ['ngRoute','ngSanitize'])
.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

/*    $routeProvider
    .when('/', {
        templateUrl: myLocalized.partials + 'main.html'
    });*/
});
app.directive('main', function(){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        scope: {}, // {} = isolate, true = child, false/undefined = no change
        controller:['$scope','$http',function($scope, $http) {
                $http.get('wp-content/themes/pcz/ajax/getPosts.php').success(function(res){
                $scope.posts = res;
            });
        }],
        //controllerAs: 'menu' ,
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
         restrict: 'E',

        // template: '',
         templateUrl: 'wp-content/themes/pcz/partials/main.html'
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    };
});

app.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
});

app.directive('header', function(){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
         scope: true, // {} = isolate, true = child, false/undefined = no change
         controller: function () {
            this.tab = 1;   /* initially set tab to 1*/
                    this.selectTab = function (setTab) { /* Set tab to whatever tab user clicks*/
                        this.tab = setTab;
                        console.log(this.tab);
                    };
                    this.isSelected = function (checkTab) {/* Check which tab is selected to trigger show of selected tab */
                        return this.tab === checkTab;

                    };
         },
         controllerAs: 'menu' ,
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
         restrict: 'E',

        // template: '',
         templateUrl: 'wp-content/themes/pcz/partials/header.html'
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    };
});

app.directive('database', function(){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
         scope: {}, // {} = isolate, true = child, false/undefined = no change
         //controller: function () {
            //this.tab = 1;   /* initially set tab to 1*/
                    //this.selectTab = function (setTab) { /* Set tab to whatever tab user clicks*/
                        //this.tab = setTab;
                        //console.log(this.tab);
                    //};
                    //this.isSelected = function (checkTab) {/* Check which tab is selected to trigger show of selected tab */
                        //return this.tab === checkTab;

                    //};
         //},
         //controllerAs: 'menu' ,
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
         restrict: 'E',

        // template: '',
         templateUrl: 'wp-content/themes/pcz/partials/database.html'
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    };
});

app.directive('selectplayers', function(){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
         controller: function () {
            this.tab = 1;   /* initially set tab to 1*/
                    this.selectTab = function (setTab) { /* Set tab to whatever tab user clicks*/
                        this.tab = setTab;
                        console.log(this.tab);
                    };
                    this.isSelected = function (checkTab) {/* Check which tab is selected to trigger show of selected tab */
                        return this.tab === checkTab;

                    };
         },
         controllerAs: 'menu' ,
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
         restrict: 'E',

        // template: '',
         templateUrl: 'wp-content/themes/pcz/partials/selectplayers.html'
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    };
});

app.directive('allPlayers', function(){
    // Runs during compile
    return {
         templateUrl: 'wp-content/themes/pcz/partials/allplayers.html',
         restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
         scope: true,
         controller: ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
            $http.get('wp-content/themes/pcz/ajax/getAllPlayers.php').success(function(data){
                $scope.list = data;
                $scope.currentPage = 1; //current page
                $scope.entryLimit = 10; //max no of items to display in a page
                $scope.filteredItems = $scope.list.length; //Initially for no filter  
                $scope.totalItems = $scope.list.length;
            });
            $scope.setPage = function(pageNo) {
                $scope.currentPage = pageNo;
            };
            $scope.filter = function() {
                $timeout(function() { 
                    $scope.filteredItems = $scope.filtered.length;
                }, 10);
            };
            $scope.sort_by = function(predicate) {
                $scope.predicate = predicate;
                $scope.reverse = !$scope.reverse;
            };
         }]
    };
});

app.directive('activePlayers', function(){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
         scope: true,
         controller: ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
            $http.get('wp-content/themes/pcz/ajax/getActivePlayers.php').success(function(data){
            $scope.list = data;
            $scope.currentPage = 1; //current page
            $scope.entryLimit = 10; //max no of items to display in a page
            $scope.filteredItems = $scope.list.length; //Initially for no filter  
            $scope.totalItems = $scope.list.length;
            });
            $scope.setPage = function(pageNo) {
                $scope.currentPage = pageNo;
            };
            $scope.filter = function() {
                $timeout(function() { 
                    $scope.filteredItems = $scope.filtered.length;
                }, 10);
            };
            $scope.sort_by = function(predicate) {
                $scope.predicate = predicate;
                $scope.reverse = !$scope.reverse;
            };
         }],
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
         restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
         templateUrl: 'wp-content/themes/pcz/partials/activeplayers.html'
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    };
});

app.directive('womenPlayers', function(){
    // Runs during compile
    return {
         templateUrl: 'wp-content/themes/pcz/partials/womenPlayers.html',
         restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
         scope: true,
         controller: ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
            $http.get('wp-content/themes/pcz/ajax/getWomenPlayers.php').success(function(data){
                $scope.list = data;
                $scope.currentPage = 1; //current page
                $scope.entryLimit = 10; //max no of items to display in a page
                $scope.filteredItems = $scope.list.length; //Initially for no filter  
                $scope.totalItems = $scope.list.length;
            });
            $scope.setPage = function(pageNo) {
                $scope.currentPage = pageNo;
            };
            $scope.filter = function() {
                $timeout(function() { 
                    $scope.filteredItems = $scope.filtered.length;
                }, 10);
            };
            $scope.sort_by = function(predicate) {
                $scope.predicate = predicate;
                $scope.reverse = !$scope.reverse;
            };
         }]
    };
});

app.directive('juniors', function(){
    // Runs during compile
    return {
         templateUrl: 'wp-content/themes/pcz/partials/juniors.html',
         restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
         scope: true,
         controller: ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {
            $http.get('wp-content/themes/pcz/ajax/getJuniors.php').success(function(data){
                $scope.list = data;
                $scope.currentPage = 1; //current page
                $scope.entryLimit = 10; //max no of items to display in a page
                $scope.filteredItems = $scope.list.length; //Initially for no filter  
                $scope.totalItems = $scope.list.length;
            });
            $scope.setPage = function(pageNo) {
                $scope.currentPage = pageNo;
            };
            $scope.filter = function() {
                $timeout(function() { 
                    $scope.filteredItems = $scope.filtered.length;
                }, 10);
            };
            $scope.sort_by = function(predicate) {
                $scope.predicate = predicate;
                $scope.reverse = !$scope.reverse;
            };
         }]
    };
});