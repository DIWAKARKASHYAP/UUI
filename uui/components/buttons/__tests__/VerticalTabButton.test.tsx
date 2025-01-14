import React from 'react';
import { VerticalTabButton } from '../VerticalTabButton';
import { renderer } from '@epam/uui-test-utils';
import { ReactComponent as calendarIcon } from '../../../icons/calendar-18.svg';

describe('VerticalTabButton', () => {
    it('should be rendered correctly', () => {
        const tree = renderer.create(<VerticalTabButton />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should be rendered correctly with props', () => {
        const tree = renderer.create(<VerticalTabButton onClick={ jest.fn } icon={ calendarIcon } isDisabled={ false } withNotify={ true } />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
