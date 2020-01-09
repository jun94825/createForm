import { dropdown_literal_date } from '../extends/dropdown_literal_date.js';

export default Vue.component('english', {
  template: `
    <div class="form-question" v-if="display">
      <div class="question-title">
        <button type="button" class="btn btn-sm btn-outline-success mr-3" @click="edit(question)">編輯</button>
        <span v-if="question.Required" class="badge badge-danger mr-2">必填</span>
        <h4>{{ index + 1}}.  {{ question.Title }}</h4>
      </div>

      <div class="input literal">
        <input type="english" v-model="question.Answer" placeholder="請輸入英文字母" @change="checkNum" />
        <div class="line"></div>
      </div>
    </div>
  `,
  methods: {
    checkNum() {
      this.question.Answer = this.question.Answer.replace(/[^\a-\z\A-\Z]/g, '');
    },
  },
  extends: dropdown_literal_date,
});
