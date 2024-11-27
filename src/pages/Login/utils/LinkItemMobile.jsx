import PropTypes from 'prop-types';

const LinkItemMobile = ({ children }) => (
  <li>
    <a className="footerMobileLink" href="#">
      {children}
    </a>
  </li>
);

LinkItemMobile.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LinkItemMobile; 
