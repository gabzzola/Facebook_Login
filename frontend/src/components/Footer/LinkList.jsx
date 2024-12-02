import PropTypes from 'prop-types';
import LinkItem from './LinkItem';

const LinkList = ({ links, className }) => (
  <>
    {links.map((link, index) => (
      <LinkItem className={className} key={index}>
        {link}
      </LinkItem>
    ))}
  </>
);

LinkList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string.isRequired
};

export default LinkList;