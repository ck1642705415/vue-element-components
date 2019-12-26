const baseUrl = '/app'
const systemBaseUrl = baseUrl + 'system/'
const SystemMenu = [
  {
    title: '账号管理',
    iconName: 'el-icon-location',
    path: systemBaseUrl + 'account'
  },
  {
    title: '角色管理',
    iconName: 'el-icon-location',
    path: systemBaseUrl + 'role'
  }
]
export const Menu = [
  {title: '首页', iconName: 'el-icon-location', path: baseUrl + 'home'},
  {title: '系统管理', path: systemBaseUrl, subMenu: [...SystemMenu]}
]
