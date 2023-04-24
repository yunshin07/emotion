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
  const { media } = useOptionContext();
  return (
    <Stack
      alignItems={'center'}
      marginRight={1}>
      <Paper
        elevation={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: media ? '80px' : '65px',
          width: media ? '80px' : '70px',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0.5rem',
          borderRadius: '1rem',
        }}>
        <Box
          component={'img'}
          src={iconPath}
          width={media ? 50 : 40}
          height={media ? 50 : 40}
          alt='loupe'
        />
        <Typography
          sx={{
            whiteSpace: 'nowrap',
            fontSize: media ? 12 : 10,
          }}
          variant='caption'>
          {desc}
        </Typography>
        <Typography variant='caption'>{number}</Typography>
      </Paper>
    </Stack>
  );
};

export default null;
