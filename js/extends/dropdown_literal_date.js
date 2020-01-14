const dropdown_literal_date = Vue.extend({
  props: ['question', 'index', 'ScoreEnable', 'editMode'],
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

          if (this.editMode) {
            if (this.$root.$children[0].forReadOnly.Guid) {
              alert('當前題目尚未編輯完成');
              return;
            } else {
              this.$root.$children[0].forReadOnly = item;
            }
          } else {
            this.$root.$children[0].current = item;
          }

          array.splice(index, 1);
        }
      });
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
