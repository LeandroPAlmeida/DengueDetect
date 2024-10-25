export interface CheckboxProps {
    value?: boolean,
    options: { id: number; text: string }[],
    onChange: (selected: number[]) => void,
}