app.factory('courses', ['$http', function($http) {
    return $http.get('/api/courses')
        .success(function(data) {
            console.log('DATA: ', data);
            return data;
        })
        .error(function(err) {
            console.log('ERR');
            return err;
        });
}]);
app.factory('uploads', ['$http', function($http) {
    return $http.get('courses.json')
        .success(function(data) {
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);





