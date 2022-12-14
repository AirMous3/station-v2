import backgroundImageDevops from '@/assets/icons/backgroundDevops.png';
import { Container } from '@/components/Container';
import { devopsConfig } from '@/components/Devops/config';
import { Feature } from '@/components/Feature';

import * as S from './components';
import { salaries } from './config';

export const Devops = () => {
  const titleAnimation = {
    hidden: {
      y: 70,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <S.Section initial="hidden" whileInView="visible">
      <S.TitleWrapper>
        <S.Title variants={titleAnimation} viewport={{ amount: 0.2 }}>
          DevOps
        </S.Title>
        <S.Description>
          инженеры контролируют все этапы создания продукта: от написания кода до релиза.
          Помогают отделам разработки и администрирования, синхронизируют их усилия и
          автоматизируют технические процессы. За последние годы спрос на этих
          специалистов вырос в несколько раз. Мы поможем стать DevOps-инженером с нуля и
          найдём вам работу.
        </S.Description>
        <S.BackgroundTitle>DevOps</S.BackgroundTitle>
      </S.TitleWrapper>

      <Container>
        <div>
          <S.ArticleTitle>Как это будет</S.ArticleTitle>

          <S.FeaturesWrapper>
            {devopsConfig.map(({ number, title, description }) => (
              <Feature
                key={number}
                number={number}
                title={title}
                description={description}
              />
            ))}
          </S.FeaturesWrapper>
        </div>

        <S.ArticleTitle>Востребованность на рынке</S.ArticleTitle>

        <S.SalaryWrapper>
          <S.BackgroundFlash />

          <img src={backgroundImageDevops} alt="backgroundImage" />

          <S.SalaryTabletsWrapper>
            {salaries.map(({ salary, position }, i) => (
              <S.SalaryTablet index={i} key={salary}>
                <S.Salary index={i}>{salary}</S.Salary>
                <S.Position>{position}</S.Position>
              </S.SalaryTablet>
            ))}
          </S.SalaryTabletsWrapper>

          <S.VacanciesNote>* >2000 вакансийDevOps Engineer link hh.ru</S.VacanciesNote>
        </S.SalaryWrapper>
      </Container>
    </S.Section>
  );
};
