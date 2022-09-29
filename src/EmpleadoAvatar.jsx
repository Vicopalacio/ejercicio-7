import React from 'react';

const EmpleadoAvatar = ({empleado}) => {
    return (
        <div>
            <img src={empleado.pic} alt="avatar" className="w-50">
            </img>
        </div>
    );
};

export default EmpleadoAvatar;