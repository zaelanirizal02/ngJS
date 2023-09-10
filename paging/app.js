var app = angular.module("mytes", []);

// funngsi asc dsc
app.controller("myCtrl", function ($scope) {
  $scope.students = students;
  $scope.pagesizes = [5, 10, 15, 20];
  $scope.pagesize = $scope.pagesizes[0]; //jumlah baris dalam halaman
  $scope.currentpage = 0; //lokasi halaman saat ini
  $scope.pagenumber = Math.ceil($scope.students.length / $scope.pagesize); //jumlah total halaman
  $scope.jumlah = $scope.students.length;

  $scope.paging = function (type) {
    if (type == 0 && $scope.currentpage > 0) {
      --$scope.currentpage;
    } else if (type == 1 && $scope.currentpage < $scope.pagenumber-1) {
      ++$scope.currentpage;
    }
  }

 $scope.$watchCollection('results', function(){
    if ($scope.results == undefined) return;
    $scope.currentpage = 0;
    $scope.pagenumber = Math.ceil($scope.results.length / $scope.pagesize);
 });

  $scope.changeAction = function (){
    $scope.currentpage = 0;
    $scope.pagenumber = Math.ceil($scope.results.length / $scope.pagesize);
  }

  $scope.ordering = function (ordvar, by) {
    ordvar = !ordvar;
    $scope.ordstatus = ordvar;
    $scope.ord = by;
    return ordvar;
  }
});

var students = [
  {
    name: "andi",
    class: "1a",
    score: 40,
  },
  {
    name: "ando",
    class: "1a",
    score: 41,
  },
  {
    name: "lia",
    class: "1b",
    score: 60,
  },
  {
    name: "bina",
    class: "1b",
    score: 90,
  },
  {
    name: "sahil",
    class: "1b",
    score: 56,
  },
  {
    name: "raka",
    class: "1c",
    score: 71,
  },
  {
    name: "sinta",
    class: "1c",
    score: 58,
  },
  {
    name: "kina",
    class: "1c",
    score: 87,
  },
  {
    name: "ando",
    class: "1a",
    score: 41,
  },
  {
    name: "lia",
    class: "1b",
    score: 60,
  },
  {
    name: "bina",
    class: "1b",
    score: 90,
  },
  {
    name: "sahil",
    class: "1b",
    score: 56,
  },
  {
    name: "raka",
    class: "1c",
    score: 71,
  },
  {
    name: "sinta",
    class: "1c",
    score: 58,
  },
];
