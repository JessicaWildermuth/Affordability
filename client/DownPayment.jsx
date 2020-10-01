import React from 'react';
import Styles from './Styled.jsx';
import formatPriceStr from './helpers.js';

const DownPayment = ({ updateMonthlyPayment, max, downPayment, percent, changeColor} ) => (
  <Styles.GridCellBox width="1,1,1,0.33" className="downPayment">
    <Styles.ControlsContainer className="downPaymentController">
      <Styles.ControlInput className="controlInput">
        <Styles.TextContainerBold className="text">
          <label htmlFor="downPayment">Down Payment </label>
        </Styles.TextContainerBold>
          <Styles.DownPaymentWrapper>
            {console.log(max)}
            <Styles.DownPayment className="price" width="112px" id="downPayment" name="price" min="0" max={max} value={`$${formatPriceStr(downPayment)}`}  onChange={updateMonthlyPayment} onClick={changeColor}/>
            <Styles.Percentage className="price" id="downPaymentPercentage" max="30" value={`${Math.trunc(percent)}%`} onChange={updateMonthlyPayment} onClick={changeColor}/>
          </Styles.DownPaymentWrapper>
      </Styles.ControlInput>
        <Styles.SlideContainer className="Slider">
          <Styles.Slider  type="range" min="0" className="price" max={max} value={downPayment} onChange={updateMonthlyPayment} />
        </Styles.SlideContainer>
    </Styles.ControlsContainer>
  </Styles.GridCellBox>
);

export default DownPayment;
