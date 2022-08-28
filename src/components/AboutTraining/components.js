import styled from 'styled-components';

import cross from '@/assets/icons/cross.svg';
import { ArticleTitle } from '@/components/Devops/components';

export const Section = styled.section`
  font-family: Roboto;
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

export const Feature = styled.li`
  display: flex;
  align-items: center;
  // TODO
  border-bottom: 1px solid #535353;
`;

export const FeaturesTitle = styled.div`
  position: relative;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.size[4]};
  color: ${({ theme }) => theme.colors.text.main};
  padding-bottom: 32px;
  padding-top: 42px;

  &:after {
    content: '01';
    //TODO
    // content: ${({ number }) => number};
    width: 19px;
    height: 19px;
    font-weight: 500;
    font-size: ${({ theme }) => theme.typography.size[1]};
    //  TODO
    color: #3783cf;
    position: absolute;
    top: 30px;
    right: -15px;
  }
`;

export const Cross = styled.div`
  margin-left: auto;
  background-image: url(${cross});
  background-repeat: no-repeat;
  background-position: center;
  width: 15px;
  height: 15px;
  margin-right: 15px;
  cursor: pointer;

  &:active {
    transform: rotate(47.15deg);
    transition: all 0.1s ease-out;
  }
`;
