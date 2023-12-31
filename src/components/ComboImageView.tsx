import { Box, Paper, Stack, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Image } from './Image';
import { CombinationType, combination } from '../combination';
import { basePath, iconData } from '../data';
import { useOptionContext } from '../contexts';
import { LeftArrow, RightArrow } from '../utils/icons';
const { BASE_URL } = import.meta.env;

interface ComboImageViewProps {
  topic: number;
}

export const ComboImageView: FC<ComboImageViewProps> = ({ topic }) => {
  const [combo, setCombo] = useState<CombinationType>();
  const { selected, media, isSmall } = useOptionContext();

  useEffect(() => {
    const icon = iconData[topic].icons;
    const compiledCombination: CombinationType['combination'] = combination[
      topic
    ].combination.map((val) => {
      const equal = JSON.stringify(val.combo) === JSON.stringify(selected);
      const numberCombo = val.combo;
      val.icons = [];
      return {
        ...val,
        icons: numberCombo?.map((v) => {
          return `${BASE_URL}/${basePath}/${
            icon.find((iconValue) => iconValue.id === v)?.desc
          }.png`;
        }) || [''],
        basePick: equal ? (val.basePick || 0) + 1 : val.basePick,
      };
    });
    setCombo({
      topic,
      combination: compiledCombination.sort(
        (a, b) => (b.basePick || 0) - (a.basePick || 0)
      ),
    });
  }, [topic, selected]);

  return (
    <Stack
      direction={'row'}
      sx={{
        display: 'flex',
        overflow: 'auto',
        mr: '0.5rem',
        ml: '0.5rem',
        padding: isSmall ? '0.5rem' : '1.5rem',
        width: isSmall ? '80%' : '55%',
        scrollbarWidth: 'none',
      }}
      justifyContent={'center'}
      spacing={2}>
      <Stack
        direction={'row'}
        spacing={1}
        sx={{
          width: '100%',
          justifyContent: 'space-between',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Typography
            variant='h3'
            sx={{
              color: 'gray',
            }}>
            &lsaquo;
          </Typography>
        </Box>
        {combo?.combination?.map((v, i) => {
          if (v.basePick) {
            return (
              <Paper
                sx={{
                  pl: isSmall ? '0' : !media ? '0.2rem' : '1.5rem',
                  pr: isSmall ? '0' : !media ? '0.2rem' : '1.5rem',
                  borderRadius: '1rem',
                }}
                elevation={4}
                key={i}>
                <Stack alignItems={'center'}>
                  <Stack direction={'row'}>
                    {v.icons?.map((img, i) => {
                      return (
                        <Image
                          path={img}
                          key={i}
                        />
                      );
                    })}
                  </Stack>
                  <Typography
                    variant='caption'
                    sx={{
                      whiteSpace: 'nowrap',
                      fontSize: isSmall ? 8 : media ? 12 : 10,
                    }}>
                    {v.desc}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: isSmall ? 8 : media ? 12 : 10,
                    }}
                    variant='caption'>
                    {v.basePick ? v.basePick : 0}
                  </Typography>
                </Stack>
              </Paper>
            );
          } else {
            return null;
          }
        })}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Typography
            sx={{
              color: 'gray',
            }}
            variant='h3'>
            &rsaquo;
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default null;
