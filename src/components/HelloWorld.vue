<template>
  <div class="hello">
    <el-form :model="form" label-width="100px" :rules="rules">
      <InputC :form="form" :model="'name'" :prop="'name'" :label="'活动名称：'"/>
      <NumInputC :form="form" :model="'name'" :prop="'name'" :label="'活动名称：'"/>
      <CheckBoxC :form="form" :model="'checkbox'" :label="'活动名称：'" :dataSource="dataSource"/>
      <RadioGroupC :form="form" :model="'radioValue'" :label="'活动名称：'" :dataSource="dataSource"/>
    </el-form>
  </div>
</template>

<script>
import InputC from './form/Input'
import NumInputC from './form/NumInput'
import CheckBoxC from './form/CheckBox'
import RadioGroupC from './form/RadioGroup'

export default {
  name: 'HelloWorld',
  components: {
    InputC: InputC,
    NumInputC: NumInputC,
    CheckBoxC: CheckBoxC,
    RadioGroupC: RadioGroupC,
  },
  data () {
    return {
      form: {
        name: '',
        checkbox:[]
      },
      input: '',
      rules: {
        name: [
          {required: true, message: '请输入活动名称', trigger: 'blur'}
        ]
      },
      dataSource:[
        {name:'111',value:'1'},
        {name:'222',value:'2'},
        {name:'333',value:'3'}
      ],
      radioValue:''
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
