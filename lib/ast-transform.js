/* eslint-env node */
'use strict';

const { traverse } = require('@glimmer/syntax');
const UkIcon = require('./build-time-components/uk-icon');

class AstTransform {
  constructor() {
    this.syntax = null;
  }

  transform(ast) {
    traverse(ast, {
      MustacheStatement: node => {
        return this._applyTransform(node);
      },
      BlockStatement: node => {
        return this._applyTransform(node);
      }
    });

    return ast;
  }

  _applyTransform(node) {
    switch (node.path.original) {
      case 'uk-icon':
        return new UkIcon(node).toElement();
    }
  }
}

function buildAstTransform(/* addon */) {
  return class UkTransform extends AstTransform {};
}

module.exports = buildAstTransform;
