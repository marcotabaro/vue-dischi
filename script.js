const myApp = new Vue ({
    el: '#root',
    data: {
        albums: [],
        genre: 'all'
    },
    mounted: function() {
            axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(albums => { this.albums = albums.data.response})
    }
})



