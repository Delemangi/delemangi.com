import { Typography } from '@mui/material';

import UnderlinedLink from '../components/UnderlinedLink';

const License = () => (
  <Typography
    align="center"
    color="textSecondary"
    fontSize={12}
    variant="body2"
  >
    <UnderlinedLink
      href="https://github.com/Delemangi/delemangi.com"
      target="_blank"
    >
      Source code
    </UnderlinedLink>{' '}
    (MIT).
  </Typography>
);

export default License;
