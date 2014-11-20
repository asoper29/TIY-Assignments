'use strict';

angular.module('github-comments')
  .controller('MainCtrl', function($http, $interpolate, $cookies){
      var apiUrl = 'https://api.github.com/repos/TheIronYard--Orlando/FEE--2014--FALL/issues/416/comments',
          apiKeyTpl = $interpolate('?access_token={{key}}');

      var self = this;

      this.apiKey = $cookies.apiKey;

      $http.get(apiUrl)
        .success(function(data){
          self.comments = data;
        });

      this.addComment = function(text, apiKey){
        var url = apiUrl + apiKeyTpl({ key: apiKey });

        $cookies.apiKey = apiKey;

        $http.post(url, { body: text })
          .success(function(data){
            self.comments.push(data);
          });
      };
  });
