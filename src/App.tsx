import './App.css'

import Container from '@material-ui/core/Container'

import Transcriber from './components/Transcriber'

function App() {
    return (
        <Container maxWidth="sm">
            <div>
                <Transcriber />
            </div>
        </Container>
    )
}

export default App
