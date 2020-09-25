import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeToJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import DeskreenStepper from './Stepper';

Enzyme.configure({ adapter: new Adapter() });
jest.useFakeTimers();

it('should match exact snapshot', () => {
  const subject = mount(
    <>
      <ToastProvider placement="top-center">
        <Router>
          <DeskreenStepper />
        </Router>
      </ToastProvider>
    </>
  );
  expect(EnzymeToJson(subject)).toMatchSnapshot();
});
