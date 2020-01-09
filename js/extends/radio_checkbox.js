const radio_checkbox = Vue.extend({
  props: ['question', 'index', 'ScoreMode', 'editMode'],
  template: `
    <div class="form-question" v-if="display">
      <div class="form-question" v-if="display">
        <div class="question-title">
          <button type="button" class="btn btn-sm btn-outline-success mr-3" @click="edit(question)">編輯</button>
          <span v-if="question.Required" class="badge badge-danger mr-1">必填</span>
          <span v-if="ScoreMode" class="badge badge-info mr-2">計分</span>
          <h4>{{ index + 1}}.  {{ question.Title }}</h4>
        </div>
        <div
          class="question-option"
          v-for="(item, index) in question.Options"
          :key="index"
        >
          <button v-if="!editMode" type="button" class="btn btn-sm btn-outline-secondary mr-3" @click="binding(item)">綁定</button>
          <input
            :type="question.Type"
            :id="item.Guid"
            :value="item.Guid"
            v-model="question.Answer"
            @change="checkBinding(question, item)"
          />
          <label :for="item.Guid">{{ item.Value }}</label>
          <p v-if="ScoreMode" class="ml-auto border-bottom">{{ item.OptionScore }}</p>
          <p v-if="ScoreMode" class="ml-2">分</p>
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
            this.$root.$children[0].forReadOnly = item;
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
