const vm = new Vue({
    el: '#app',
    data: {
        name: 'Andika',
        message: "Hello World",
        qty: 3,
        namaDepan: 'Ananda',
        namaBelakang: ' Andika',
        bilangan: 1,
        link: '<a href="">kelas.baledemy</a>',
        gambar: 'image/1.jpg',
        menu: 'home',
        kelas: []
    },
    methods: {
        getName: function () {
            return 'Hello, ' + this.name
        },

        ubahNama: function (namaBaru) {
            this.name = namaBaru
            return this.getName()
        },
        handleClick: function () {
            this.bilangan++
            this.gambar = 'image/phone.png'
        }
    },
    computed: {
        totalBayar: function () {
            return this.qty * 10000
        },
        namaLengkap: function () {
            return this.namaDepan + this.namaBelakang
        },
        infoBilangan: function () {
            return this.bilangan % 2 === 0 ? 'Genap' : 'Ganjil'
        }
    }
})