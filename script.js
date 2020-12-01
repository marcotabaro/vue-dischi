const myApp = new Vue ({
    el: '#root',
    data: {
        albums: [],
        selected: 'all'
    },
    mounted: function() {
            axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(result => { this.albums = result.data.response})
        }
    })



