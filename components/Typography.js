import React from 'react'
import styled, { css } from 'styled-components'

const createElement = React.createElement

export const Margins = ({ m, mt, ml, mr, mb }) => css`
  margin: ${m ? m : null};
  margin-top: ${mt ? mt : null};
  margin-right: ${mr ? mr : null};
  margin-bottom: ${mb ? mb : null};
  margin-left: ${ml ? ml : null};
`
export const Paddings = ({ p, pt, pl, pr, pb }) => css`
  padding: ${p ? p : null};
  padding-top: ${pt ? pt : null};
  padding-bottom: ${pb ? pb : null};
  padding-right: ${pr ? pr : null};
  padding-left: ${pl ? pl : null};
`

export const BaseElement = css`
  text-align: ${(props) => props.align || 'left'};
  padding: ${(props) => props.padding || ''};

  /* prettier-ignore */
  color: var(--color-${(props) => props.color || 'black'});
  line-height: ${(props) => props.lh || '1.5'};
  max-width: ${(props) => props.max_width || ''};
  min-width: ${(props) => props.min_width || ''};
  ${Margins}
  ${Paddings}
`
export const Text = styled.p`
  ${BaseElement}
  font-weight: ${(props) => props.weight || 'normal'};
  font-size: ${(props) => props.size || '1.6rem'};
  width: ${(props) => props.width || 'auto'};
`

export const Heading = styled(({ as = 'h1', children, ...props }) =>
  createElement(as, props, children)
)`
  ${BaseElement}
  font-weight: ${(props) => props.weight || 'bold'};
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.lh};
  width: ${(props) => props.width || '100%'};
`
