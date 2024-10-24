import {Image,View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { CheckboxProps } from './checkbox.interface';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Checkbox: FC <CheckboxProps> = ({ options = [], onChange }) => {
    const [selected, setSelected] = useState<number[]>([]);

    function toggle(id: number) {
        let index = selected.findIndex(i => i === id);
        let arrSelecteds = [...selected];
        if (index !== -1) {
            arrSelecteds.splice(index, 1);
        } else {
            arrSelecteds.push(id);
        }
        setSelected(arrSelecteds);
    }

    const handleChange = useCallback(() => {
        if (onChange) {
            onChange(selected);
        }
    }, [selected, onChange]);

    useEffect(() => {
        handleChange();
    }, [selected, handleChange]);

    return (
        <View>
            {options.map((op, index) => (
            <View key={op.id} style={styles.optionContainer}>
                <TouchableOpacity style={styles.touchable} onPress={() => toggle(op?.id)}>
                    { selected.findIndex(i => i === op.id) !== -1 ? 
                    ( <MaterialCommunityIcons name="check" color="black" size={16}/> ) : null }
                </TouchableOpacity>
                <Text style={styles.opText}>{op?.text}</Text>
            </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    touchable: {
        height: 20,
        width: 20,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
    },
    opText: {
        marginLeft: 12,
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 2

    }
})

export default Checkbox;