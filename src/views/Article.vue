<template>
  <div>
    <el-card class="box-card">
      <template>
        <el-table :data="cateShow"
                  style="width: 100%">
          <el-table-column type="index">
          </el-table-column>
          <el-table-column label="日期"
                           width="250">
            <template slot-scope="scope">
              <p>{{scope.row.create_date | formate}}</p>
            </template>
          </el-table-column>
          <el-table-column prop="user.nickname"
                           label="姓名"
                           width="180">
          </el-table-column>
          <el-table-column label="类型">
            <template slot-scope="scope">
              <p>{{scope.row.type === 1?'文章':'视频'}}</p>
            </template>
          </el-table-column>
          <el-table-column label="操作"
                           width="180">
            <el-tooltip class="item"
                        content="编辑"
                        placement="top-start">
              <el-button type="primary"
                         icon="el-icon-edit"
                         circle></el-button>
            </el-tooltip>
            <el-tooltip class="item"
                        content="查看"
                        placement="top-start">
              <el-button type="info"
                         icon="el-icon-message"
                         circle></el-button>
            </el-tooltip>
            <el-tooltip class="item"
                        content="查看"
                        placement="top-start">
              <el-button type="danger"
                         icon="el-icon-delete"
                         circle></el-button>
            </el-tooltip>

          </el-table-column>

        </el-table>
        <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="10"
                       :page-sizes="[10, 20, 30, 40]"
                       :page-size="5"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="total">
        </el-pagination>
      </template>
    </el-card>
  </div>
</template>

<script>
import { getCategory, postCategory } from '@/apis/article.js'
export default {
  data () {
    return {
      cateShow: [
        {
          content: '',
          create_date: '',
          type: ''
        }
      ],
      pageSize: 20,
      pageIndex: 1,
      total: 10
    }
  },
  async mounted () {
    let res = await getCategory()
    this.cateShow = res.data.data
    // this.cateShow.total = res.data.total
    let res1 = await postCategory({ pageSize: this.pageSize, pageIndex: this.pageIndex })
    console.log(res)
    console.log(res1)
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
