import React, { PureComponent } from 'react'

class SendMessage extends PureComponent<{}, { count: number }> {
    render(): JSX.Element {
        return (
            <div>
                <h2>Send Message Component</h2>
            </div>
        )
    }
}

export default SendMessage
