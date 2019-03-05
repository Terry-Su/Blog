import { ClientListItemRemark } from '@/__typings__/ClientRemark'
import reduxReducerHelper from '@/utils/reduxReducerHelper'

const nameSpace = 'template'

export class TemplateState {
  item
}


export default function template( state: TemplateState, action  ) {
  return reduxReducerHelper( {
    UPDATE_ITEM: ( state, { item } ) => ({ ...state, item })
  }, nameSpace, state, action  )
}



