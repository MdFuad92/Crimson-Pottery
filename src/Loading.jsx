import React from 'react';
import { FallingLines } from 'react-loader-spinner';

const Loading = () => {
    return (
    <div className=' flex justify-center mt-48 '>
            <FallingLines
            
            color="#e3cba5"
            width="100"
            visible={true}
            ariaLabel="falling-circles-loading"
            />
    </div>
    );
};

export default Loading;