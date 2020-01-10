new Vue ({
    el: '#element',
    data: {
        sayHello: 'Hello World!',
        name: 'Achmad Dzulfian',
        nick: 'Coldersz',
        job: 'Student'
    },
    methods: {
        greet(time) {
            return 'Good ' + time + ' ' + this.nick
        }
    }
})