import React from 'react';
import '../assets/scss/main.scss';
import News from './News';

class Carousel extends React.Component {

  public render() {
    return (
      <div id='enveloped' className="container-xxl">
        <div id="leftArrow">
          &#60;
        </div>
        <div id="newsCard">
          <News title={'Title'} subtitle={'This is the subtitle'} author={'Author'} body={'body'} date={'14/10/2021'} imageUrl={'https://i2.wp.com/revista.seg-social.es/wp-content/uploads/2021/10/1a-EDICION-8M6H0859-copia.jpg?resize=620%2C264&ssl=1'} collapsed={true} />
        </div>
        <div id="rightArrow">
          &#62;
        </div>
      </div>
    );
  }
}

export default Carousel;