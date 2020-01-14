const radio_checkbox = Vue.extend({
  template: '#haveBinding',
  props: ['question', 'index', 'ScoreEnable', 'editMode'],
  data() {
    return {
      display: true,
    };
  },
  methods: {
    binding(item) {
      const bindingTarget = prompt();
      if (bindingTarget === null) {
        return;
      }
      item.Binding.push(bindingTarget);
    },
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

export { radio_checkbox };
