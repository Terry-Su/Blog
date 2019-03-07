import reduxReducerHelper from '@/state/reduxReducerHelper'

const nameSpace = "article"

export class ArticleState {
  availableDisqusComment: boolean = false
}

export default function article( state: ArticleState, action ) {
  return reduxReducerHelper(
    {
      ENSURE_DISQUS_COMMENT_AVAILABLE: state => ( {
        ...state,
        availableDisqusComment: true
      } ),
      DENY_DISQUS_COMMENT_AVAILABLE: state => ( {
        ...state,
        availableDisqusComment: false
      } )
    },
    nameSpace,
    state,
    action
  )
}
