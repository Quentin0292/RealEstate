import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <section id='filter'>
        <div className='inside'>
          <h4>filter</h4>
          <select name='neighbourhood' className='filters neighbourhood'>
            <option value=''>Ridgewood</option>
          </select>
          <select name='housetype' className='filters housetype'>
            <option value=''>Ranch</option>
          </select>
          <select name='bedrooms' className='filters bedrooms'>
            <option value=''>2 BR</option>
          </select>
          <div className='filters price'>
            <span className='title'>Price</span>
            <input type='text' name='min-price' className='min-price' />
            <input type='text' name='max-price' className='max-price' />
          </div>
          <div className='filters floor-space'>
            <span className='title'>Floor Space</span>
            <input
              type='text'
              name='min-floor-space'
              className='min-floor-space'
            />
            <input
              type='text'
              name='max-floor-space'
              className='max-floor-space'
            />
          </div>
          <div className='filters extras'>
            <span className='title'>Extras</span>
            <label htmlFor='extras' className='title'>
              <span>Elevators</span>
              <input type='checkbox' value='elevators' name='extras' />
            </label>
            <label htmlFor='extras' className='title'>
              <span>Swimming Pool</span>
              <input type='checkbox' value='swimming-pool' name='extras' />
            </label>
            <label htmlFor='extras' className='title'>
              <span>Gym</span>
              <input type='checkbox' value='gym' name='extras' />
            </label>
          </div>
        </div>
      </section>
    );
  }
}

export default Filter;
