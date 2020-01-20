import { dropdown_literal_date } from '../extends/dropdown_literal_date.js';

export default Vue.component('literal', {
  template: `
    <div class="form-question" v-if="display">
      <div class="question-title">
        <button type="button" class="btn btn-sm btn-outline-success mr-2" @click="edit(question)">編輯</button>
        <span v-if="question.Required" class="badge badge-danger mr-2">必填</span>
        <p>{{ index + 1}}.  {{ question.Title }}</p>
        <p class="edit" :data-key="question.Guid" @click="edit(question)">Edit</p>
      </div>
      
      <div class="input literal">
        <input type="text" v-model="question.Answer" placeholder="您的回答" />
        <div class="line"></div>
      </div>
    </div>
  `,
  extends: dropdown_literal_date,
});
