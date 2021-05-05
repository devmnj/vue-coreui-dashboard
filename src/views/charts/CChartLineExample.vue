<template>
  <CChartLine
    :datasets="defaultDatasets"
    labels="months" 
  />
</template>

<script>
import { CChartLine } from '@coreui/vue-chartjs'

export default {
  name: 'CChartLineExample',
  components: { CChartLine },
  props:{
    data:{
      type: Array,
      default:[{
          label: 'Data One',
          backgroundColor: 'rgb(228,102,81,0.9)',
          data: [30, 39, 10, 50, 30, 70, 35]
        },
        {
          label: 'Data Two',
          backgroundColor: 'rgb(200,217,255,0.9)',
          data: [39, 80, 40, 351, 40, 20, 45]
        },
        {
          label: 'Data Three',
          backgroundColor: 'rgb(0,238,275,0.9)',
          data: [39, 80, 40, 35, 40, 20, 45]
        }]
    },
    
  },
  computed: {
    defaultDatasets () {
      return  this.data
    }
  }
}
</script>
