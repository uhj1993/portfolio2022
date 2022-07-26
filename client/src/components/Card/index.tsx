import styled from 'styled-components';
import OutLink from '../../assets/icons/external_link.svg';
import type { TypeProject } from '@src/types/types';

const Card = ({ title, language, data, url, description }: TypeProject) => {
  return (
    <Container>
      <div className="inner">
        <div className="cardTitleWrapper">
          <h3 className="cardTitle">{title}</h3>
          {url && (
            <a target="_blank" rel="noopener noreferrer" href={url}>
              <OutLink width={15} height={15} />
            </a>
          )}
        </div>
        <p className="cardDesc">{description}</p>
        <ul>
          {data.map((data, index) => {
            return (
              <li key={index} className="cardDone">
                {data}
              </li>
            );
          })}
        </ul>
        <div className="lang">
          <ul>
            {language.map((lang, index) => {
              return <li key={index}>{lang}</li>;
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.li`
  width: 100%;
  margin: 8px auto;

  .inner {
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    padding: 2rem 1.75rem;
    border: 1px solid var(--main);
    border-radius: 0.75rem;
    background-color: #ffffff;
  }

  .cardTitleWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cardTitle {
    color: var(--main);
    font-size: 20px;
    margin-bottom: 4px;
    font-weight: bold;
  }

  .cardDesc {
    color: var(--main2);
    font-size: 14px;
    margin-bottom: 8px;
  }

  .cardDone {
    margin: 8px;
    &:before {
      content: '▹';
      color: var(--main2);
      margin-right: 4px;
    }
  }

  .lang {
    margin-top: 16px;
  }

  .lang ul {
    display: flex;
  }

  .lang li {
    color: var(--gray);
    font-size: 12px;
    margin-right: 15px;
  }
`;
