
angular.module('app')
	.controller('sponsorsController', function(sponsorsDataService) {

		var self = this;

		self.fetchedData = [];
		self.sponsorDataService = sponsorsDataService;
    self.activeTab = 0;
    self.navigateTab = function(tab){
      self.activeTab = tab;
    }

		self.myData = [
		    {
		        "firstName": "Cox",
		        "lastName": "Carney",
		        "company": "Enormo",
		        "employed": true
		    },
		    {
		        "firstName": "Lorraine",
		        "lastName": "Wise",
		        "company": "Comveyer",
		        "employed": false
		    },
		    {
		        "firstName": "Nancy",
		        "lastName": "Waters",
		        "company": "Fuelton",
		        "employed": false
		    }
		];

		self.gridOptions = {
			data: self.myData
		};

	});
