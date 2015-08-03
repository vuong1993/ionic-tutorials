var app = angular.module('starter', ['ionic', 'flexcalendar', 'pascalprecht.translate']);

//instanciate databases
var localDB = new PouchDB("todos");

var remoteDB = new PouchDB('https://itchentleverturearywhers:U7vFQNN2joOhU03Mw0iUx3SN @af48ada6-78db-4210-a80d-86619c82407e-bluemix.cloudant.com/my_sample_db', {
  auth: {
    username: 'itchentleverturearywhers',
    password: 'U7vFQNN2joOhU03Mw0iUx3SN'
  }
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    //auto sync local and remote db's
    localDB.sync(remoteDB, { live:true });
  });
})

app.config(function($stateProvider, $urlRouterProvider, $translateProvider) {

	$stateProvider

	.state('login', {
		url: '/login',
		templateUrl: 'templates/login.html',
		controller: 'LoginCtrl'
	})

  .state('signup', {
		url: '/signup',
		templateUrl: 'templates/signup.html',
		controller: 'SignupCtrl'
	})

	.state('account', {
		url: '/account',
		templateUrl: 'templates/account.html',
		controller: 'AccountCtrl'
	})

  .state('schedule', {
		url: '/schedule',
		templateUrl: 'templates/schedule.html',
		controller: 'ScheduleCtrl'
	});

	$urlRouterProvider.otherwise('/login');

  // Flex Calendar Language Options

  $translateProvider.translations('en', {
   JANUARY: 'January',
   FEBRUARY: 'February',
   MARCH: 'March',
   APRIL: 'April',
   MAI: 'Mai',
   JUNE: 'June',
   JULY: 'July',
   AUGUST: 'August',
   SEPTEMBER: 'September',
   OCTOBER: 'October',
   NOVEMBER: 'November',
   DECEMBER: 'December',

   SUNDAY: 'Sunday',
   MONDAY: 'Monday',
   TUESDAY: 'Tuesday',
   WEDNESDAY: 'Wednesday',
   THURSDAY: 'Thurday',
   FRIDAY: 'Friday',
   SATURDAY: 'Saturday'
 });
 $translateProvider.translations('fr', {
     JANUARY: 'Janvier',
     FEBRUARY: 'Févier',
     MARCH: 'Mars',
     APRIL: 'Avril',
     MAI: 'Mai',
     JUNE: 'Juin',
     JULY: 'Juillet',
     AUGUST: 'Août',
     SEPTEMBER: 'Septembre',
     OCTOBER: 'Octobre',
     NOVEMBER: 'Novembre',
     DECEMBER: 'Décembre',

     SUNDAY: 'Dimanche',
     MONDAY: 'Lundi',
     TUESDAY: 'Mardi',
     WEDNESDAY: 'Mercredi',
     THURSDAY: 'Jeudi',
     FRIDAY: 'Vendredi',
     SATURDAY: 'Samedi'
 });
 $translateProvider.translations('pt', {
     JANUARY: 'Janeiro',
     FEBRUARY: 'Fevereiro',
     MARCH: 'Março',
     APRIL: 'Abril',
     MAI: 'Maio',
     JUNE: 'Junho',
     JULY: 'Julho',
     AUGUST: 'Agosto',
     SEPTEMBER: 'Setembro',
     OCTOBER: 'Outubro',
     NOVEMBER: 'Novembro',
     DECEMBER: 'Dezembro',

     SUNDAY: 'Domingo',
     MONDAY: 'Segunda',
     TUESDAY: 'Terça',
     WEDNESDAY: 'Quarta',
     THURSDAY: 'Quinta',
     FRIDAY: 'Sexta',
     SATURDAY: 'Sábado'
 });
 $translateProvider.preferredLanguage('en');
 $translateProvider.useSanitizeValueStrategy('escape');

});
