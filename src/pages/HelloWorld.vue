<template>
  <div class="hello">
    <TableC :columns="columns" :tableData="tableData"></TableC>
  </div>
</template>

<script>
  import DatePicker from "@/components/form/DatePicker";
  import RangePicker from "@/components/form/RangePicker";
  import SwitchC from "@/components/form/Switch";
  import TableC from "@/components/common/Table";

  export default {
    name: "HelloWorld",
    components: {
      DatePicker: DatePicker,
      RangePicker: RangePicker,
      SwitchC: SwitchC,
      TableC: TableC
    },
    data() {
      return {
        columns: [
          {
            prop: "name",
            label: "姓名",
            formatter: row => {
              return `<span>${row.name}</span>`;
            }
          },
          {
            prop: "age",
            label: "年龄",
            formatter: row => {
              return `<span>${row.age}</span>`;
            }
          },
          {
            prop: "label",
            label: "标签",
            render: (h, params) => {
              return h(
                "el-tag",
                {
                  props: {type: "success"} // 组件的props
                },
                params.row.label
              );
            }
          },
          {
            prop: "",
            label: "操作",
            formatter: row => {
              return `
              <a href="#" @click="handleEdit(row)">编辑</a>
              <span class="driver-line"></span>
              <a href="#">删除</a>
            `;
            }
          }
        ],
        tableData: [
          {name: "陈开", age: "27", label: "成功"},
          {name: "张三", age: "25", label: "失败"}
        ]
      };
    },
    methods: {
      handleEdit(row) {
        console.log(row)
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
