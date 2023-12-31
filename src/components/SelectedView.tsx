import { FC, useCallback, useEffect, useState } from 'react';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import _ from 'lodash';
import { combination } from '../combination';
import { iconData, iconTranslation } from '../data';
import { SelectButton } from './SelectButton';
import { useOptionContext } from '../contexts';
const { BASE_URL } = import.meta.env;

interface SelectedViewProps {
  topic: number;
  selected: number[];
}

export const SelectedView: FC<SelectedViewProps> = ({ selected, topic }) => {
  const [combo, setCombo] = useState<
    | {
        combo: number[];
        desc: string;
      }
    | undefined
  >();
  const { recommend, nextArticle, setRecommend, setNextArticle, isSmall } =
    useOptionContext();
  const [flag, setFlag] = useState<{
    recommend: boolean;
    next: boolean;
  }>({
    recommend: false,
    next: false,
  });

  const [optionText, setOptionText] = useState<{
    recommend: string;
    next: string;
  }>({
    recommend: '',
    next: '',
  });

  const handleDesc = () => {
    if (flag.recommend && flag.next) {
      return '추천하고 후속기사 원해요.';
    } else if (flag.recommend && !flag.next) {
      return '추천해요.';
    } else if (!flag.recommend && flag.next) {
      return '후속기사 원해요.';
    } else {
      return '';
    }
  };

  useEffect(() => {
    const currentTopic = combination.find((v) => v.topic === topic);
    const foundCombo = currentTopic?.combination.find((v) => {
      return JSON.stringify(v.combo) === JSON.stringify(selected);
    });

    setCombo(foundCombo);
  }, [selected, topic]);

  const handleOptionSelect = (option: 'recommend' | 'next') => {
    switch (option) {
      case 'recommend':
        if (flag.recommend) {
          setRecommend(recommend - 1);
          setOptionText({
            recommend: '',
            next: optionText.next,
          });
          setFlag({
            recommend: false,
            next: flag.next,
          });
        } else {
          setRecommend(recommend + 1);
          setOptionText({
            recommend: '추천해요',
            next: optionText.next,
          });
          setFlag({
            recommend: true,
            next: flag.next,
          });
        }
        break;
      case 'next':
        if (flag.next) {
          setNextArticle(nextArticle - 1);
          setOptionText({
            recommend: optionText.recommend,
            next: '',
          });
          setFlag({
            recommend: flag.recommend,
            next: false,
          });
        } else {
          setNextArticle(nextArticle + 1);
          setFlag({
            recommend: flag.recommend,
            next: true,
          });
          setOptionText({
            recommend: optionText.recommend,
            next: '후속기사 원해요',
          });
        }
        break;
    }
  };

  const handleDescription = useCallback(() => {
    if (!combo && selected.length > 0) {
      const icon = iconData[topic].icons.find(
        (v) => v.id === selected[0]
      )?.desc;
      const description = iconTranslation.find((v) => v.id === icon)?.desc;
      return description;
    } else {
      return combo?.desc;
    }
  }, [combo, topic, selected]);

  return (
    <Container
      maxWidth='md'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2rem',
      }}>
      <Stack alignItems={'center'}>
        <Stack
          direction={'row'}
          alignItems={'center'}>
          <Stack
            alignItems={'center'}
            justifyContent={'center'}>
            <Stack direction={'row'}>
              {selected.length > 0 && !combo ? (
                <Stack
                  direction={'row'}
                  spacing={1}>
                  <Paper
                    sx={{
                      padding: isSmall ? '0.2rem' : '0.3rem',
                      borderRadius: 100,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    elevation={4}>
                    <Box
                      width={isSmall ? 30 : 50}
                      height={isSmall ? 30 : 50}
                      component={'img'}
                      src={`assets/htmls/images/${
                        iconData[topic].icons[selected[0]]?.desc
                      }.png`}
                      alt='icon'
                    />
                  </Paper>
                  <Paper
                    sx={{
                      padding: isSmall ? '1.1rem' : '1.9rem',
                      borderRadius: 100,
                    }}
                    elevation={4}
                  />
                </Stack>
              ) : combo ? (
                <Paper
                  sx={{
                    padding: '0.3rem',
                    borderRadius: 100,
                  }}
                  elevation={4}>
                  <Stack
                    direction={'row'}
                    spacing={1}>
                    <Box
                      component={'img'}
                      src={`${BASE_URL}/assets/htmls/images/${
                        iconData[topic].icons[selected[0]]?.desc
                      }.png`}
                      width={isSmall ? 30 : 50}
                      height={isSmall ? 30 : 50}
                      alt='icon'
                    />
                    <Box
                      component={'img'}
                      src={`${BASE_URL}/assets/htmls/images/${
                        iconData[topic].icons[selected[1]]?.desc
                      }.png`}
                      width={isSmall ? 30 : 50}
                      height={isSmall ? 30 : 50}
                      alt='icon'
                    />
                  </Stack>
                </Paper>
              ) : (
                <Stack
                  direction={'row'}
                  spacing={1}>
                  <Paper
                    sx={{
                      padding: isSmall ? '1rem' : '1.9rem',
                      borderRadius: '2rem',
                    }}
                    elevation={4}
                  />
                  <Paper
                    sx={{
                      padding: isSmall ? '1rem' : '1.9rem',
                      borderRadius: '2rem',
                    }}
                    elevation={4}
                  />
                </Stack>
              )}
            </Stack>
          </Stack>
          <Stack
            direction={'row'}
            alignItems={'flex-start'}
            spacing={1}
            ml={1}>
            <Stack alignItems={'center'}>
              <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'center'}>
                <SelectButton
                  source={`${BASE_URL}/assets/htmls/images/${
                    !flag.recommend ? 'move01' : 'move01_on'
                  }.png`}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                  width={isSmall ? 50 : 60}
                  height={isSmall ? 50 : 60}
                  role='option'
                  onSelect={() => {
                    handleOptionSelect('recommend');
                  }}
                />
                <SelectButton
                  source={`${BASE_URL}/assets/htmls/images/${
                    !flag.next ? 'move02' : 'move02_on'
                  }.png`}
                  width={isSmall ? 50 : 60}
                  height={isSmall ? 50 : 60}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                  role='option'
                  onSelect={() => {
                    handleOptionSelect('next');
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Typography
          sx={{
            marginTop: '0.5rem',
          }}
          variant='body2'>
          {handleDescription()}&emsp;
          {handleDesc()}&emsp;
        </Typography>
      </Stack>
    </Container>
  );
};

export default null;
