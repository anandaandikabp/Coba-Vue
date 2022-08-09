const Home = {
    template: '<div>Home</div>'
}

Vue.component("header-component", {
    props: ['nama','image'],
    template: `
        <header>
            <img :src="image" alt="img" style="width: 300px;">
            <p>{{ 'Hello ' +nama }}</p>
        </header>
        `,
    data: () => {
        return {
        pesan: "Hello, Component",
        };
    },
});

Vue.component("footer-component", {
    template: `
        <footer id="footer">
            <p>copyright 2022</p>
        </footer>
        `,
});

Vue.component("kelas", {
    props: ['items','input'],
    template: `
    <div>
        <h3>Form Submit.</h3>
        <p><input type="text" placeholder="Nama Kelas" v-on:keyup.enter="submit" v-model="input"></p>

        <h3>Daftar Kelas {{ items.length }}</h3>
        <template v-if="items.length >= 1">
            <ul>
                <li v-for="(item, index) of items">{{ index+1 }} - {{ item }}</li>
            </ul>
        </template>
        <li v-else>Kelas Belum Tersedia</li>
    </div>    
        `,
    methods: {
        submit: function (event) {
        let text = event.target.value;
        console.log(text);
        this.kelas.unshift(this.kelasBaru);
        this.kelasBaru = "";
        },
    },
});

const vm = new Vue({
    el: "#app",
    components: {
        'home': Home
    },
    data: function() {
        return {
        kelas: ["Xiaomi", "Oppo", "Vivo"],
        kelasBaru: "",
        };
    },
    computed: {},
});
