<template>
  <div class="hello">
    <el-form :model="form" label-width="100px" :rules="rules">
      <InputC :form="form" :model="'name'" :prop="'name'" :label="'活动名称：'" />
      <NumInputC :form="form" :model="'name'" :prop="'name'" :label="'活动名称：'" />
      <CheckBoxC :form="form" :model="'checkbox'" :label="'活动名称：'" :dataSource="dataSource" />
      <RadioGroupC :form="form" :model="'radioValue'" :label="'活动名称：'" :dataSource="dataSource" />
      <SelectC :form="form" :model="'aa'" :label="'活动名称：'" :loadType="SELECT_TYPES.ORDER_STATUS" />
      <SelectC
        :form="form"
        :model="'bb'"
        :label="'活动名称：'"
        :loadType="SELECT_TYPES.REAL_NAME_STATUS"
      />
    </el-form>
  </div>
</template>

<script>
import InputC from "@/components/form/Input/index";
import NumInputC from "@/components/form/NumInput/index";
import CheckBoxC from "@/components/form/CheckBox/index";
import RadioGroupC from "@/components/form/RadioGroup/index";
import SelectC from "@/components/form/Select/index";
import { SELECT_TYPES } from "@/constants";
export default {
  name: "HelloWorld",
  components: {
    InputC: InputC,
    NumInputC: NumInputC,
    CheckBoxC: CheckBoxC,
    RadioGroupC: RadioGroupC,
    SelectC: SelectC
  },
  data() {
    return {
      form: {
        name: "",
        checkbox: []
      },
      input: "",
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }]
      },
      dataSource: [
        { name: "111", value: "1" },
        { name: "222", value: "2" },
        { name: "333", value: "3" }
      ],
      radioValue: "",
      SELECT_TYPES: SELECT_TYPES,
      aa: "",
      bb: ""
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
