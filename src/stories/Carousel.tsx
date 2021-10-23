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

const css = `#enveloped{display:flex; justify-content: center; align-content: center;position: relative; background-color: #f7f7f7; padding: 10px;}`;
document.head.appendChild(document.createElement("style")).textContent = css;

const css2 = `#rightArrow {
    position: absolute;
    top: 50%;
    right: 20px;
    font-size: 2rem;
  }`;
  document.head.appendChild(document.createElement("style")).textContent = css2;

 const css3 = `#leftArrow {
    position: absolute;
    top: 50%;
    left: 20px;
    font-size: 2rem;
  }`;
  document.head.appendChild(document.createElement("style")).textContent = css3;

  const css4 = `#newsCard{display:flex; justify-content: center; align-content: center; width: 70%;}`;
document.head.appendChild(document.createElement("style")).textContent = css4;
export default Carousel;