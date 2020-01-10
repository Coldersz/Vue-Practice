new Vue ({
    el: '#element',
    data: {
        sayHello: 'Hello World!',
        name: 'Achmad Dzulfian',
        nick: 'Coldersz',
        job: 'Student',
        url: 'http://coldersz.blogspot.com',
        insta: 'And also here is My <a href="https://www.instagram.com/?hl=id">Insta</a>'
    },
    methods: {
        greet(time) {
            return 'Good ' + time + ' ' + this.nick
        }
    }
})