import { FC } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { useOptionContext } from '../contexts';

interface ComboButtonProps {
  iconPath: string;
  desc: string;
  number: number;
}

export const ComboButton: FC<ComboButtonProps> = ({
  iconPath,
  desc,
  number,
}) => {
  const { media, isSmall } = useOptionContext();
  return (
    <Stack
      alignItems={isSmall ? 'flex-start' : 'center'}
      marginRight={1}>
      <Paper
        elevation={4}
        sx={{
          display: 'flex',
          flexDirection: isSmall ? 'row' : 'column',
          height: isSmall ? 'inherit' : media ? '80px' : '65px',
          width: isSmall ? '80px' : media ? '80px' : '70px',
          justifyContent: isSmall ? 'flex-start' : 'center',
          alignItems: 'center',
          padding: isSmall ? '0.2rem' : '0.5rem',
          borderRadius: '1rem',
          mt: isSmall ? '0.2rem' : '0',
          mb: isSmall ? '0.2rem' : '0',
        }}>
        <Box
          component={'img'}
          src={iconPath}
          width={isSmall ? 30 : media ? 50 : 40}
          height={isSmall ? 30 : media ? 50 : 40}
          alt='loupe'
        />
        <Stack
          alignItems={'center'}
          width={isSmall ? '50px' : 'inherit'}>
          <Typography
            sx={{
              whiteSpace: 'nowrap',
              fontSize: isSmall ? 8 : media ? 12 : 10,
            }}
            variant='caption'>
            {desc}
          </Typography>
          <Typography
            sx={{
              fontSize: isSmall ? 8 : media ? 12 : 10,
            }}
            variant='caption'>
            {number}
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default null;
