import systemRoutes from './system/index'

const routes = [
  {path: 'system/', child: [...systemRoutes]}
]
export default routes
