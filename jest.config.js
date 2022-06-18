module.exports = {
  testMatch: ['**/__tests__/**/*.[jt]s?(x)'],
  moduleFileExtensions: [
    'js',
    'json',
    // 告诉jest处理'*.vue'文件
    'vue'
  ],
  transform: {
    // 用vue-jest处理 *.vue文件
    '.*\\.(vue)$': 'vue-jest',
    // 用babel-jest处理js
    '.*\\.(js)$': 'babel-jest'
  },
  testEnvironment: 'jsdom'
}