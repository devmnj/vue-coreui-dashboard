<template>
  <div>
    <WidgetsDropdown
      :header1="state_status['act']"
      title1="Active"
      :header2="state_status['rec']"
      title2="Recovered"
      :header3="state_status['conf']"
      title3="Confirmed"
      :header4="state_status['dec']"
      title4="Deaths"
      :dataPoints1="dist_status['act']"
      :dataPoints2="dist_status['con']"
      :dataPoints3="dist_status['rec']"
      :dataPoints4="dist_status['dec']"
    />


    
    <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="5">
            <h4 id="traffic" class="card-title mb-0">Covid Spreading Among Districts</h4>
            <div class="small text-muted">November 2017</div>
          </CCol>
          <CCol sm="7" class="d-none d-md-block">
            <CButton color="primary" class="float-right">
              <CIcon name="cil-cloud-download" />
            </CButton>
          </CCol>
        </CRow>
        <StateChart
          :labels="dist_status['name']"
          :active="dist_status['act']"
          :confirmed="dist_status['con']"
          :recovered="dist_status['rec']"
          style="height: 300px; margin-top: 40px"
        />
      </CCardBody>
      <!-- <CCardFooter>
        <CRow class="text-center">
          <CCol md sm="12" class="mb-sm-2 mb-0">
            <div class="text-muted">Visits</div>
            <strong>29.703 Users (40%)</strong>
            <CProgress
              class="progress-xs mt-2"
              :precision="1"
              color="success"
              :value="40"
            />
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
            <div class="text-muted">Unique</div>
            <strong>24.093 Users (20%)</strong>
            <CProgress class="progress-xs mt-2" :precision="1" color="info" :value="20" />
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0">
            <div class="text-muted">Pageviews</div>
            <strong>78.706 Views (60%)</strong>
            <CProgress
              class="progress-xs mt-2"
              :precision="1"
              color="warning"
              :value="60"
            />
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0">
            <div class="text-muted">New Users</div>
            <strong>22.123 Users (80%)</strong>
            <CProgress
              class="progress-xs mt-2"
              :precision="1"
              color="danger"
              :value="80"
            />
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
            <div class="text-muted">Bounce Rate</div>
            <strong>Average Rate (40.15%)</strong>
            <CProgress class="progress-xs mt-2" :precision="1" :value="40" />
          </CCol>
        </CRow>
      </CCardFooter> -->
    </CCard>
    <!-- <WidgetsBrand /> -->
     <CCardGroup columns class="card-columns cols-2">
          <CCard>
        <CCardHeader>
         Infectted V/s Recoved
          
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
          data: [state_status['conf'],state_status['rec']]
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
          data: [state_status['conf'],state_status['dec']]
        }
      ]"
      :labels="[ 'Positive', 'Deaceased' ]"
       />
        </CCardBody>
      </CCard>

      

</CCardGroup>
      <CCol sm="12">
        <CTableWrapper
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
    </CRow>
    
            
           
      </CCol>
    </CRow>
  </div>
</template>

