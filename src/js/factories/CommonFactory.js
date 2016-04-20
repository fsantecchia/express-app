var CommonFactory = function ($http, $q) {
    var factory = {};
    
    factory.hola = "HOLsadsadsA";

    factory.create = function (data, model) {
        var deferred = $q.defer();
        $http.post('/' + model + '/create', data).success(function (response) {
            deferred.resolve(response);
        }).error(function (error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };
    
    factory.update = function (id, data, model) {
        var deferred = $q.defer();
        $http.put('/' + model + '/' + id, data).success(function (response) {
            deferred.resolve(response);
        }).error(function (error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };
    
    factory.findAll = function (model) {
        var deferred = $q.defer();
        $http.get('/' + model + '/find').success(function (response) {
            deferred.resolve(response);
        }).error(function (error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };
    
    factory.find = function (id, model) {
        var deferred = $q.defer();
        $http.get('/' + model + '/find/' + id).success(function (response) {
            deferred.resolve(response);
        }).error(function (error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };
    
    factory.findByJson = function (data, model) {
        var deferred = $q.defer();
        $http.post('/' + model + '/find/', data).success(function (response) {
            deferred.resolve(response);
        }).error(function (error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };
    
    return factory;
};

module.exports = CommonFactory;