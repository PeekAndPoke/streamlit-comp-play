import {StreamlitComponentBase} from "streamlit-component-lib";
import React, {ReactNode} from "react";

interface State {
}

export class Simulator extends StreamlitComponentBase<State> {

    public render = (): ReactNode => {

        const data = this.props.args["data"]


        return (
            <span>
                Hello Simulator!
                <pre>{JSON.stringify(data, null, 2)}</pre>
             </span>
        )
    }
}
