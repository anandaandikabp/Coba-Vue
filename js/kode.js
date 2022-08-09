const vm = new Vue({
    el: '#app',
    data: {
        name: 'Andika',
        message: "Hello World",
        qty: 3,
        namaDepan: 'Ananda',
        namaBelakang: ' Andika',
        bilangan: 1,
        link: '<a href="">Andika</a>',
        gambar: './assets/image/1.jpg',
        menu: 'home',
        kelas: ['Xiaomi', 'Oppo', 'Vivo'],
        kelasBaru: "",
        numbers: [1, 2, 3, 4, 5]
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
            this.gambar = './assets/image/phone.png'
        },
        cariGenap: function (data) {
            return data.filter(i => {
                return i % 2 == 0
            })
        },
        gantiMenu: function(data) {
            this.menu = data
        },
        submit: function(event) {
            let text = event.target.value
            console.log(text)
            this.kelas.unshift(this.kelasBaru)
            this.kelasBaru= ""
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