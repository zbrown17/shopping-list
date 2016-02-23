angular
    .module('shopping',[])

    .controller('ShopCtrl',['$scope',function($scope){
        $scope.shoppinglist =[];
        $scope.newitem = undefined;
        
        $scope.additem = function () {
            if ($scope.newitem !== undefined &&
               $scope.shoppinglist.indexOf($scope.newitem) === -1
               ){
            $scope.shoppinglist.push($scope.newitem);
            $scope.newitem = undefined;
            
            } else {alert($scope.newitem + " lol nah")
                   $scope.newitem = undefined;
                   }
        }
        $scope.removeitem = function(index) {
            $scope.shoppinglist.splice(index,1)
        }
    }])