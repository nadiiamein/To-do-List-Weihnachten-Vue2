//vue 2

const app = new Vue({
  el: "#taskApp",
  data: {
    alltasks: [
      { description: "Einen Weihnachtsmarkt besuchen", done: true },
      { description: "Geschenken kaufen", done: false },
      { description: "Mich mit Freunden treffen", done: false },
      { description: "Weihnachtskatren verschiken", done: false },
      { description: "Eine Weihnachtsessen der Familie besuchen", done: false },
      {
        description: "Eine Weihnachtsessen bei mir zuhause veranstalten",
        done: false,
      },
    ],
    newTask: "",
  },
  computed: {
    completed() {
      return this.alltasks.filter((task) => task.done);
    },
    open() {
      return this.alltasks.filter((task) => !task.done);
    },
  },
  methods: {
    taskAdd() {
      if (this.newTask === "") {
        return;
      }
      this.alltasks.push({ description: this.newTask, done: false });
      this.newTask = "";
    },
    deleteEl(index) {
      this.alltasks.splice(index, 1);
    },
    doneChange(index) {
      this.alltasks[index].done = !this.alltasks[index].done;
    },
  },
});
