import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find, triggerEvent } from 'ember-native-dom-helpers';

describe('Integration | Component | uk sortable', function() {
  setupComponentTest('uk-sortable', {
    integration: true
  });

  it('renders sortable no options', function() {
    this.render(hbs`{{uk-sortable}}`);
    expect(find('.uk-sortable')).to.be.ok;
    expect(find('.uk-sortable').getAttribute('group')).to.equal(null);
    expect(find('.uk-sortable').getAttribute('animation')).to.equal(null);
    expect(find('.uk-sortable').getAttribute('threshold')).to.equal(null);
    expect(find('.uk-sortable').getAttribute('cls-item')).to.equal(null);
    expect(find('.uk-sortable').getAttribute('cls-placeholder')).to.equal(null);
    expect(find('.uk-sortable').getAttribute('cls-drag')).to.equal(null);
    expect(find('.uk-sortable').getAttribute('cls-drag-state')).to.equal(null);
    expect(find('.uk-sortable').getAttribute('cls-base')).to.equal(null);
    expect(find('.uk-sortable').getAttribute('cls-no-drag')).to.equal(null);
    expect(find('.uk-sortable').getAttribute('cls-empty')).to.equal(null);
    expect(find('.uk-sortable').getAttribute('cls-custom')).to.equal(null);
    expect(find('.uk-sortable').getAttribute('handle')).to.equal(null);
  });

  it('sets sortable options', function() {
    this.render(hbs`{{uk-sortable
      group='sncc'
      animationDuration=400
      threshold=0
      clsPlaceholder='parks'
      clsDrag='tubman'
      clsDragState='wells'
      clsBase='scott-king'
      clsNoDrag='angelou'
      clsEmpty='nash'
      clsCustom='bates'
      handle='boynton'
      clsItem='hamer'
    }}`);
    expect(find('.uk-sortable').getAttribute('group')).to.equal('sncc');
    expect(find('.uk-sortable').getAttribute('animation')).to.equal('400');
    expect(find('.uk-sortable').getAttribute('threshold')).to.equal('0');
    expect(find('.uk-sortable').getAttribute('cls-item')).to.equal('hamer');
    expect(find('.uk-sortable').getAttribute('cls-placeholder')).to.equal(
      'parks'
    );
    expect(find('.uk-sortable').getAttribute('cls-drag')).to.equal('tubman');
    expect(find('.uk-sortable').getAttribute('cls-drag-state')).to.equal(
      'wells'
    );
    expect(find('.uk-sortable').getAttribute('cls-base')).to.equal(
      'scott-king'
    );
    expect(find('.uk-sortable').getAttribute('cls-no-drag')).to.equal(
      'angelou'
    );
    expect(find('.uk-sortable').getAttribute('cls-empty')).to.equal('nash');
    expect(find('.uk-sortable').getAttribute('cls-custom')).to.equal('bates');
    expect(find('.uk-sortable').getAttribute('handle')).to.equal('boynton');
  });

  it('has sortable events', async function() {
    this.set('sortStarted', false);
    this.set('sortStopped', false);
    this.set('sortMoved', false);
    this.set('sortAdded', false);
    this.set('sortRemoved', false);
    this.render(
      hbs`{{#uk-sortable
        on-start=(action (mut sortStarted) true)
        on-stop=(action (mut sortStopped) true)
        on-moved=(action (mut sortMoved) true)
        on-added=(action (mut sortAdded) true)
        on-removed=(action (mut sortRemoved) true)
      }}
        <div />
      {{/uk-sortable}}`
    );

    expect(find('.uk-sortable')).to.be.ok;
    expect(this.get('sortStarted')).to.be.false;
    expect(this.get('sortStopped')).to.be.false;
    expect(this.get('sortMoved')).to.be.false;
    expect(this.get('sortAdded')).to.be.false;
    expect(this.get('sortRemoved')).to.be.false;

    await triggerEvent('.uk-sortable', 'start');
    await triggerEvent('.uk-sortable', 'stop');
    await triggerEvent('.uk-sortable', 'moved');
    await triggerEvent('.uk-sortable', 'added');
    await triggerEvent('.uk-sortable', 'removed');

    expect(this.get('sortStarted')).to.be.true;
    expect(this.get('sortStopped')).to.be.true;
    expect(this.get('sortMoved')).to.be.true;
    expect(this.get('sortAdded')).to.be.true;
    expect(this.get('sortRemoved')).to.be.true;
  });
});
