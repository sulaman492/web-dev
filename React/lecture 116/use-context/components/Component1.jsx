    import {React,useContext} from 'react'
    import { countercontext } from '../src/context/context.jsx'

    const Component1 = () => {
    const counter=useContext(countercontext)
        return (
        <div>
        {counter}
        </div>
    )
    }

    export default Component1
