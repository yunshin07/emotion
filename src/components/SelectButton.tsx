import { FC, useEffect, useState } from 'react';
import { Box, BoxProps, Stack, Typography, Tooltip } from '@mui/material';
import { iconTranslation } from '../data';
import { useLocation } from 'react-router-dom';

interface SelectButtonProps extends BoxProps {
  source: string;
  onSelect: () => void;
  title?: string;
  desc?: string;
  role?: string;
  width?: number;
  height?: number
}

export const SelectButton: FC<SelectButtonProps> = ({
  source,
  onSelect,
  title,
  desc,
  role,
  width = 50,
  height = 50,
  ...rest
}) => {
  const { pathname } = useLocation();
  const [toolTip, setToolTip] = useState<string>('');

  useEffect(() => {
    if (pathname === '/') {
      let tip = iconTranslation.find((v) => v.id === title)?.desc;
      if (tip === '멋져요.') {
        tip = '추천해요.'
      }
      setToolTip(tip || '');
    } else {
      const tip = iconTranslation.find((v) => v.id === desc)?.desc;
      setToolTip(tip || '');
    }
  }, [desc, pathname]);

  return !title ? (
    <Tooltip title={toolTip}>
      <Box
        component={'img'}
        sx={{
          cursor: 'pointer',
          padding: '0.5rem',
          borderRadius: '1rem',
          '&:hover': {
            backgroundColor: '#ececec',
            transition: 'linear 0.1s',
          },
        }}
        onClick={onSelect}
        src={source}
        width={width}
        height={height}
        {...rest}
      />
    </Tooltip>
  ) : (
    <Stack
      alignItems={'center'}
      sx={{
        '&:hover .MuiTypography-root': {
          fontWeight: 800,
        },
      }}>
      <Box
        component={'img'}
        sx={{
          cursor: 'pointer',
          padding: '0.5rem',
          borderRadius: '1rem',
          '&:hover': {
            backgroundColor: '#ececec',
            transition: 'linear 0.1s',
          },
        }}
        onClick={onSelect}
        src={source}
        width={width}
        height={height}
        {...rest}
      />
      <Typography
        variant='body2'>
        {pathname === '/' && toolTip !== '' ? toolTip : title}
      </Typography>
    </Stack>
  );
};

export default null;
