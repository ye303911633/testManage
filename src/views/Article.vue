<template>
  <div>
    <template>
      <el-table :data="cateList"
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
    </template>
  </div>
</template>

<script>
import { getCategory } from '@/apis/article.js'
export default {
  data () {
    return {
      cateList: [
        {
          content: '',
          create_date: '',
          type: ''
        }
      ]
    }
  },
  async mounted () {
    let res = await getCategory()
    this.cateList = res.data.data
    console.log(res)
  }
}
</script>

<style lang="less" scoped>
</style>
