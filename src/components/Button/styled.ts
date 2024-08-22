import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  color: ${colors.white};
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.green : colors.white)};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  color: ${colors.white};
  border: 2px solid ${colors.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
