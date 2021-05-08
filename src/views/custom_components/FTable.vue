<template>
  <CCard>
    <CCardHeader>
      <slot name="header">
      <CRow>
      <CCol>
        <CIcon name="cil-grid"/> {{caption}}  
      </CCol>
      <CCol>
        <CInput v-model="searchText" type="text" placeholder="Search"/>
      </CCol>
        </CRow>
      </slot>
    </CCardHeader>
    <CCardBody>
      <CDataTable
        :hover="hover"
        :striped="striped"
        :border="border"
        :small="small"
        :fixed="fixed"
        :items="this.searchText ? items.filter(e=> e.district.toLowerCase() === this.searchText.toLowerCase()) : items"
        :fields="fields"
        :items-per-page="small ? 10 : 5"
        :dark="dark"
        pagination
      >
        <template #status="{item}">
          <td>
            <CBadge :color="getBadge(item.status)">{{item.status}}</CBadge>
          </td>
        </template>
      </CDataTable>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  name: 'FTable',
  data() {
     return {searchText:''}
  },
   
  props: {
    items: Array,
    fields: {
      type: Array,
      default () {
        return ['district', 'active', 'confirmed','recovered']
      }
    },
    caption: {
      type: String,
      default: 'Table'
    },
    hover: Boolean,
    striped: Boolean,
    border: Boolean,
    small: Boolean,
    fixed: Boolean,
    dark: Boolean
  },
  methods: {
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    }
  }
}
</script>
