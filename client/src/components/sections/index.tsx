import { useRef } from 'react';
import styled from 'styled-components';

interface IProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ children, id, title }: IProps) => {
  const scrollRef = useRef(null);

  return (
    <AboutSectionWrapper id={id} ref={scrollRef}>
      <h2>{title}</h2>
      {children}
    </AboutSectionWrapper>
  );
};

const AboutSectionWrapper = styled.section`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 16px;
    color: var(--main);

    &:before {
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
    }
  }
`;

export default Section;