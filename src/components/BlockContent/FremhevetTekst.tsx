import * as React from 'react';
import styled from 'styled-components/macro';
import { theme } from '../../styles/theme';
import BlockContent from './BlockContent';
import { SanityBlock } from '../../utils/richTextUtils/richTextTypes';
import parseRichText from '../../utils/richTextUtils/parser/parseRichText';
import withErrorBoundary from '../withErrorBoundary';

interface Props {
  node: {
    innhold: SanityBlock[];
  };
}

const Style = styled.div`
  padding: ${theme.layoutPadding};
  margin: 2rem 0;
  background-color: ${theme.colors.navLysGra};
  border-radius: ${theme.borderRadius};
  ul {
    list-style: none !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  li {
    margin: 1rem 0.6rem !important;
    position: relative;
    padding-left: 0.7rem !important;
    &::before {
      content: '';
      display: block;
      height: 0.5rem;
      width: 0.5rem;
      border-radius: 50%;
      background-color: ${theme.colors.navGra40};
      position: absolute;
      left: -0.5rem;
      top: 0.4rem;
    }
  }
`;

function FremhevetTekst(props: Props) {
  const parsedText = parseRichText(props.node.innhold);

  return (
    <Style>
      <BlockContent blocks={parsedText} />
    </Style>
  );
}

export default withErrorBoundary(FremhevetTekst, 'FremhevetTekst');
