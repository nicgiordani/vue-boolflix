var app = new Vue(
  {
    el: '#app',
    data: {
      movies: [],

    },
    methods: {

    },
    mounted: function() {
      var self = this;

      axios
        .get('https://api.themoviedb.org/3/movie/550?api_key=8d3968a8babe4951b38e5cbfddb586ec')
        .then( function(result) {
            self.movies = result.data.response;
          }
        );
    }
  }
);
