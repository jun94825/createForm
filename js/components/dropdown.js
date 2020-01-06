import { dropdown_literal_date } from '../extends/dropdown_literal_date.js';

export default Vue.component('dropdown', {
  template: `
    <div class="form-question" v-if="display">
      <div class="question-title" @mousemove="showEdit(question.Guid)" @mouseout="hideEdit(question.Guid)">
        <p class="required" v-if="question.Required">*</p>
        <h4>{{ index + 1}}.  {{ question.Title }}</h4>
        <p class="edit" :data-key="question.Guid" @click="edit(question)">Edit</p>
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
