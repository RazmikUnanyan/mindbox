import React from 'react';

const Plug = ({ title, ...props}) => {
    return (
        <div {...props}>
            {title}
        </div>
    );
};

export default Plug;