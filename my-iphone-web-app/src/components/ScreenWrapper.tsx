import { ReactNode } from 'react';
import './ScreenWrapper.scss';

type ScreenWrapperProps = {
    children: ReactNode;
};

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
    return (
        <div className="screen-wrapper">
            {children}
        </div>
    );
};

export default ScreenWrapper;
