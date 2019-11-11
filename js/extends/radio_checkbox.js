const radio_checkbox = Vue.extend({
  props: ['question', 'index'],
  template: `
    <div class="form-question" v-if="display">
      <div class="form-question" v-if="display">
        <div class="question-title" @mousemove="showEdit(question.Guid)" @mouseout="hideEdit(question.Guid)">
          <p class="required" v-if="question.Required">*</p>
          <h4>{{ index + 1}}. {{ question.Title }}</h4>
          <p class="edit" :data-key="question.Guid" @click="edit(question)">Edit</p>
        </div>
        <div
          class="question-option"
          v-for="(item, index) in question.Options"
          :key="index"
          @mousemove="showBinding(item)"
          @mouseout="hideBinding(item)"
        >
          <input
            :type="question.Type"
            :id="item.Guid"
            :value="item.Guid"
            v-model="question.Answer"
            @change="checkBinding(question, item)"
          />
          <label :for="item.Guid">{{ item.Value }}</label>
          <p class="binding" :data-key="item.Guid" @click="binding(item)"
            >Binding</p
          >
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      display: true,
    };
  },
  methods: {
    showBinding(item) {
      document.querySelector(`p[data-key="${item.Guid}"]`).style.display =
        'block';
    },
    hideBinding(item) {
      document.querySelector(`p[data-key="${item.Guid}"]`).style.display =
        'none';
    },
    binding(item) {
      const bindingTarget = prompt();
      if (bindingTarget === null) {
        return;
      }
      item.Binding.push(bindingTarget);
    },
    showEdit(guid) {
      document.querySelector(`p[data-key="${guid}"]`).style.display = 'block';
    },
    hideEdit(guid) {
      document.querySelector(`p[data-key="${guid}"]`).style.display = 'none';
    },
    edit(data) {
      this.$root.$children[0].form.Questions.forEach((item, index, array) => {
        if (data.Guid === item.Guid) {
          item.index = index;
          this.$root.$children[0].current = item;
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
