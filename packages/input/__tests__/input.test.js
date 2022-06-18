import Input from '../src/input.vue'
import { mount } from '@vue/test-utils'

describe('rb-input', () => {
  test('input-text', () => {
    const wrapper = mount(Input)
    expect(wrapper.html()).toContain('input type="text"')
  })
})