new Vue({
    el: '#vue-app',
    data: {
        years: 16,
        x: 0,
        y:0
    },
    methods: {
        add: function(inc) {
            this.years += inc;
        },
        sub: function(dec) {
            this.years -= dec;
        },
        updateXY: function(event) {
            // console.log(event)
            this.x = event.offsetX;         // offsetX and offsetY from the console.log
            this.y = event.offsetY;
        },
        click: function() {
            alert("The link will no longer reload the page!")
        }
    }
})