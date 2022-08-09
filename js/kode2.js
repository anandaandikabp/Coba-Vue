Vue.component("header-component", {
  template: `
    <header>
        <img src="./assets/image/1.jpg" alt="img" style="width: 300px;">
        <p v-text="pesan"></p>
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
  template: `
  <div>
    <h3>Form Submit.</h3>
    <p><input type="text" placeholder="Nama Kelas" v-on:keyup.enter="submit" v-model="kelasBaru"></p>

    <h3>Daftar Kelas {{ kelas.length }}</h3>
    <template v-if="kelas.length >= 1">
        <ul>
            <li v-for="(item, index) of kelas">{{ index+1 }} - {{ item }}</li>
        </ul>
    </template>
    <li v-else>Kelas Belum Tersedia</li>
  </div>    
    `,
  data: () => {
    return {
      kelas: ["Xiaomi", "Oppo", "Vivo"],
      kelasBaru: "",
    };
  },
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
  computed: {},
});
