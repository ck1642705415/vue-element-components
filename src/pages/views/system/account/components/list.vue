<template>
  <WrapperC>
    <!--<AdvancedSearchC :searchForm="searchForm" :form="form"/>-->
    <TableC :columns="columns" :tableData="tableData"/>
  </WrapperC>
</template>

<script>
  export default {
    name: "list",
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
        tableData: [],
        // searchForm: [
        //   {label: '姓名：', dataIndex: 'username', cmp: InputC, options: {placeholder: '请输入姓名'}},
        //   {
        //     label: '年龄：',
        //     dataIndex: 'age',
        //     cmp: SelectC,
        //     options: {loadType: SELECT_TYPES.ORDER_STATUS}
        //   },
        //   {
        //     label: '年龄：',
        //     dataIndex: 'aa',
        //     cmp: SelectC,
        //     options: {loadType: SELECT_TYPES.ORDER_STATUS}
        //   },
        //   {
        //     label: '年龄：',
        //     dataIndex: 'bb',
        //     cmp: SelectC,
        //     options: {loadType: SELECT_TYPES.ORDER_STATUS}
        //   },
        //   {
        //     label: '年龄：',
        //     dataIndex: 'cc',
        //     cmp: DatePickerC,
        //     options: {type: 'month'}
        //   },
        // ],
        form: {
          username: undefined,
          age: undefined,
          aa: undefined,
          bb: undefined,
          cc: undefined
        }
      }
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>
