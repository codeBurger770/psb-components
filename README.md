# Компоненты

## InputNumber

### Props:

```ts
className?: string;
style?: CSSProperties;
label: string;
value?: number;
priceStep?: number;
currency?: string;
error?: string;
help?: string;
disabled?: boolean;
onChange(value?: number): void;
onBlur?(): void;
```

### Использование:

```ts
const [value, setValue] = useState<number | undefined>();

return (
    <InputNumber
        label="Сумма"
        value={value}
        priceStep={6}
        currency="₽"
        onChange={setValue}
    />
);
```

![Рисунок 1](https://github.com/codeBurger770/psb-components/raw/master/readme/1.png)
![Рисунок 2](https://github.com/codeBurger770/psb-components/raw/master/readme/2.png)

```ts
const [value, setValue] = useState<number | undefined>();

return (
    <InputNumber
        label="Сумма"
        value={value}
        priceStep={6}
        currency="₽"
        disabled
        onChange={setValue}
    />
);
```

![Рисунок 3](https://github.com/codeBurger770/psb-components/raw/master/readme/3.png)
![Рисунок 4](https://github.com/codeBurger770/psb-components/raw/master/readme/4.png)

```ts
const [value, setValue] = useState<number | undefined>();

return (
    <InputNumber
        label="Сумма"
        value={value}
        priceStep={6}
        currency="₽"
        help="Значение суммы имеет информационный характер"
        onChange={setValue}
    />
);
```

![Рисунок 5](https://github.com/codeBurger770/psb-components/raw/master/readme/5.png)
![Рисунок 6](https://github.com/codeBurger770/psb-components/raw/master/readme/6.png)

```ts
const [value, setValue] = useState<number | undefined>();

return (
    <InputNumber
        label="Сумма"
        value={value}
        priceStep={6}
        currency="₽"
        error="Введенное значение не должно быть равно 0"
        help="Значение суммы имеет информационный характер"
        onChange={setValue}
    />
);
```

![Рисунок 7](https://github.com/codeBurger770/psb-components/raw/master/readme/7.png)
![Рисунок 8](https://github.com/codeBurger770/psb-components/raw/master/readme/8.png)

```ts
const [value, setValue] = useState<number | undefined>();

return (
    <InputNumber
        label="Сумма"
        value={value}
        priceStep={6}
        currency="₽"
        error="Введенное значение не должно быть равно 0"
        help="Значение суммы имеет информационный характер"
        disabled
        onChange={setValue}
    />
);
```
![Рисунок 9](https://github.com/codeBurger770/psb-components/raw/master/readme/9.png)
![Рисунок 10](https://github.com/codeBurger770/psb-components/raw/master/readme/10.png)
