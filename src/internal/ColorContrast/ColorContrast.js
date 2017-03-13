import React, { Component, PropTypes } from 'react';

class ColorContrast extends Component {

  render() {
    const normalTextImage = require('../../content/style/color/images/normal-text-icon.png');
    const largeTextImage = require('../../content/style/color/images/large-text-icon.png');
    const ui1 = require('../../content/style/color/images/ui-01.png');
    const ui2 = require('../../content/style/color/images/ui-02.png');
    const ui3 = require('../../content/style/color/images/ui-03.png');

    return (
      <div className="color-contrast">
        <p>All type color combinations on Bluemix must pass WCAG AA standards of 4.5 : 1.
          In the table below are approved color combinations.</p>
        <ul className="color-contrast__keys">
          <li>
            <img alt="normal text icon" src={normalTextImage} />
            <p>Normal Text</p>
          </li>
          <li>
            <img alt="large text icon" src={largeTextImage} />
            <p>Large Text: <span>18px bold or larger</span></p>
          </li>
        </ul>
        <ul className="color-contrast__examples">
          <li>
            <h4>Type colors</h4>
            <ul className="color-contrast__examples--type-colors">
              <li className="blue-40">
                <div></div>
                <div>
                  <p>brand-02</p>
                  <p>#5596e6</p>
                </div>
              </li>
              <li className="blue-51">
                <div></div>
                <div>
                  <p>brand-01</p>
                  <p>#3d70b2</p>
                </div>
              </li>
              <li className="navy-gray-6">
                <div></div>
                <div>
                  <p>text-02</p>
                  <p>#5a6872</p>
                </div>
              </li>
              <li className="blue-90">
                <div></div>
                <div>
                  <p>text-01</p>
                  <p>#152935</p>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <h4>Background colors</h4>
            <ul className="color-contrast__examples--bg-colors">
              <li className="ui-01">
                <img src={ui1} alt="ui-01" />
                <p>ui-01</p>
                <p>#ffffff</p>
              </li>
              <li className="ui-02">
                <img src={ui2} alt="ui-02" />
                <p>ui-02</p>
                <p>#f5f7fa</p>
              </li>
              <li className="ui-03">
                <img src={ui3} alt="ui-03" />
                <p>ui-03</p>
                <p>#f0f3f6</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default ColorContrast;
