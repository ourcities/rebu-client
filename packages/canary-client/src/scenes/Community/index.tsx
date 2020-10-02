import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Empty, Header, Navigation, Tab, Row, Col } from 'bonde-components';
import { useSession } from 'bonde-core-tools';
import { useTranslation } from 'react-i18next';
import Content from '../../components/Content';
// Subroutes
import Styles from './Styles';
import Mobilizers from './Mobilizers';
import Settings from './Settings';
import Integrations from './Integrations';
import Recipient from './Recipient';

const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  padding: 0 60px;

  h3 {
    color: #fff;
    margin: 10px 0 30px;
  }
`;

const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

type Props = {
  match: any
  location: any
}

const CommunityPage = ({ match, location }: Props) => {
  const history = useHistory();
  const { community } = useSession();
  const { t } = useTranslation('community');

  // Utils
  // Test is active pathname
  const is = (regexPath: any): boolean => new RegExp(regexPath).test(location.pathname);
  // Redirect to pathname
  const push = (path: string) => () => history.push(`${match.path}${path}`);

  return community ? (
    <PageWrap>
      <SubHeader>
        <Header.H3>{t('titles.settings')}</Header.H3>
        <Navigation>
          <Tab active={is(/\/community\/settings\/*/)} onClick={push('/settings')}>{t('navigation.settings')}</Tab>
          <Tab active={is(/\/community\/mobilizers\/*/)} onClick={push('/mobilizers')}>{t('navigation.mobilizers')}</Tab>
          <Tab active={is(/\/community\/recipient\/*/)} onClick={push('/recipient')}>{t('navigation.recipient')}</Tab>
          <Tab active={is(/\/community\/integrations\/*/)} onClick={push('/integrations')}>{t('navigation.integrations')}</Tab>
        </Navigation>
      </SubHeader>
      <Styles>
        <Content>
          <Row>
            <Col>
              <Switch>
                <Route exact path={`${match.path}/settings`}>
                  <Settings />
                </Route>
                <Route exact path={`${match.path}/mobilizers`}>
                  <Mobilizers community={community} />
                </Route>
                <Route exact path={`${match.path}/recipient`}>
                  <Recipient />
                </Route>
                <Route exact path={`${match.path}/integrations`}>
                  <Integrations />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Content>
      </Styles>
    </PageWrap>
  ) : <Empty message='Nada por aqui...' />;
};

// TODO:
// - Translate

export default CommunityPage;
