<template lang='pug'>
  .row
    .col-md-12
      h2 Prpfile
      p Please provide required information.
      span * The use of information collected through our service shall be limited to the purpose of providing the service for which our Clients have engaged us.
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
          schema: {},
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
