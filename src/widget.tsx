import { ReactWidget } from '@jupyterlab/apputils'
import React, { useState } from 'react'

const CountComponent = (): JSX.Element => {
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <p>You clicked {counter} times!</p>
            <button
                onClick={handleClick}
            >
                Incremet
            </button>
        </div>
    )
}

export class CounterWidget extends ReactWidget{
    constructor() {
        super();
        this.addClass('jp-ReactWidget')
    }

    protected render(): JSX.Element {
        return <CountComponent />;
    }
}