import React, { ReactNode } from 'react';

import Link, { LinkProps } from 'next/link';

const FramerLink = (props: LinkProps & { children: ReactNode }) => {
    return <Link scroll={false} {...props} />;
};

export default FramerLink;
