import * as React from 'react';
import { SymLink } from './SymLink';
import { DragBox } from './DragBox';

export function SymLinks(props) {
    if (props.folders.length) {
        return props.folders.map(v => {
            return <SymLink name={v} />;
        });
    } else {
        return <DragBox />;
    }
}
