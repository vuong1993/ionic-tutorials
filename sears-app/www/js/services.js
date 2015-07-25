// app.factory('product_data', ['$http', function($http){
//
//   return function(prodnum) {
//     // Simple GET request example :
//     $http.get('https://bpshonyak-prod.apigee.net/hello-world/sears?type=details&prodnum=' + prodnum).
//       success(function(data, status, headers, config) {
//         console.log(data);
//         return 'http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_1114954112';
//       }).
//       error(function(data, status, headers, config) {
//         return '';
//       });
//   }
//
//   // return "http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_1114954112";
//
// }])

app.factory('ticket_data', ['$http', function($http) {
  console.log('in service!');

  var getinfo = function(prodnum) {
    console.log("in getinfo");
    // Simple GET request example :
    var call = $http.get('https://bpshonyak-prod.apigee.net/hello-world/sears?type=details&prodnum=' + prodnum).
      success(function(data, status, headers, config) {
        console.log('success');
        return 'http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_1114954112';
      }).
      error(function(data, status, headers, config) {
        return 'http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_1114954112';
        console.log('failure');
      });
  }

    var tickets = [
      {
        id        : 1,
        tech      : 'Bogdan',
        status    : 'Pending',
        prodnum   : '04649599000P',
        img       : ''
      },
      {
        id        : 2,
        tech      : 'Louis',
        status    : 'Pending',
        prodnum   : '02211000000P',
        img       : 'http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_1114954112'
      },
      {
        id        : 3,
        tech      : 'Jim',
        status    : 'Complete',
        prodnum   : '02615000000P',
        img       : 'http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_1114954112'
      },
      {
        id        : 4,
        tech      : 'Brain',
        status    : 'In Progress',
        prodnum   : '04622442000P',
        img       : 'http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_1114954112'
      }
    ]
    return {
      all: function() {
        return tickets;
      },
      add: function(events, obj) {
        tickets.pop(obj);
      },
      get: function(id) {
        for (var i = 0; i < tickets.length; i++) {
          if (tickets[i].id === parseInt(id)) {
            return tickets[i];
          }
        }
        return null;
      },
      newpic: function(prodnum) {
        console.log('in newpic');
        $http.get('https://bpshonyak-prod.apigee.net/hello-world/sears?type=details&prodnum=04649599000P').
          success(function(data, status, headers, config) {
            console.log('success');
            return 'http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_1114954112';
          }).
          error(function(data, status, headers, config) {
            return 'http://c.shld.net/rpx/i/s/i/spin/image/spin_prod_1114954112';
            console.log('failure');
          });
      }
    };
 }]);