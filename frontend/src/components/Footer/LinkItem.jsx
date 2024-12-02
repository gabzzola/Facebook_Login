import PropTypes from 'prop-types';

const LinkItem = ({ className, children }) => (
  <li>
    <a className={className} href="#">
      {children}
    </a>
  </li>
);

LinkItem.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default LinkItem; 
