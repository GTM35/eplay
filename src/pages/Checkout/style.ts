import styled from 'styled-components'
import { cores } from '../../styles'

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
    background-color: ${cores.branca};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${cores.branca};
    width: 100%;
    color: #000;
  }

  select {
    color: ${cores.preta};
    cursor: pointer;

    option {
      color: ${cores.preta};
    }
  }
`

export const TabButton = styled.button<TabButtonProps>`
  background-color: ${(props) => (props.isActive ? cores.verde : cores.preta)};
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.branca};
  height: 32px;
  border: none;
  margin-right: 16px;
  display: flex;
  gap: 8px;
  padding: 0 8px;
  align-items: center;
  cursor: pointer;
`
