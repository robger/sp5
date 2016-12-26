angular.module('app')
	.service('translateService', function($state,notificationService) {
    self = this;

    self.languages = ['NL','FR','EN'];
   	var chosenLanguage = _.first(self.languages); // TODO: set chosenLanguage to default language of logged in user
		self.currentLang = chosenLanguage;

    self.getTranslation = function(key){
				if(translations[key]){
					return translations[key][chosenLanguage];
				}else{
					return "***"+key;
				}
    }

		self.setCurrentLanguage = function(language){
			chosenLanguage = language;
			self.currentLang = language;
			notificationService.showSuccess("Taal","De geselecteerde taal is nu: " + chosenLanguage);
			$state.reload();
		}

    var translations = {
			Sponsors:{
				NL:'Sponsors',
				FR:'Sponsors',
				EN:'Sponsors',
			},
			Users:{
        NL:'Gebruikers',
        FR:'Utilisateurs',
        EN:'Users',
      },
			Events:{
        NL:'Evenementen',
        FR:'Evénements',
        EN:'Events',
      },
			Finance:{
        NL:'Financiën',
        FR:'Finance',
        EN:'Finance',
      },
			Youth:{
        NL:'Jeugd',
        FR:'Jeunesse',
        EN:'Youth',
      },
			Home:{
        NL:'Home',
        FR:'Home',
        EN:'Home',
      },
			UI:{
        NL:'UI',
        FR:'UI',
        EN:'UI',
      },
			Example:{
        NL:'Voorbeeld',
        FR:'Exemple',
        EN:'Example',
      },
			Options:{
        NL:'Opties',
        FR:'Options',
        EN:'Options',
      },
			Edit:{
        NL:'Wijzigen',
        FR:'Editer',
        EN:'Edit',
      },
			Add:{
        NL:'Toevoegen',
        FR:'Ajouter',
        EN:'Add',
      },
			Save:{
        NL:'Opslaan',
        FR:'Sauvegarder',
        EN:'Save',
      },
			Cancel:{
        NL:'Annuleren',
        FR:'Annulér',
        EN:'Cancel',
      },
			Delete:{
        NL:'Verwijderen',
        FR:'Supprimer',
        EN:'Delete',
      },

      FirstName:{
        NL:'Voornaam',
        FR:'Prénom',
        EN:'First name',
      },
      LastName:{
        NL:'Achternaam',
        FR:'Nom de famille',
        EN:'Last name',
      },
      IsMemberOfGroup:{
        NL:'Is lid van groep',
        FR:'Fait partie du groupe',
        EN:'Is member of group',
      },
      DefaultLanguage:{
        NL:'Standaard taal',
        FR:'Langage par défaut',
        EN:'Default language',
      },
    };

});
