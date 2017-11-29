<template lang='pug'>
  .row
    .col-md-12
      h2 Profile
      p Please provide required information.
        br
        span * The use of information collected through our service shall be limited to the purpose of providing the service.
      br
      vue-form-generator(:schema='form.schema' :model='form.model' :options='form.options' @validated="onValidated")
</template>

<script>
  export default {
    data() {
      return {
        form: {
          model: {
            cnic: '',
            name: '',
            fatherName: '',
            genderId: '',
            maritalStatusId: 1,
            religionId: 1,
            nationality: '',
            dob: '',
            birthPlace: '',
            domicileDistrict: '',
            postalCity: '',
            postalTehsil: '',
            postalDistrict: '',
            postalAddress: '',
            mobileNo: '',
            phoneNo: '',
            drivingLicenseId: 1,
            licenseExpiryDate: '',
            achievements: '',
            primeInterestField: '',
            undertaking: '',
            undertakingDate: ''
          },
          schema: {
            groups: [
              {
                legend: 'Basic Information',
                fields: [
                  {
                    model: 'name',
                    type: 'input',
                    inputType: 'text',
                    label: 'Name'
                  },
                  {
                    model: 'fatherName',
                    type: 'input',
                    inputType: 'text',
                    label: 'Father Name'
                  },
                  {
                    model: 'dob',
                    type: 'input',
                    inputType: 'text',
                    label: 'Date Of Birth'
                  },
                  {
                    model: 'maritalStatusId',
                    type: 'select',
                    label: 'Marital Status',
                    values: function() {
                      return [
                        { id: '1', name: 'Single' },
                        { id: '2', name: 'Married' }
                      ]
                    },
                    validator: 'required',
                    hideNoneSelectedText: true
                  },
                  {
                    model: 'cnic',
                    type: 'input',
                    inputType: 'text',
                    label: 'CNIC',
                    readonly: true
                  }
                ]
              },
              {
                legend: 'Contact Details',
                fields: [
                  {
                    model: 'mobileNo',
                    type: 'input',
                    inputType: 'text',
                    label: 'Password'
                  }
                ]
              },
              {
                legend: 'Other',
                fields: [
                  {
                    model: 'achievements',
                    type: 'input',
                    inputType: 'text',
                    label: 'Password'
                  }
                ]
              }
            ]
          },
          options: {
            validateAfterLoad: false,
            validateAfterChanged: true
          }
        }
      }
    }
  }
</script>

<style lang='stylus'>
</style>
