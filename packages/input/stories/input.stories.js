import RbInput from '../'

export default {
  title: 'RbInput',
  component: RbInput
}

export const Text = () => ({
  components: { RbInput },
  template: '<rb-input v-model="value"></rb-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { RbInput },
  template: '<rb-input type="password" v-model="value"></rb-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})