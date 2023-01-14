const app = Vue.createApp();

const root = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      age: 32,
      name: "Chris",
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

root.mount("#root");
