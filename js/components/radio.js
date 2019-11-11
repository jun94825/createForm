import { radio_checkbox } from '../extends/radio_checkbox.js';

export default Vue.component('radio', {
  watch: {
    display() {
      if (!this.display) {
        this.question.Answer = '';
        this.question.Options.forEach(item => {
          if (item.Binding.length > 0) {
            item.Binding.forEach(Guid => {
              eventBus.$emit('connect', { Guid, status: false });
            });
          }
        });
      }
    },
  },
  methods: {
    checkBinding(data, item) {
      if (item.Binding.length > 0) {
        item.Binding.forEach(Guid => {
          eventBus.$emit('connect', { Guid, status: true });
        });
      }
      data.Options.forEach(option => {
        if (option.Binding.length > 0 && option.Guid !== item.Guid) {
          option.Binding.forEach(Guid => {
            eventBus.$emit('connect', { Guid, status: false });
          });
        }
      });
    },
  },
  extends: radio_checkbox,
});
