const dropdown_literal_date = Vue.extend({
  props: ['question', 'index'],
  data() {
    return {
      display: true,
    };
  },
  watch: {
    display() {
      if (!this.display) {
        this.question.Answer = '';
      }
    },
  },
  methods: {
    edit(data) {
      this.$root.$children[0].form.Questions.forEach((item, index, array) => {
        if (data.Guid === item.Guid) {
          item.index = index;
          this.$root.$children[0].current = item;
          array.splice(index, 1);
        }
      });
    },
    showEdit(guid) {
      document.querySelector(`p[data-key="${guid}"]`).style.display = 'block';
    },
    hideEdit(guid) {
      document.querySelector(`p[data-key="${guid}"]`).style.display = 'none';
    },
  },
  mounted() {
    eventBus.$on('connect', info => {
      if (info.Guid === this.question.Guid) {
        this.display = info.status;
      }
    });
  },
});

export { dropdown_literal_date };
