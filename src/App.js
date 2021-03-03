import './App.css';
import 'antd/dist/antd.css'
import { Col, Row } from 'antd'
import Details from './components/Details/Details';
import Main from './components/Main/Main'
import styled from "@emotion/styled";
import { Provider } from "./context/context";

const Wrapper = styled.div`
  width:100%;
  max-width:960px;
  height:100vh;
  margin:0 auto;
  display:flex;
  justify-content:center;
  @media (min-Width:768px){
    margin:5% auto
  }
`
const StyledCol = styled(Col)`
  @media(min-Width:768px){
    margin-bottom:0px;
  }
  margin-bottom:16px;
`

function App() {
  return (
    <Provider>
      <Wrapper>
          <Row gutter={{xs:0, md:16}}>
            <StyledCol xs={24} md={12}>
              <Main title={'記帳本'} bgc='DodgerBlue' color='Ivory' />
            </StyledCol>
            <Col xs={24} md={12}>
              <Details title={'支出'} bgc='tomato' color='Brown' marginBot='16px' shadow='rgba(255, 99, 71, 0.2) 2px 4px 10px' />
              <Details title={'收入'} bgc='yellowgreen' color='darkgreen' marginBot='16px' shadow='rgba(154, 205, 50, 0.2) 2px 4px 10px' />
            </Col>
          </Row>
      </Wrapper>
    </Provider>
  );
}

export default App;
