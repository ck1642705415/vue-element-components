<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-row :gutter="20">
      <template v-for="item in searchForm">
        <el-col :span="6">
          <renderComponents
            :form="form"
            :label="item.label"
            :dataIndex="item.dataIndex"
            :cmp="item.cmp"
            :options="item.options"
            :render="{render: (h, params) => {
              return h(params.cmp, {props: {...params}})
            }}"
          />
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>
<script>
  export default {
    name: 'AdvancedSearchC',
    components: {
      renderComponents: {
        functional: true,
        props: {
          form: Object,
          label: String,
          dataIndex: String,
          options: Object,
          cmp: Object,
          render: Object
        },
        render: (h, ctx) => {
          const params = {
            form: ctx.props.form,
            label: ctx.props.label,
            dataIndex: ctx.props.dataIndex,
            cmp: ctx.props.cmp,
            ...ctx.props.options
          };
          return ctx.props.render.render(h, params);
        }
      }
    },
    props: {
      form: {type: Object},
      searchForm: {type: Array, default: []},
    },
    data() {
      return {}
    },
    mounted() {
      console.log('222')
    },
    methods: {

    }
  }
</script>
<style scoped>
  .el-form-item {
    margin-bottom: 10px !important;
  }

  .el-row {
    margin-bottom: 0;
  }

  .el-col {
    margin-bottom: 10px;
  }
</style>
