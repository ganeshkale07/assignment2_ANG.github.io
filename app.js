(
    function(){
        'use strict';

        angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController',ToBuyController)
        .controller('AlreadyBoughtController',AlreadyBoughtController)
        .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

        ToBuyController.$inject = ['ShoppingListCheckOffService'];
        function ToBuyController(ShoppingListCheckOffService){
            let buy = this;

            //to get buy list
            buy.items = ShoppingListCheckOffService.getBuyitemList();
        
            buy.addToBoughtList = function(index){
                ShoppingListCheckOffService.removeFromBuyList(index);
            }
            

        }

        AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
        function AlreadyBoughtController (ShoppingListCheckOffService){
            let bought = this;

            //to get bought list
            bought.list = ShoppingListCheckOffService.getBoughtList();
        }


        //service
        function ShoppingListCheckOffService(){
            let service = this;
            let toBuyList = [   { name: "cookies", quantity: 10 },
                                { name: "jelly", quantity: 20 },
                                { name: "choclates", quantity: 10 },
                                { name: "power bar", quantity: 10 },
                                { name: "toffy", quantity: 10 }
                            ];
            let boughtList = [];

            service.getBuyitemList = function(){
                return toBuyList;
            }
            
            service.getBoughtList = function(){
                return boughtList;
            }

            service.removeFromBuyList = function(index){
                boughtList.push(toBuyList[index]);
                return toBuyList.splice(index,1);
            }

        }
    }
)();