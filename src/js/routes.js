 var routes = function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/templates/welcome.html',
            controller: 'WelcomeCtrl'
        })
}
 
 module.exports = routes;