import {StreamlitComponentBase, withStreamlitConnection} from "streamlit-component-lib";
import React, {ReactNode} from "react"
import {BlueButton} from "./components/BlueButton";
import {RedButton} from "./components/RedButton";
import {Simulator} from "./components/Simulator";

interface State {}

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
class DispatcherComponent extends StreamlitComponentBase<State> {

    public render = (): ReactNode => {
        // Arguments that are passed to the plugin in Python are accessible
        // via `this.props.args`. Here, we access the "name" arg.
        const type = this.props.args["type"]

        switch (type) {
            case "BlueButton":
                return <BlueButton {...this.props} />

            case "RedButton":
                return <RedButton {...this.props} />

            case "Simulator":
                return <Simulator {...this.props} />
        }

        return (
            <h1 style={{backgroundColor: 'red'}}>Unknown type '{type}'</h1>
        )
    }
}

export default withStreamlitConnection(DispatcherComponent)


