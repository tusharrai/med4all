import React from 'react';
import Badge from 'material-ui/Badge';

export const CartCount = ({ cartCount }) => (
	<Badge
      badgeContent={cartCount}
      primary={true}
    >
    </Badge>
);

CartCount.propTypes = {
  cartCount: React.PropTypes.number,
};
