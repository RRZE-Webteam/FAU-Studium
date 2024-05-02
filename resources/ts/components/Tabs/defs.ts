import { ReactNode } from 'react';

export interface TabItem {
	name: string;

	title: string | JSX.Element;

	className?: string | undefined;

	component: ReactNode;
}
