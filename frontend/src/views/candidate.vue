<template lang='pug'>
  .row
    .col-md-12
      h2 Profile
      p The information collected through our service shall be kept private and limited to the purpose of providing the service.
      pre {{cache}}
      .two-columns
        vue-form-generator(:schema='form.schema' :model='form.model' :options='form.options' @validated="onValidated")
      p Some information regarding the submission
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
            genderId: 1,
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
            primeInterestField: ''
          },
          schema: {
            groups: [
              {
                legend: 'Basic',
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
                    model: 'genderId',
                    type: 'select',
                    label: 'Gender',
                    value: 1,
                    values: [
                      {
                        id: 1,
                        name: 'Male'
                      },
                      {
                        id: 2,
                        name: 'Female'
                      },
                      {
                        id: 3,
                        name: 'Other'
                      }
                    ],
                    validator: 'required',
                    hideNoneSelectedText: true
                  },
                  {
                    model: 'maritalStatusId',
                    type: 'select',
                    label: 'Marital Status',
                    value: 1,
                    values: [
                      {
                        id: '1',
                        name: 'Single'
                      },
                      {
                        id: '2',
                        name: 'Married'
                      }
                    ],
                    validator: 'required',
                    hideNoneSelectedText: true
                  },
                  {
                    model: 'dob',
                    type: 'input',
                    inputType: 'text',
                    label: 'Date Of Birth'
                  },
                  {
                    model: 'birthPlace',
                    type: 'input',
                    inputType: 'text',
                    label: 'Birth Place'
                  },
                  {
                    model: 'domicileDistrict',
                    type: 'input',
                    inputType: 'text',
                    label: 'Domicile District'
                  },
                  {
                    type: 'cleave',
                    autocomplete: true,
                    label: 'CNIC',
                    model: 'cnic',
                    cleaveOptions: {
                      numericOnly: true,
                      blocks: [5, 7, 1],
                      delimiter: '-'
                    },
                    placeholder: '11111-1111111-1',
                    min: 15,
                    max: 15,
                    required: true,
                    validator: ['required', 'string']
                  }
                ]
              },
              {
                legend: 'Contact',
                fields: [
                  {
                    model: 'mobileNo',
                    type: 'input',
                    inputType: 'text',
                    label: 'Mobile Number'
                  },
                  {
                    model: 'phoneNo',
                    type: 'input',
                    inputType: 'text',
                    label: 'Phone Number'
                  },
                  {
                    model: 'postalProvince',
                    type: 'input',
                    inputType: 'text',
                    label: 'Province'
                  },
                  {
                    model: 'postalDistrict',
                    type: 'input',
                    inputType: 'text',
                    label: 'District'
                  },
                  {
                    model: 'postalAddress',
                    type: 'textArea',
                    label: 'Postal Address',
                    rows: 6,
                    max: 512
                  },
                  {
                    model: 'postalCity',
                    type: 'input',
                    inputType: 'text',
                    label: 'City'
                  },
                  {
                    model: 'postalTehsil',
                    type: 'input',
                    inputType: 'text',
                    label: 'Tehsil'
                  }
                ]
              },
              {
                legend: 'Other',
                fields: [
                  {
                    model: 'achievements',
                    type: 'textArea',
                    label: 'Achievements',
                    rows: 5,
                    max: 256
                  },
                  {
                    model: 'primeInterestField',
                    type: 'textArea',
                    label: 'Interests/ Hobbies',
                    rows: 5,
                    max: 256
                  }
                ]
              },
              {
                legend: '',
                fields: [
                  {
                    type: 'submit',
                    buttonText: 'Submit',
                    validateBeforeSubmit: true,
                    onSubmit: this.onSubmit,
                    disabled: this.disableSubmit,
                    fieldClasses: 'btn btn-primary btn-block btn-submit-custom'
                  },
                  {
                    type: 'input',
                    inputType: 'reset',
                    buttonText: 'Cancel',
                    fieldClasses: 'btn btn-default btn-block btn-submit-custom'
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
    },
    computed: {},
    methods: {
      user() {
        return this.$store.getters.user
      }
    }
  }
</script>

<style lang='stylus'>
</style>
