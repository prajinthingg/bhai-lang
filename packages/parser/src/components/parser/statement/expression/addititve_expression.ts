import Expression from '.';

import { TokenTypes } from '../../../../constants/bhaiLangSpec';
import TokenExecutor from '../../tokenExecutor';

import { ExpressionType } from './constants';


export default class AdditiveExpression extends Expression {
  
  _multiplicativeExpression= Expression.getExpressionImpl(ExpressionType.MultiplicativeExpression).getExpression();

  constructor(tokenExecutor: TokenExecutor ) {
    super(tokenExecutor);
  }

  getExpression() {
    let left: any = this._multiplicativeExpression.getExpression();

    while (this._tokenExecutor.getLookahead()?.type === TokenTypes.ADDITIVE_OPERATOR_TYPE) {
      const operator = this._tokenExecutor.eatTokenAndForwardLookahead(TokenTypes.ADDITIVE_OPERATOR_TYPE);
      const right = this._multiplicativeExpression.getExpression();
      left = {
        type: 'BINARY_EXPRESSION',
        operator: operator.value,
        left,
        right
      }
    }

    return left;
  }
}