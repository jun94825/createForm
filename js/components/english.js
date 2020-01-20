import { dropdown_literal_date } from '../extends/dropdown_literal_date.js';

export default Vue.component('english', {
  template: `
    <div class="form-question" v-if="display">
      <div class="question-title">
        <button type="button" class="btn btn-sm btn-outline-success mr-2" @click="edit(question)">編輯</button>
        <span v-if="question.Required" class="badge badge-danger mr-2">必填</span>
        <p>{{ index + 1}}.  {{ question.Title }}</p>
      </div>

      <div class="input literal">
        <input type="english" v-model="question.Answer" placeholder="請輸入英文字母" @change="checkNum" />
        <div class="line"></div>
      </div>
    </div>
  `,
  methods: {
    checkNum() {
      // 限制只能打數字，猛在按下 Enter 的瞬間錯誤的輸入會消失，顆顆
      this.question.Answer = this.question.Answer.replace(/[^\a-\z\A-\Z]/g, '');
    },
  },
  extends: dropdown_literal_date,
});
