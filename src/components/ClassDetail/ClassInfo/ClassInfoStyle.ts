import theme from '@styles/theme';
import styled from 'styled-components';

export const ClassInfoContainer = styled.div`
  & > :first-child {
    margin-top: 2.4rem;
  }

  & > :not(first-child) {
    margin: 0 2.4rem;
    margin-bottom: 4rem;
  }

  & > :nth-child(2) {
    margin: 0 0 4rem 0 !important;
    padding: 1.8rem 0 2.4rem 2.4rem;
    background-color: ${theme.color.primary['light']};
  }

  & > :nth-child(3) {
    margin: 0 0 4rem 0 !important;
    padding: 1.8rem 0 2.4rem 2.4rem;
  }
`;

export const Section = styled.section`
  & > :first-child {
    margin-bottom: 1.2rem;
    color: ${theme.color.gray['44']};
  }
`;

export const AvailableTime = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.4rem;

  & > :first-child {
    margin-right: 2rem;
  }
`;

export const PictureWrapper = styled.div`
  width: 100%;
  overflow: auto;
  white-space: nowrap;
`;

export const ClassImg = styled.img`
  width: 15rem;
  height: 15rem;
  margin-right: 1.2rem;
  border-radius: 0.8rem;
`;

export const ClassTag = styled.div`
  display: flex;

  & > * {
    margin-right: 0.6rem;
  }
`;
