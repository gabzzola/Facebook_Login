import PropTypes from 'prop-types';

const InputField = ({ placeholder, type = "text" }) => (
  <input
    className="input-form"
    placeholder={placeholder}
    type={type}
  />
);

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default InputField;