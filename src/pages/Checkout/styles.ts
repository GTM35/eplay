import styled from 'styled-components'
import { breakpoint, colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-end;

  @media (max-width: ${breakpoint.tablet}) {
    display: block;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input,
  select {
    background-color: ${colors.white};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${colors.white};
    width: 100%;
    color: #000;

    &.error {
      border: 1px solid red;
    }
  }

  select {
    color: ${colors.black};
    cursor: pointer;

    option {
      color: ${colors.black};
    }
  }

  @media (max-width: ${breakpoint.tablet}) {
    margin-top: 16px;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  height: 32px;
  border: none;
  margin-right: 16px;
  display: flex;
  gap: 8px;
  padding: 0 8px;
  align-items: center;
  cursor: pointer;

  @media (max-width: ${breakpoint.tablet}) {
    margin-top: 8px;
    width: 100%;
  }
`
