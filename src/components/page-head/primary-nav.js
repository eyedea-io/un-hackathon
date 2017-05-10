import {connect} from 'zefir/utils'
import Link from '../nav-link'
import Breadcrumbs from '../breadcrumbs'
import upperfirst from 'lodash.upperfirst'

const PrimaryNav = ({
  stores: {boards},
  router: {route: {match: {params}}}
}) => (
  <Breadcrumbs>
    <Link to='/dashboard' exact>Dashboard</Link>

    {boards.item && (
      <Link to={`/b/${boards.item.id}`} exact>{boards.item.name}</Link>
    )}

    {boards.item && params.page && (
      <Link to={`/b/${boards.item.id}/${params.page}`}>
        {upperfirst(params.page)}
      </Link>
    )}
  </Breadcrumbs>
)

export default connect(PrimaryNav)
