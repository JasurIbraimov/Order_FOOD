import React from 'react';
import RestoServiceContext from '../resto-service-context';

// Создаем компонент высшего порядка
const WithRestoService = () => (Component) => {
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                {
                    (RestoService) => {
                        return <Component 
                            {...props} 
                            RestoService={RestoService}/>
                    }
                }
            </RestoServiceContext.Consumer>
        )
    }
};

export default WithRestoService;