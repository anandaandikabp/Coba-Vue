Vue.component("header-component", {
  template: `
    <header>
        <img src="./assets/image/1.jpg" alt="img" style="width: 300px;">
    </header>
    `,
});

Vue.component("footer-component", {
  template: `
    <footer id="footer">
        <p>copyright 2022</p>
    </footer>
    `,
});

const vm = new Vue({
  el: "#app",
  data: {
    kelas: ["Xiaomi", "Oppo", "Vivo"],
    kelasBaru: "",
  },
  methods: {
    submit: function (event) {
      let text = event.target.value;
      console.log(text);
      this.kelas.unshift(this.kelasBaru);
      this.kelasBaru = "";
    },
  },
  computed: {},
});
