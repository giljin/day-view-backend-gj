import { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';

import { Icon, Inputbox } from '@/shared/component/Atom';
import { IconButton } from '@/shared/component/Molecule';
import { common } from '@/shared/styles/theme';

interface Props {
  placeholder?: string;
}

const SearchBar = ({ placeholder }: Props) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      setIsEmpty(true);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsEmpty(e.target.value === '');
  };

  return (
    <DivStyle>
      <Icon type="search" />
      <Inputbox
        ref={inputRef}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {!isEmpty && <IconButton type="close" onClick={handleButtonClick} />}
    </DivStyle>
  );
};

export default SearchBar;

const DivStyle = styled.div`
  display: flex;
  align-items: center;

  width: 415px;
  height: 56px;

  padding-left: 22px;
  padding-right: 10px;

  background: ${common.colors.White};

  border: 1px solid ${common.colors.G_500};
  border-radius: 7px;
`;
