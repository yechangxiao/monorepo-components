import RbForm from '../'
import RbFormItem from '../../formitem'
import RbInput from '../../input'
import RbButton from '../../button'

export default {
  title: 'RbForm',
  component: RbForm
}

export const Login = () => ({
  components: { RbForm, RbFormItem, RbInput, RbButton },
  template: `
    <rb-form class="form" ref="form" :model="user" :rules="rules">
    <rb-form-item label="用户名" prop="username">
      <!-- <rb-input v-model="user.username"></rb-input> -->
      <rb-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></rb-input>
    </rb-form-item>
    <rb-form-item label="密码" prop="password">
      <rb-input type="password" v-model="user.password"></rb-input>
    </rb-form-item>
    <rb-form-item>
      <rb-button type="primary" @click="login">登 录</rb-button>
    </rb-form-item>
  </rb-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})