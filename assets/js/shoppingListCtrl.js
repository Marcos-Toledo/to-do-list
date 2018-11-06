var app = angular.module("shoppingList", []);

app.controller("shoppingListCtrl", function($scope) {
  $scope.inputname = document.querySelector(".input-nema-iten");
  $scope.itemList = [];
  $scope.inputname.focus();
  
  $scope.addItens = function() {
    if ($scope.inputname.value != "") {
      $scope.item = {
        nameIten: $scope.nameIten,
        boolean: false
      };

      $scope.itemList.unshift($scope.item);
      $scope.inputname.value = "";
      $scope.inputname.focus();

      localStorage.setItem("itens", JSON.stringify($scope.itemList));
    }
  };

  $scope.removeIten = function($index) {
    $scope.itemList.splice($index, 1);
    localStorage.setItem("itens", JSON.stringify($scope.itemList));
  };

  $scope.iBought = function(item) {
    item.boolean = true;
    localStorage.setItem("itens", JSON.stringify($scope.itemList));
  };

  $scope.iDidNotBuy = function(item) {
    item.boolean = false;
    localStorage.setItem("itens", JSON.stringify($scope.itemList));
  };

  $scope.clearList = function() {
    $scope.itemList.splice(0, $scope.itemList.length);
    localStorage.setItem("itens", JSON.stringify($scope.itemList));
  }

  if(JSON.parse(localStorage.getItem("itens")).length > 0) {
    $scope.itemList = JSON.parse(localStorage.getItem("itens"));
  }
});