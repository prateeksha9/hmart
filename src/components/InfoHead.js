import React from 'react';
import { InfoHeading } from '.';
import MobileInfo from './MobileInfo';

function InfoHead(props) {
  return (
    <div className=" infoHead">
      {window.innerWidth > 550 ? <InfoHeading /> : <MobileInfo />}
    </div>
  );
}

export default InfoHead;
