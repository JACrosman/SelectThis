import * as jsdom from 'jsdom-global';
jsdom();
import * as $ from 'jquery';
import { expect } from 'chai';

import { getExactSelector } from '../src/selectors';

describe('Exact Selector', function() {
    beforeEach(function() {
        $('body').empty();
    });

    it('Should get the selector by id immediately', function() {
        const selector = $('<div id="test"></div>');
        const container = $('<div></div>');
        container.append(selector);
        $('body').append(container);

        expect(getExactSelector(selector.get(0))).to.be.equal('#test');
    });

    it('Should get the selector without an id and parent with id', function() {
        const selector = $('<div class="test test2"></div>');
        const container = $('<div id="test"></div>');
        container.append(selector);
        $('body').append(container);

        expect(getExactSelector(selector.get(0))).to.be.equal('#test > div.test.test2');
    });

    it('Should get the selector by the body', function() {
        const selector = $('<div>');
        const container = $('<div>');
        container.append(selector);
        $('body').append(container);

        expect(getExactSelector(selector.get(0))).to.be.equal('body > div > div');
    });

    it('Should get the selector including the nth-child', function() {
        const selector = $('<li class="test">test3</li>');
        const container = $(`
            <ul id="list1">
                <li class="test">test1</li>
                <li class="test">test2</li>
                <li class="test">test3</li>
            </ul>
        `);
        container.append(selector);
        $('body').append(container);

        expect(getExactSelector(selector.get(0))).to.be.equal('#list1 > li.test:nth-child(4)');
    });
});
