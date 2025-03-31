/* accent range with "plus/minus" button */
import React, { useRef } from 'react';
import styled from 'styled-components';

const Container = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: 200px;
`;

const SliderInput = styled.input.attrs({ type: 'range' })<any>`
  accent-color: var(--color_accent);
  flex-grow: 1;
`;

const Button = styled.button`
  padding: 2px 8px;
  background: var(--color_accent);
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: var(--color_accent_dark);
  }
`;

export const AccentRangeButton: React.FC<
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    onChange: (x: number) => void;
  }
> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const getCurrentValue = () => {
    if (typeof props.value !== 'undefined') {
      return Number(props.value);
    }
    return inputRef.current ? Number(inputRef.current.value) : 0;
  };

  const updateValue = (newValue: number) => {
    const min = Number(props.min) || 0;
    const max = Number(props.max) || 100;
    const clampedValue = Math.min(Math.max(newValue, min), max);
    
    props.onChange?.(clampedValue);
    if (typeof props.value === 'undefined' && inputRef.current) {
      inputRef.current.value = String(clampedValue);
    }
  };

  const handleStep = (direction: 1 | -1) => {
    const step = Number(props.step) || 1;
    updateValue(getCurrentValue() + step * direction);
  };

  return (
    <Container>
      <Button onClick={() => handleStep(-1)}>-</Button>
      <SliderInput
        ref={inputRef}
        {...props}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.onChange && props.onChange(+e.target.value);
        }}
      />
      <Button onClick={() => handleStep(1)}>+</Button>
    </Container>
  );
};