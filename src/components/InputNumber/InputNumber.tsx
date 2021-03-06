import { CSSProperties, useCallback, useEffect, useState } from 'react';
import styles from './InputNumber.module.css';

interface IInputNumberProps {
    className?: string;
    style?: CSSProperties;
    label: string;
    value?: number;
    precision?: number;
    currency?: string;
    error?: string;
    help?: string;
    disabled?: boolean;
    onChange(value?: number): void;
    onBlur?(): void;
}

export const InputNumber = (props: IInputNumberProps) => {
    const { value, precision = 2, onChange, onBlur } = props;
    const [inputValue, setInputValue] = useState('');
    const [inputValueFormatted, setInputValueFormatted] = useState('');
    const [isFocus, setFocus] = useState(false);

    useEffect(() => {
        setInputValue(value === undefined ? '' : value.toString().replace('.', ','));
    }, [value]);

    useEffect(() => {
        if (isFocus) {
            setInputValueFormatted(inputValue);
        } else {
            const inputValueSplited = inputValue.split(',');
            inputValueSplited[0] = inputValueSplited[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
            setInputValueFormatted(inputValueSplited.join(','));
        }
    }, [inputValue, isFocus]);

    const onChangeInputValue = useCallback(e => {
        if (new RegExp(`^\\d{0,12}${precision ? `([\\.,]\\d{0,${precision}})?` : ''}$`).test(e.target.value)) {
            setInputValue(e.target.value.replace('.', ','));
            // TODO: Имеются следующие проблемы
            // parseFloat('999999999999.88888') === 999999999999.8889
            // parseFloat('999999999999.99999') === 1000000000000
            // parseFloat('123456789012.12345') === 123456789012.12344
            const newValue = parseFloat(e.target.value.replace(',', '.'));
            onChange(isNaN(newValue) ? undefined : newValue);
        }
    }, [precision, onChange]);

    const onFocusInputValue = useCallback(() => setFocus(true), []);

    const onBlurInputValue = useCallback(() => {
        setFocus(false);
        onBlur?.();
    }, [onBlur]);

    return (
        <div className={`${styles.inputNumber} ${props.className ?? ''}`} style={props.style}>
            <div className={styles.inputNumber__field}>
                <input
                    className={`${styles.inputNumber__input} ${props.error ? styles.inputNumber__input_error : ''}`}
                    placeholder=" "
                    value={isFocus ? inputValue : inputValueFormatted}
                    onChange={onChangeInputValue}
                    onFocus={onFocusInputValue}
                    onBlur={onBlurInputValue}
                    disabled={props.disabled}
                />
                <label className={styles.inputNumber__label}>{props.label}</label>
                <div className={styles.inputNumber__valueAndCurrency}>
                    <span className={styles.inputNumber__value}>{inputValueFormatted}</span>
                    {inputValueFormatted && (
                        <span className={styles.inputNumber__currency}> {props.currency}</span>
                    )}
                </div>
            </div>
            {(props.error || props.help) && (
                <div className={styles.inputNumber__errorAndHelp}>
                    {props.error && (
                        <div className={styles.inputNumber__error}>
                            {props.error}
                        </div>
                    )}
                    {props.help && (
                        <div className={styles.inputNumber__help}>
                            {props.help}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
