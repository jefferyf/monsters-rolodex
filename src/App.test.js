import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App Component', () => {
  afterEach(() => {
    global.fetch.mockClear()
  });

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      return  new Promise((resolve, reject) => {
        resolve({
          ok: true, 
          Id: '123', 
          json: function() { 
            return [
              { id: 123, name: 'Name one'}
            ]
          }
        });
      });
    });
  });

  it('should fetch when component did mount', () => {
    const wrapper = mount(<App />);
    console.log(wrapper.debug());
    expect(global.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users')
  });
}); 