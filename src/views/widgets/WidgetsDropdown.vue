<template>
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="primary" :header="header1" :text="title1">
        <!-- <template #default>
          <CDropdown color="transparent p-0" placement="bottom-end">
            <template #toggler-content>
              <CIcon name="cil-settings" />
            </template>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template> -->
        <template #footer>
          <CChartLineSimple
            class="mt-3"
            style="height: 70px"
            background-color="rgba(255,255,255,.2)"
            :data-points="dataPoints1"
            :options="{ elements: { line: { borderWidth: 2.5 } } }"
            point-hover-background-color="warning"
            label="Active"
            labels=""
          />
          
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="info" :header="header2" :text="title2">
        <!-- <template #default>
          <CDropdown color="transparent p-0" placement="bottom-end" :caret="false">
            <template #toggler-content>
              <CIcon name="cil-location-pin" />
            </template>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template> -->
  <template #footer>
          <CChartBarSimple
            class="mt-3 mx-3"
            style="height: 70px"
            :data-points="dataPoints2"
            background-color="rgb(250, 152, 152)"
            label="Recovered"
            labels=""
          />
 
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="warning" :header="header3" :text="title3">
        <!-- <template #default>
          <CDropdown color="transparent p-0" placement="bottom-end">
            <template #toggler-content>
              <CIcon name="cil-settings" />
            </template>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template> -->
        <template #footer>
          <CChartLineSimple
            class="mt-3"
            style="height: 70px"
            background-color="rgba(255,255,255,.2)"
            :data-points="dataPoints3"
            :options="{ elements: { line: { borderWidth: 2.5 } } }"
            point-hover-background-color="warning"
            label="Confirmed"
            labels=""
          />
 
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="danger" :header="header4" :text="title4">
        <!-- <template #default>
          <CDropdown color="transparent p-0" placement="bottom-end">
            <template #toggler-content>
              <CIcon name="cil-settings" />
            </template>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdown>
        </template> -->
        <template #footer>
          <CChartBarSimple
            class="mt-3 mx-3"
            style="height: 70px"
            :data-points="dataPoints4"
            background-color="rgb(250, 152, 152)"
            label="Deceased/Death"
            labels=""
          />
 
        </template>
      </CWidgetDropdown>
    </CCol>
  </CRow>
</template>

<script>
import { CChartLineSimple, CChartBarSimple } from "../charts/index.js";

export default {
  name: "WidgetsDropdown",
  components: { CChartLineSimple, CChartBarSimple },
  props: {
    dataPoints1: {
      type: Array,
    },
     dataPoints2: {
      type: Array,
    },
     dataPoints3: {
      type: Array,
    },
     dataPoints4: {
      type: Array,
    },
    districts: {
      type: Array,
    },
    header1: {
      type: String,
    },
    header2: {
      type: String,
      default: "000",
    },
    header3: {
      type: String,
    },
    header4: {
      type: String,
    },
    title1: {
      type: String,
    },
    title2: {
      type: String,
      default: "000",
    },
    title3: {
      type: String,
    },
    title4: {
      type: String,
    },
  },
  mounted() {
    /*console.log('DropDown Loaded');
    console.log(this.header1);*/
  },
};
</script>
