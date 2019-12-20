<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-row :gutter="20" style="background-color:#f9f9f9;padding: 10px 10px 0 0;box-sizing: border-box">
      <template v-for="item in searchForShow">
        <el-col :span="6">
          <renderComponents
            :form="form"
            :label="item.label"
            :dataIndex="item.dataIndex"
            :cmp="item.cmp"
            :prop="item.prop"
            :options="item.options"
            :render="{render: (h, params) => {
              return h(params.cmp, {props: {...params}})
            }}"
          />
        </el-col>
      </template>
      <el-col :span="6" style="text-align: right;float: right;">
        <el-button type="primary" size="medium" @click="onSearch">搜索</el-button>
        <el-button type="default" size="medium" @click="resetForm('form')">重置</el-button>
        <span style="color: #409EFF;cursor: pointer;margin-left: 10px" v-if="searchForm.length>3"
              @click="changeSearchType">
          <span style="font-size: 14px">{{searchType==='simple'?'高级搜索':'简易搜索'}}</span>
          <i :class="searchType==='simple'?'el-icon-caret-bottom':'el-icon-caret-top'"></i>
        </span>
      </el-col>
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
      return {
        searchType: 'simple', // 搜索类型，可选类型simple / advanced
      }
    },
    computed: {
      searchForShow() {
        if (this.searchForm.length <= 3) {
          return this.searchForm
        } else {
          const [first, second, third] = this.searchForm
          return this.searchType === 'simple' ? [first, second, third] : this.searchForm
        }
      }
    },
    methods: {
      changeSearchType() {
        const [first, second, third, ...rest] = this.searchForm
        if (this.searchType === 'advanced') {
          [...rest].map(item => {
            this.form[item.dataIndex] = undefined
          })
        }
        this.searchType = this.searchType === 'simple' ? 'advanced' : 'simple'
      },
      onSearch() {
        this.$emit('handleSearch', this.form)
      },
      resetForm(form) {
        this.$refs[form].resetFields()
      }
    }
  }
</script>
<style scoped>
  .el-form-item {
    margin-bottom: 10px !important;
  }
  /deep/ .el-form-item__content{
    /*line-height: 0 !important;*/
  }
  /deep/ .el-input--medium .el-input__icon{
    line-height: 40px !important;
  }
  /deep/ .el-input--small .el-input__icon{
    line-height: 40px !important;
  }
  .el-row {
    margin-bottom: 0;
  }
</style>
