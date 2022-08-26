import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background: ${(props) => props.background || 'initial'};

  width: 100%;
  min-height: ${(props) => props.minHeight || 'initial'};

  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || 'initial'};
  align-items: stretch;
  align-self: ${(props) => props.alignSelf || 'initial'};

  margin: ${(props) => props.margin || '0px'};
  padding: ${(props) => props.padding || '0px'};
  border-radius: ${(props) => props.borderRadius || '0px'};
`;

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'initial'};
  justify-content: ${(props) => props.justifyContent || 'initial'};
  align-items: ${(props) => props.alignItems || 'initial'};
  gap: ${(props) => props.gap || '0px'};
`;

const NoTransactions = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #868686;
`;

const Title = styled.h2`
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: 0em;

  align-self: flex-start;

  margin-top: 25px;
  margin-bottom: 40px;
`;

const Button = styled(Link)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;

  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;

  padding: 10px;
  
  background: #A328D6;
  border-radius: 5px;
`;

const Span = styled.span`
  font-style: normal;
  font-weight: ${(props) => props.bold ? 'bold' : 'normal'};
  font-size: 17px;
  line-height: 20px;
  text-align: ${(props) => props.align || "initial"};

  color: ${(props) => props.color || "initial"};
`;

export {
  Container,
  Flex,
  NoTransactions,
  Span,
  Title,
  Button
}