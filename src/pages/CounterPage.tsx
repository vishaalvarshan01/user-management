import { useState} from 'react';
import Button from '@mui/material/Button';

const CounterPage = () => {

    const [counter,setCounter] = useState<number>(0)

    const handleIncrement = () => {
        setCounter((prev) => {
            return prev + 1;
        })
    }

    const handleDecrement = () => {
        setCounter((prev) => {
            return prev - 1;
        })
    }

    return (
        <div>
            <Button onClick={handleIncrement}>+</Button>
            <h1>
                {counter}
            </h1>
            <Button  onClick={handleDecrement}>-</Button>

        </div>
    );
};

export default CounterPage;