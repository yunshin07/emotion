import { Box, Paper, Stack, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Image } from './Image';
import { CombinationType, combination } from '../combination';
import { basePath, iconData } from '../data';
import { useOptionContext } from '../contexts';
const { BASE_URL } = import.meta.env;

interface ComboImageViewProps {
  topic: number;
}

export const ComboImageView: FC<ComboImageViewProps> = ({ topic }) => {
  const [combo, setCombo] = useState<CombinationType>();
  const { selected, media } = useOptionContext();

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
        padding: '1.5rem',
        width: '55%',
      }}
      justifyContent={'center'}
      spacing={2}>
      <Stack
        direction={'row'}
        spacing={1}
        sx={{
          width: '100%',
        }}>
        {combo?.combination?.map((v, i) => {
          return (
            <Paper
              sx={{
                pl: !media ? '0.2rem' : '1.5rem',
                pr: !media ? '0.2rem' : '1.5rem',
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
                    fontSize: media ? 12 : 10,
                  }}>
                  {v.desc}
                </Typography>
                <Typography variant='caption'>
                  {v.basePick ? v.basePick : 0}
                </Typography>
              </Stack>
            </Paper>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default null;
