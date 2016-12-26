angular.module('app')
	.service('usersDataService', function($http, Backand) {

    var self = this;
    var baseUrl = Backand.getApiUrl();

    self.getUsers = function(orgId) {
      return $http ({
        method: 'GET',
        url: baseUrl + '/1/objects/User',
        params: {
          pageSize: 500,
          pageNumber: 1,
          filter: null,
          sort: '',
          exclude: 'metadata,totalRows',
					filter: [{
						"fieldName": "IsMemberOfGroup",
						"operator": "in",
						"value": orgId
					}]
        }
      });
    }

    self.getOrganisations = function() {
      return $http ({
        method: 'GET',
        url: baseUrl + '/1/objects/Organisation',
        params: {
          pageSize: 500,
          pageNumber: 1,
          filter: null,
          sort: '',
          exclude: 'metadata,totalRows',
        }
      });
    }

    self.updateUser = function(userObject) {
      return $http ({
        method: 'PUT',
        url: baseUrl + '/1/objects/User/'+ userObject.id +'?returnObject=false',
				data: userObject
      });
    }

});
