import * as jsdom from 'jsdom-global';
jsdom();
import * as $ from 'jquery';
import { expect } from 'chai';

import { getIdSelector, getClassSelectors, getTagSelector, getNthChildSelector } from '../src/accessors';


const divElement = $(`
    <div>
        <div id="so1"></div>
        <div id="so2"></div>
        <div id="so3" class="test1 test2 test3 ">test</div>
    </div>
`).find('#so3').get(0);

describe('Accessors', function() {
    beforeEach(function() {
    });

    it('Should get the id selector of an element', function() {
        expect(getIdSelector(divElement)).to.be.equal('#so3');
    });

    it('Should get the class selectors of an element', function() {
        expect(getClassSelectors(divElement)).to.be.eql(['.test1', '.test2', '.test3']);
    });

    it('Should get the tag selector of an element', function() {
        expect(getTagSelector(divElement)).to.be.eql('div');
    });

    it('Should get the nth-child selector of an element', function() {
        expect(getNthChildSelector(divElement)).to.be.eql(':nth-child(3)');
    });
});
