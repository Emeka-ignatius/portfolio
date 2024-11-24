import React from 'react';
import { cn } from '../../lib/utils'

interface IMaxWidthWrapper {
	className?: string;
	children: React.ReactNode;
}

export default function MaxWidthWrapper({
	className,
	children,
}: IMaxWidthWrapper) {
	return (
		<div className={cn('max-w-7xl mx-auto px-5 md:px-10', className)}>
			{children}
		</div>
	);
}
