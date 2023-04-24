import { Box } from '@mui/material';
import { FC } from 'react';
import { useOptionContext } from '../contexts';

interface ImageProps {
  path: string;
}

export const Image: FC<ImageProps> = ({ path }) => {
  const { media } = useOptionContext();
  return (
    <Box
      component={'img'}
      height={media ? 50 : 40}
      width={media ? 50 : 40}
      src={path}
      alt='icon'
    />
  );
};

export default null;
