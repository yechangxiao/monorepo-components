import RbLink from '../src/link.vue'

export default {
  title: 'RbLink',
  component: RbLink
}

export const Link = _ => ({
  components: { RbLink },
  template: `
    <div>
      <rb-link :disabled="true" href="https://www.baidu.com">百度</rb-link>
    </div>
  `
})