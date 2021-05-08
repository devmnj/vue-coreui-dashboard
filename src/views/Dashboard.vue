<template>
  <div>
    <WidgetsDropdown
      :header1="String(get_status['act'])"
      title1="Active"
      :header2="String(get_status['rec'])"
      title2="Recovered"
      :header3="String(get_status['con'])"
      title3="Confirmed"
      :header4="String(get_status['dec'])"
      title4="Deaths"
      :dataPoints1="get_status['alist']"
      :dataPoints2="get_status['clist']"
      :dataPoints3="get_status['rlist']"
      :dataPoints4="get_status['dlist']"
    />


    
    <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="5">
            <h4 id="traffic" class="card-title mb-0">Covid Spreading Among States</h4>
            <div class="small text-muted"></div>
          </CCol>
          <CCol sm="7" class="d-none d-md-block">
            <CButton color="primary" class="float-right">
              <CIcon name="cil-cloud-download" />
            </CButton>
          </CCol>
        </CRow>
        <StateChart
          :labels="stateNames"
          :active="get_status['alist']"
          :confirmed="get_status['clist']"
          :recovered="get_status['rlist']"
          style="height: 300px; margin-top: 40px"
        />
      </CCardBody>
     
    </CCard>
    <!-- <WidgetsBrand /> -->
     <CCardGroup columns class="card-columns cols-2">
          <CCard>
        <CCardHeader>
          
          <CCol>Infected V/s Recoverd </CCol>
          
          
        </CCardHeader>
        <CCardBody>
          <CChartDoughnut
      :datasets=" [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16'
          ],
          data: [get_status['con'],get_status['rec']]
        }
      ]"
      :labels="[ 'Positive', 'Recovered' ]"
       />
        </CCardBody>
      </CCard>
     <CCard>
        <CCardHeader>
         Infectted V/s Deceased
          
        </CCardHeader>
        <CCardBody>
          <CChartPie
      :datasets=" [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16'
          ],
          data: [get_status['con'],get_status['dec']]
        }
      ]"
      :labels="[ 'Positive', 'Deaceased' ]"
       />
        </CCardBody>
      </CCard>

      

</CCardGroup>

      <CCol
        CCol sm="12">
        <!-- <CTableWrapper
          :items="getShuffledUsersData()"
          hover
          striped
          border
          small
          fixed
          dark
          caption="District infection Statistics"
        /> -->
         <FTable
          :items="getShuffledUsersData()"
          hover
          striped
          border
          small
          fixed
          dark
          caption="District infection Statistics"
        />
      </CCol>
   
    
       
  </div>
</template>

<script>
import StateChart from "./charts/StateChart";
import WidgetsDropdown from "./widgets/WidgetsDropdown";
import WidgetsBrand from "./widgets/WidgetsBrand";
import CTableWrapper from "./base/Table.vue";
import FTable from './custom_components/FTable.vue'
// import CChartLineExample from './charts/CChartLineExample'
import { CChartDoughnut ,CChartPie} from '@coreui/vue-chartjs'
export default {
  name: "StateDashBoard",

  components: {
    StateChart,
    WidgetsDropdown,
    WidgetsBrand,
    CTableWrapper,
    CChartDoughnut ,
    CChartPie,
    FTable
    // CChartLineExample,
  },
  data() {
    return {
      stateNames: [],
      selected: "Month",     
      data: [],
      don_searchText:'',
      pie_searchText:'',
     
    };
  },
   
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    },

    getShuffledUsersData() {
      return this.shuffleArray(this.get_status["coll"].slice(0));
    },
    color(value) {
      let $color;
      if (value <= 25) {
        $color = "info";
      } else if (value > 25 && value <= 50) {
        $color = "success";
      } else if (value > 50 && value <= 75) {
        $color = "warning";
      } else if (value > 75 && value <= 100) {
        $color = "danger";
      }
      return $color;
    },
  },
  created() {
     this.$store.dispatch('FETCH_DATA')  
    console.log("Dashboard Created");
  },
  mounted() {
  
    this.stateNames = this.$store.getters.GET_STATES;     
    this.data = this.$store.state.data 
    this.$store.state.title="ALL INDIA";
    //console.log(this.stateNames);
    console.log("Dashboard Mounted[State]");
  },

  computed: {
     
    get_status() {
      var a = 0;
      var c = 0;
      var r = 0;      
      var d = 0;
      var _a = [];
      var _c = [];
      var _r = [];      
      var _d = [];
      var coll=[];
      this.stateNames.forEach((sname)=>{
      var dist= Object.entries(this.data[sname]['districtData'])
          a=c=r=d=0;
           dist.forEach((el)=>{
           a+=el[1]["active"];
           c+=el[1]["confirmed"];
           r+=el[1]["recovered"];
           d+=el[1]["deceased"];
           });
          _a.push(a);
          _c.push(c);
          _r.push(r);
          _d.push(d);

          coll.push({
            'district': sname,
            'active': a,
            'confirmed':c,
            'recovered':r,
            'deceased': d,
          });
       });
        this.stateList =  coll;
      return { act: a, con: c, rec: r, dec: d,clist:_c,alist:_a,rlist:_r,dlist:_d,coll:coll};
    },
     
  },
};
</script>
