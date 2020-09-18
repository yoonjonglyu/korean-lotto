import React from 'react';
import ReactDelayRender from 'react-delay-render';

const Loading = () => <loading active size="massive" />;

export default ReactDelayRender({ delay: 300 })(Loading);