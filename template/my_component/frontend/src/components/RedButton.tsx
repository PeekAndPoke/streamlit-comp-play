import {Streamlit, StreamlitComponentBase} from "streamlit-component-lib";
import React, {ReactNode} from "react";

interface State {
    numClicks: number
}

export class RedButton extends StreamlitComponentBase<State> {

    public state = { numClicks: 0 }

    public render = (): ReactNode => {
        // Arguments that are passed to the plugin in Python are accessible
        // via `this.props.args`. Here, we access the "name" arg.
        const name = this.props.args["name"]

        // Show a button and some text.
        // When the button is clicked, we'll increment our "numClicks" state
        // variable, and send its new value back to Streamlit, where it'll
        // be available to the Python program.
        return (
            <span>
                Hello, {name}! &nbsp;
                <button onClick={this.onClicked} disabled={this.props.disabled} style={{backgroundColor: "red"}}>
                    Click Me!
                </button>
             </span>
        )
    }

    /** Click handler for our "Click Me!" button. */
    private onClicked = (): void => {
        // Increment state.numClicks, and pass the new value back to
        // Streamlit via `Streamlit.setComponentValue`.
        this.setState(
            prevState => ({numClicks: prevState.numClicks + 1}),
            () => Streamlit.setComponentValue(this.state.numClicks)
        )
    }
}
