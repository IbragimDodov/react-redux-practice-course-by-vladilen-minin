
import { showAlert } from './actions'
import { CREATE_POST } from './types'

const forbidden = ['some bad word', 'spam']

export function forbiddenWordsMiddleware({dispatch}) {
  return function(next) {
    return function(action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter(w => action.payload.title.includes(w))
        if (found.length) {
          return dispatch(showAlert('Не допустомое слово!'))
        }
      }
      return next(action)
    }
  }
}
