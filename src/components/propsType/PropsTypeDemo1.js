import React from 'react';
import PropTypes from 'prop-types';

export default function PropsTypeDemo1({ name, msg, age, cars }) {
  return (
    <div>
      Hello {name}, {msg}, {age}, {cars}
    </div> 
  );
}
PropsTypeDemo1.propTypes = {
  name: PropTypes.string,//Optional Props
  msg: PropTypes.string.isRequired, //Manadatory Props.
  age: PropTypes.number,//Optional props
  cars:PropTypes.oneOf(['tata','honda'])//Optional Props.
};
