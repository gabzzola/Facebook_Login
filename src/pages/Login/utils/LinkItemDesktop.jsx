import PropTypes from 'prop-types';

const LinkItemDesktop = ({ children }) => (
  <li>
    <a className="footer-desktop-link" href="#">
      {children}
    </a>
  </li>
);

LinkItemDesktop.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LinkItemDesktop;
