<template>
  <div class="hello">
    <TableC :columns="columns" :tableData="tableData"></TableC>
    <AdvancedSearchC :searchForm="searchForm" :form="form"/>
  </div>
</template>

<script>
  import TableC from "@/components/common/Table";
  import PopConfirmC from "@/components/common/Popconfirm";
  import AdvancedSearchC from "@/components/common/AdvancedSearch";
  import InputC from '@/components/form/Input'
  import SelectC from '@/components/form/Select'

  export default {
    name: "HelloWorld",
    components: {
      TableC: TableC,
      PopConfirmC: PopConfirmC,
      InputC: InputC,
      AdvancedSearchC: AdvancedSearchC,
    },
    data() {
      return {
        columns: [
          {
            prop: "name",
            label: "姓名"
          },
          {
            prop: "age",
            label: "年龄"
          },
          {
            prop: "label",
            label: "标签",
            render: (h, params) => {
              return h("el-tag", {props: {type: "success"}}, params.row.label)
            }
          },
          {
            prop: "",
            label: "操作",
            render: (h, {row}) => {
              return h("span", [
                h('el-button', {props: {type: 'text'}, on: {click: () => this.handleEdit(row)}}, '编辑'),
                h('el-divider', {props: {direction: 'vertical'}}),
                h(PopConfirmC, {props: {title: '确认删除吗？'}, on: {handleConfirm: () => this.handleConfirm()}}, [
                  h('el-button', {props: {type: 'text'}}, '删除')
                ]),
              ]);
            }
          }
        ],
        tableData: [
          {name: "陈开", age: "27", label: "成功"},
          {name: "张三", age: "25", label: "失败"}
        ],
        searchForm: [
          {label: '姓名：', dataIndex: 'username', cmp: InputC,options:{placeholder:'请输入姓名'}},
          {label: '年龄：', dataIndex: 'age', cmp: SelectC,options:{loadType:'ORDER_STATUS'}},
          {label: '性别：', dataIndex: 'sex', cmp: InputC}
        ],
        form: {
          username: '',
          age: '',
          sex: ''
        }
      };
    },
    mounted(){
      console.log('111')
    },
    methods: {
      handleEdit(row) {
        console.log(row)
      },
      handleConfirm() {
        console.log(111)
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
