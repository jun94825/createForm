import { dropdown_literal_date } from '../extends/dropdown_literal_date.js';

export default Vue.component('dropdown', {
  template: `
    <div class="form-question" v-if="display">
      <div class="question-title">
        <button type="button" class="btn btn-sm btn-outline-success mr-3" @click="edit(question)">編輯</button>
        <span v-if="question.Required" class="badge badge-danger mr-1">必填</span>
        <span v-if="ScoreEnable" class="badge badge-info mr-2">計分</span>
        <h4>{{ index + 1}}.  {{ question.Title }}</h4>
      </div>

      <select v-model="question.Answer">
        <option value="">請選擇</option>
        <option
          v-for="(item, index) in question.Options"
          :key="index"
          :value="item.Guid"
          >{{ item.Value }}</option
        >
      </select>
    </div>
  `,
  extends: dropdown_literal_date,
});
