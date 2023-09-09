var app = angular.module("mytes", []);

// funngsi asc dsc
app.controller("myCtrl", function ($scope){
    
    $scope.ordering = function (ordvar, by){
        ordvar = !ordvar;
        $scope.ordstatus = ordvar;
        $scope.ord = by;
        return ordvar;
    }
$scope.students = [{
    name: 'andi',
    class: '1a',
    score: 40
},{
    name: 'ando',
    class: '1a',
    score: 41
},{
    name: 'lia',
    class: '1b',
    score: 60
},{
    name: 'bina',
    class: '1b',
    score: 90
},{
    name: 'sahil',
    class: '1b',
    score: 56
},{
    name: 'raka',
    class: '1c',
    score: 71
},{
    name: 'sinta',
    class: '1c',
    score: 58
},{
    name: 'kina',
    class: '1c',
    score: 87
}]
});