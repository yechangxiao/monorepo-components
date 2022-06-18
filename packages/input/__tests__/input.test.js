import Input from '../src/input.vue'
import { mount } from '@vue/test-utils'

describe('rb-input', () => {
  test('input-text', () => {
    const wrapper = mount(Input)
    expect(wrapper.html()).toContain('input type="text"')
  })

  test('input-password', () => {
    const wrapper = mount(Input, {
      propsData: {
        type: 'password'
      }
    })
    expect(wrapper.html()).toContain('input type="password"')
  })

  test('input-value', () => {
    const wrapper = mount(Input, {
      propsData: {
        type: 'password',
        value: 'admin'
      }
    })
    expect(wrapper.props('value')).toBe('admin')
  })

  test('input-snapshot', () => {
    const wrapper = mount(Input, {
      propsData: {
        type: 'text',
        value: 'admin'
      }
    })
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})