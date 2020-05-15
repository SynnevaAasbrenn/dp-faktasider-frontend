import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components/macro';
import { Select } from 'nav-frontend-skjema';
import { theme } from '../../styles/theme';
import { pxToRem } from '../../styles/utils';
import { isProduction } from '../../utils/environment';
import { useFaktasideProps } from '../../templates/faktaside/FaktasideContext';
import { navigate } from 'gatsby';

const Style = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.navLysGra};
  border-bottom: 0.1rem solid #bbb;
  padding: 1rem;
`;

const StyledSelect = styled(Select)`
  width: ${pxToRem(230)};
  label {
    ${theme.visuallyHidden};
  }
  margin: 0;
`;

const LanguageSelector = () => {
  const faktaSideProps = useFaktasideProps();
  const lang = faktaSideProps.pageContext.lang;
  const [open, setOpen] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    if (lang !== newLanguage) {
      navigate(faktaSideProps.location.pathname.replace(`/${lang}/`, `/${newLanguage}/`));
    }
    setOpen(!open);
  };

  if (isProduction()) {
    return null;
  }

  return (
    <Style>
      <StyledSelect label="Velg språk" onChange={handleChange} value={lang}>
        <option value="" disabled>
          Velg språk
        </option>
        <option value="nb">Norsk</option>
        <option value="en">English</option>
      </StyledSelect>
    </Style>
  );
};

export default LanguageSelector;