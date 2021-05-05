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
    <!-- <CRow>
      <CCol md="12">
        <CCard>
          <CCardHeader> Today </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12" lg="6">
                <CRow>
                  <CCol sm="6">
                    <CCallout color="info">
                      <small class="text-muted">Positive</small><br />
                      <strong class="h4">9,123</strong>
                    </CCallout>
                  </CCol>
                  <CCol sm="6">
                    <CCallout color="danger">
                      <small class="text-muted">Negative</small><br />
                      <strong class="h4">22,643</strong>
                    </CCallout>
                  </CCol>
                </CRow>
               </CCol>
              <CCol sm="12" lg="6">
                <CRow>
                  <CCol sm="6">
                    <CCallout color="warning">
                      <small class="text-muted">Unconfirmed</small><br />
                      <strong class="h4">78,623</strong>
                    </CCallout>
                  </CCol>
                  <CCol sm="6">
                    <CCallout color="success">
                      <small class="text-muted">Total Tests</small><br />
                      <strong class="h4">49,123</strong>
                    </CCallout>
                  </CCol>
                </CRow>
            
              </CCol>
            </CRow> -->
            <br />
            <!-- <CDataTable
              class="mb-0 table-outline"
              hover
              :items="tableItems"
              :fields="tableFields"
              head-color="light"
              no-sorting
            > -->
              <!-- <td slot="avatar" class="text-center" slot-scope="{ item }">
                <div class="c-avatar">
                  <img :src="item.avatar.url" class="c-avatar-img" alt="" />
                  <span
                    class="c-avatar-status"
                    :class="`bg-${item.avatar.status || 'secondary'}`"
                  ></span>
                </div>
              </td>
              <td slot="user" slot-scope="{ item }">
                <div>{{ item.user.name }}</div>
                <div class="small text-muted">
                  <span>
                    <template v-if="item.user.new">New</template>
                    <template v-else>Recurring</template>
                  </span>
                  | Registered: {{ item.user.registered }}
                </div>
              </td>
              <td slot="country" slot-scope="{ item }" class="text-center">
                <CIcon :name="item.country.flag" height="25" />
              </td>
              <td slot="usage" slot-scope="{ item }">
                <div class="clearfix">
                  <div class="float-left">
                    <strong>{{ item.usage.value }}%</strong>
                  </div>
                  <div class="float-right">
                    <small class="text-muted">{{ item.usage.period }}</small>
                  </div>
                </div>
                <CProgress
                  class="progress-xs"
                  v-model="item.usage.value"
                  :color="color(item.usage.value)"
                />
              </td>
              <td slot="payment" slot-scope="{ item }" class="text-center">
                <CIcon :name="item.payment.icon" height="25" />
              </td>
              <td slot="activity" slot-scope="{ item }">
                <div class="small text-muted">Last login</div>
                <strong>{{ item.activity }}</strong>
              </td>
            </CDataTable> -->
          </CCardBody>
        </CCard>
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
      data: [],
    
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
 
      return { act: a, con: c, rec: r, dec: d,clist:_c,alist:_a,rlist:_r,dlist:_d,coll:coll};
    },
     
  },
};
</script>
