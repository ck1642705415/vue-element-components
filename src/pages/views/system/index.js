import AccountRouters from './account'
import RoleRouters from './role'

const systemRouters = [
  {path: 'account/', child: [...AccountRouters]},
  {path: 'role/', child: [...RoleRouters]}
]
export default systemRouters
