angular.module('app')
	.controller('usersController', function(usersDataService,translateService,$scope,modalService,notificationService) {

		$scope.myGridApi = {};
		$scope.organisations = {};
		$scope.selectedOrgId = {};

    $scope.gridOptions = {
			columnDefs: [
				{
					name: "FirstName",
					type: "string",
					displayName: translateService.getTranslation('FirstName'),
				},
				{
					name: "LastName",
					type: "string",
					displayName: translateService.getTranslation('LastName'),
				},
				{
					name: "Password",
					type: "string",
					visible: false,
				},
				{
					name: "DefaultLanguage",
					type: "string",
					displayName: translateService.getTranslation('DefaultLanguage'),
				},
				// {
				// 	name: "IsMemberOfGroup",
				// 	type: "string",
				// 	displayName: translateService.getTranslation('IsMemberOfGroup'),
				// },
				{
					name: "Options",
					displayName: translateService.getTranslation('Options'),
					cellTemplate: '<div class="ui-grid-cell-contents"><button type="button" class="btn btn-xs btn-primary" ng-click="grid.appScope.editRow(row.entity)">Edit</button> </div>',
					enableSorting: false,
					enableFiltering: false,
				},
			],
			// multiSelect: false,
			// noUnselect: true,
			// enableSelectAll: false,
			// enableFullRowSelection: true,
			enableFiltering: true,
		};

		$scope.usersDataService = usersDataService;

		$scope.editRow = function(row){
				console.log(row);
				var modal = modalService.openModal(row);

				modal.result.then(function(result){
						// TODO: should be in one action instead of all properties seperatly
						var result = result.config.data;
						row.FirstName = result.FirstName;
						row.LastName = result.LastName;
						row.DefaultLanguage = result.DefaultLanguage;
						row.IsMemberOfGroup = result.IsMemberOfGroup;
						notificationService.showSuccess("Gebruikers", "Gebruiker succesvol opgeslaan");
					},function(error){
						debugger;
				});
		}

		$scope.selectOrg = function(orgId){
			$scope.selectedOrgId = orgId;
			loadUsers($scope.selectedOrgId);
		}

		var loadOrganisations = function(){
			usersDataService.getOrganisations().then(function(response){
				$scope.organisations = response.data.data;
				$scope.selectedOrgId = _.first($scope.organisations).id;
				loadUsers($scope.selectedOrgId);
			});
		}

		var loadUsers = function(orgId){
			usersDataService.getUsers(orgId).then(function(response){
				$scope.gridOptions.data = response.data.data;
				$scope.dataLoaded = true;
				notificationService.showSuccess("Gebruikers", "Gebruikers succesvol geladen");
			});
		}

		loadOrganisations();

	});