<script>
import StateChart from "./charts/StateChart";
import WidgetsDropdown from "./widgets/WidgetsDropdown";
import WidgetsBrand from "./widgets/WidgetsBrand";
import CTableWrapper from "./base/Table.vue";
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
    CChartPie
    // CChartLineExample,
  },
  data() {
    return {
      stateNames: [],
      selected: "Month",
      slug: "",
      data: [],
      tests: [],
      tableItems: [
        {
          avatar: { url: "img/avatars/1.jpg", status: "success" },
          user: { name: "Yiorgos Avraamu", new: true, registered: "Jan 1, 2015" },
          country: { name: "USA", flag: "cif-us" },
          usage: { value: 50, period: "Jun 11, 2015 - Jul 10, 2015" },
          payment: { name: "Mastercard", icon: "cib-cc-mastercard" },
          activity: "10 sec ago",
        },
        {
          avatar: { url: "img/avatars/2.jpg", status: "danger" },
          user: { name: "Avram Tarasios", new: false, registered: "Jan 1, 2015" },
          country: { name: "Brazil", flag: "cif-br" },
          usage: { value: 22, period: "Jun 11, 2015 - Jul 10, 2015" },
          payment: { name: "Visa", icon: "cib-cc-visa" },
          activity: "5 minutes ago",
        },
        {
          avatar: { url: "img/avatars/3.jpg", status: "warning" },
          user: { name: "Quintin Ed", new: true, registered: "Jan 1, 2015" },
          country: { name: "India", flag: "cif-in" },
          usage: { value: 74, period: "Jun 11, 2015 - Jul 10, 2015" },
          payment: { name: "Stripe", icon: "cib-stripe" },
          activity: "1 hour ago",
        },
        {
          avatar: { url: "img/avatars/4.jpg", status: "" },
          user: { name: "Enéas Kwadwo", new: true, registered: "Jan 1, 2015" },
          country: { name: "France", flag: "cif-fr" },
          usage: { value: 98, period: "Jun 11, 2015 - Jul 10, 2015" },
          payment: { name: "PayPal", icon: "cib-paypal" },
          activity: "Last month",
        },
        {
          avatar: { url: "img/avatars/5.jpg", status: "success" },
          user: { name: "Agapetus Tadeáš", new: true, registered: "Jan 1, 2015" },
          country: { name: "Spain", flag: "cif-es" },
          usage: { value: 22, period: "Jun 11, 2015 - Jul 10, 2015" },
          payment: { name: "Google Wallet", icon: "cib-google-pay" },
          activity: "Last week",
        },
        {
          avatar: { url: "img/avatars/6.jpg", status: "danger" },
          user: { name: "Friderik Dávid", new: true, registered: "Jan 1, 2015" },
          country: { name: "Poland", flag: "cif-pl" },
          usage: { value: 43, period: "Jun 11, 2015 - Jul 10, 2015" },
          payment: { name: "Amex", icon: "cib-cc-amex" },
          activity: "Last week",
        },
      ],
      tableFields: [
        { key: "avatar", label: "", _classes: "text-center" },
        { key: "user" },
        { key: "country", _classes: "text-center" },
        { key: "usage" },
        { key: "payment", label: "Payment method", _classes: "text-center" },
        { key: "activity" },
      ],
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
      return this.shuffleArray(this.dist_status["coll"].slice(0));
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
    console.log("Dashboard Created");
  },
  mounted() {
    this.$store.dispatch('FETCH_DATA')  
    this.stateNames = this.$store.getters.GET_STATES;
    this.slug = this.$route.params.slug;
    this.$store.state.title=this.slug;
    this.data = this.$store.state.data[this.slug]["districtData"];
   
    // console.log(this.tests);
    console.log("Dashboard Mounted[State]");
  },

  computed: {
    test_today_status(){
      var tdata= Object.entries(this.tests);
      var p=0;
      var n=0;
      var u=0;
      var tt=0;      
      // var today= tdata.filter( test =>
      //      test
      //           )
      return tt; 
    },
    dist_status() {
      var dist = Object.entries(this.data);
      var dp = [];
      var a = [];
      var c = [];
      var r = [];
      var n = [];
      var d = [];
      var coll = [];
      dist.forEach((element) => {
        a.push(element[1]["active"]);
        c.push(element[1]["confirmed"]);
        r.push(element[1]["recovered"]);
        d.push(element[1]["deceased"]);
        coll.push({
          district: element[0],
          active: element[1]["active"],
          confirmed: element[1]["confirmed"],
          recovered: element[1]["recovered"],
          deceased: element[1]["deceased"],
        });
        n.push(element[0]);
      });

      return { name: n, act: a, con: c, rec: r, dec: d, coll: coll };
    },
    state_status() {
      var dist = Object.entries(this.data);
      var a = 0;
      var c = 0;
      var d = 0;
      var r = 0;
      dist.forEach((element) => {
        // console.log(element);
        a += element[1]["active"];
        c += element[1]["confirmed"];
        r += element[1]["recovered"];
        d += element[1]["deceased"];
      });
      // console.log("Active:" + a);
      return { act: String(a), conf: String(c), rec: String(r), dec: String(d) };
    },
  },
};
</script>
