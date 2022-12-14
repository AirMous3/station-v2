import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import cross from '@/assets/icons/cross.svg';
import { ArticleTitle } from '@/components/Devops/components';

export const Section = styled.section`
  margin-top: 35px;
  margin-bottom: 150px;
`;

export const Article = styled(ArticleTitle)`
  margin-bottom: 13px;
`;

export const ArticleDescription = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.size[7]};
  color: ${({ theme }) => theme.colors.text.lightGrey};
  max-width: 870px;
  margin-top: 30px;
`;

export const FeaturesWrapper = styled.ul`
  margin-top: 65px;
  margin-bottom: 96px;
`;

export const Cross = styled(motion.div)`
  position: relative;
  background-image: url(${cross});
  background-repeat: no-repeat;
  background-position: center;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const CrossWrapper = styled(motion.div)`
  margin-left: auto;
  margin-right: 15px;
`;

export const Feature = styled(motion.li)`
  position: relative;
  display: flex;
  align-items: center;
  // TODO
  border-bottom: 1px solid #535353;
  color: ${({ theme }) => theme.colors.text.main};
  transition: color ease-in 0.5s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text.darkGrey};

    ${Cross} {
      filter: brightness(0);
    }
  }
`;

export const FeatureTitle = styled(motion.div)`
  position: relative;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[4]};
  color: inherit;
  padding: 42px 10px 32px 15px;
  max-width: 326px;
  box-sizing: border-box;

  &:after {
    content: '${({ number }) => number}';
    width: 19px;
    height: 19px;
    font-weight: 500;
    font-size: ${({ theme }) => theme.typography.size[1]};
    //  TODO
    color: #3783cf;
    position: absolute;
    top: 30px;
    right: -10px;
  }
`;

export const FeatureDescription = styled(motion.div)`
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.size[2]};
  max-width: 476px;
  margin: 32px 0 32px 200px;
`;

export const Background = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 1px;
  left: 0;
  background-color: ${({ theme }) => theme.colors.text.main};
  z-index: -1;
`;
