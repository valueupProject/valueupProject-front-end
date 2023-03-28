import { AgeType } from '@/constants/types/authTypes';
import { theme } from '@/styles/theme';
import { SelectBtn } from '@/components/buttons/Buttons.style';
import { ExplainTextBox, SubTextBox } from '@/components/text-box';
import {
  AgeBtnListContainer,
  AgeContainer,
  BtnWrapper,
} from './AgeBtnList.style';

const AGE_LIST: { type: AgeType; value: string; text: string }[] = [
  { type: '19', value: '20↓', text: '20대 미만' },
  { type: '20', value: '20', text: '20대' },
  { type: '30', value: '30', text: '30대' },
  { type: '40', value: '40', text: '40대' },
  { type: '50', value: '50↑', text: '50대 이상' },
  { type: 'x', value: 'X', text: ' ' },
];

/**
 * 연령 버튼 리스트 관리를 위한 인터페이스
 */
interface AgeBtnListProps {
  /** 연령 값 */
  age: string;
  /** 연령 값 change event 함수 */
  onChangeSelect: (name: string, value: string) => void;
}
export const AgeBtnList = ({ age, onChangeSelect }: AgeBtnListProps) => (
  <AgeBtnListContainer>
    <SubTextBox>연령</SubTextBox>
    <AgeContainer>
      {AGE_LIST.map(({ type, value, text }) => (
        <BtnWrapper key={type}>
          <SelectBtn
            onClick={() => onChangeSelect('age', type)}
            disable={age === type}
          >
            {value}
          </SelectBtn>
          <ExplainTextBox
            color={
              age === type
                ? theme.colors.grayscale.dark
                : theme.colors.grayscale.gray300
            }
          >
            {text === ' ' ? <p /> : text}
          </ExplainTextBox>
        </BtnWrapper>
      ))}
    </AgeContainer>
  </AgeBtnListContainer>
);
