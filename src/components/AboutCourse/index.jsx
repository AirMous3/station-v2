import { Link } from 'react-scroll';

import { Levels } from '@/components/AboutCourse/Levels';
import { Button } from '@/components/Button';
import { CourseFeatures } from '@/components/CourseFeatures';
import { Ticker } from '@/components/Ticker';

import * as S from './components';

export const AboutCourse = () => {
  return (
    <section>
      <S.Container>
        <S.Article>Кому подойдет курс</S.Article>

        <Levels />

        <Link to={'getStarted'} smooth={true}>
          <Button>Узнать подробнее</Button>
        </Link>
      </S.Container>

      <Ticker />
      <Ticker direction={'left'} />

      <CourseFeatures />
    </section>
  );
};
