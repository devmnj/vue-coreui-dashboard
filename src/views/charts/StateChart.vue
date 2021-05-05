<template>
  <CChartLine
    :datasets="defaultDatasets"
    :options="defaultOptions"
    :labels="labels"
  />
</template>

<script>
import { CChartLine } from '@coreui/vue-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils/src'

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default {
  name: 'StateChart',
  components: {
    CChartLine
  },
  props:{
    labels: {
      type: Array
    },
    active:{
      type:Array,
    },
    recovered:{
      type:Array,
    },
    confirmed:{
      type:Array,
    },
  },
  mounted() {
    // console.log("Labels are");
    // console.log(this.labels);
  },
  computed: {
    defaultDatasets () {
      const brandSuccess = getStyle('success2') || '#4dbd74'
      const brandInfo = getStyle('info') || '#20a8d8'
      const brandDanger = getStyle('danger') || '#f86c6b'

      let elements = 27
    
      return [
        {
          label: 'Active',
          backgroundColor: hexToRgba(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: brandInfo,
          borderWidth: 2,
          data: this.active
        },
        {
          label: 'Recovered',
          backgroundColor: 'transparent',
          borderColor: brandSuccess,
          pointHoverBackgroundColor: brandSuccess,
          borderWidth: 2,
          data: this.recovered
        },
        {
          label: 'Confirmed',
          backgroundColor: 'transparent',
          borderColor: brandDanger,
          pointHoverBackgroundColor: brandDanger,
          borderWidth: 1,
          borderDash: [8, 5],
          data: this.confirmed
        }
      ]
    },
    defaultOptions () {
      return {

        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: false
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 11,
              stepSize: Math.ceil(250 / 5),
              max: Math.max.apply(null,this.recovered) 
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        }
      }
    }
  }
}
</script>
