import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

import { ArticleTitle } from '@/components/Devops/components';

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.text.main};
`;

export const Article = styled(ArticleTitle)`
  max-width: 576px;
`;

export const FeedbacksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  gap: 50px;
`;

export const Quotes = styled.div`
  font-family: Generator;
  font-weight: 900;
  font-size: ${({ theme }) => theme.typography.size[16]};
`;

export const FeedbackDescriptionWrapper = styled.div`
  font-size: ${({ theme }) => theme.typography.size[4]};
  color: ${({ theme }) => theme.colors.text.lightGrey};
`;
export const FeedbackDescription = styled.div`
  min-height: 234px;
  max-width: 696px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  gap: 35px;
`;

export const AvatarsWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  height: 99px;
  gap: 50px;
  margin-top: 50px;
  white-space: nowrap;
`;
export const AvatarImage = styled(motion.img)``;

export const AvatarWrapper = styled(motion.div)`
  width: 81px;
  height: 81px;
  border-radius: 890px;
  border: 1px solid red;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background.feedback};
  cursor: pointer;
  transition: width 0.5s, height 0.3s linear;
  box-shadow: 0px 0px 2px 5px rgba(254, 111, 95, 0.2);

  ${({ isActive }) =>
    isActive
      ? css`
          width: 250px;
          height: 97px;
          border-radius: 890px;
        `
      : css`
          ${AvatarDescriptionWrapper} {
            opacity: 0;
            transition: opacity 0.5s;
          }
        `};
`;

export const AvatarDescriptionWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-left: 17px;
  color: black;
  transition: opacity 0.5s ease-in-out;
`;

export const AvatarTitle = styled.div`
  font-weight: 600;
  font-size: 23px;
  line-height: 120%;
  transition: opacity 0.5s ease-in-out;
`;

export const AvatarDescription = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  transition: opacity 0.5s ease-in-out;
`;
