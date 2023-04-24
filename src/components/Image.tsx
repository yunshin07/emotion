import { Box } from '@mui/material';
import { FC } from 'react';
import { useOptionContext } from '../contexts';

interface ImageProps {
  path: string;
}

export const Image: FC<ImageProps> = ({ path }) => {
  const { media, isSmall } = useOptionContext();
  return (
    <Box
      component={'img'}
      height={isSmall ? 30 : media ? 50 : 40}
      width={isSmall ? 30 : media ? 50 : 40}
      src={path}
      alt='icon'
    />
  );
};

export default null;
