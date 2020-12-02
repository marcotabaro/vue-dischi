const myApp = new Vue ({
    el: '#root',
    data: {
        albums: [],
        genres: ['pop', 'rock', 'metal', 'jazz'],
        selected: 'all'
    },
    mounted: function() {
            axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(result => { this.albums = result.data.response})
        },
    computed: {
        filteredAlbums() {
            if(this.selected === 'all'){
                return this.albums;
            } else {
                return this.albums.filter(el => el.genre.toLowerCase() === this.selected)
            }
        }
    }
    })



