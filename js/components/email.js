import { dropdown_literal_date } from '../extends/dropdown_literal_date.js';

export default Vue.component('email', {
  template: `
    <div class="form-question" v-if="display">
      <div class="question-title">
        <button type="button" class="btn btn-sm btn-outline-success mr-2" @click="edit(question)">編輯</button>
        <span v-if="question.Required" class="badge badge-danger mr-2">必填</span>
        <p>{{ index + 1}}.  {{ question.Title }}</p>
      </div>

      <div class="input literal">
        <input type="email" v-model="question.Answer" placeholder="請輸入您的 E-mail" />
        <div class="line"></div>
      </div>
    </div>
  `,
  extends: dropdown_literal_date,
});
