import * as React from 'react';
import { Group } from '../../utils/richTextUtils/richTextTypes';
import Utkast from './Utkast';
import H2GroupMarkup from './H2GroupMarkup';
import H3GroupMarkup from './H3GroupMarkup';
import H4GroupMarkup from './H4GroupMarkup';
import VisFor from './VisFor/VisFor';
import { ConditionalWrapper } from '../ConditionalWrapper';

interface Props {
  node: Group;
}

function getContent(group: Group) {
  switch (group.style) {
    case 'h2':
      return <H2GroupMarkup {...group} />;
    case 'h3':
      return <H3GroupMarkup {...group} />;
    case 'h4':
      return <H4GroupMarkup {...group} />;
    default:
      throw Error(`Ukjent gruppe: ${group.style}`);
  }
}

function GroupMarkup(props: Props) {
  return (
    <ConditionalWrapper
      condition={!!props.node.blockConfig?.visFor}
      wrapper={(children) => <VisFor visFor={props.node.blockConfig?.visFor}>{children}</VisFor>}
    >
      <ConditionalWrapper
        condition={!!props.node.blockConfig?.erUtkast}
        wrapper={(children) => <Utkast>{children}</Utkast>}
      >
        {getContent(props.node)}
      </ConditionalWrapper>
    </ConditionalWrapper>
  );
}

export default GroupMarkup;