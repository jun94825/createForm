import { dropdown_literal_date } from '../extends/dropdown_literal_date.js';

export default Vue.component('date', {
  template: `
    <div class="form-question" v-if="display">
      <div class="question-title">
        <button type="button" class="btn btn-sm btn-outline-success mr-2" @click="edit(question)">編輯</button>
        <span v-if="question.Required" class="badge badge-danger mr-2">必填</span>
        <p>{{ index + 1}}.  {{ question.Title }}</p>
      </div>
      
      <div class="input literal">
        <input type="date" class="date form-control" v-model="question.Answer" />
      </div>
    </div>
  `,
  extends: dropdown_literal_date,
});
