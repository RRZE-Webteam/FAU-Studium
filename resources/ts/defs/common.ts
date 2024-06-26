export interface SelectOption {
	label: string;
	value: string;
}

export type LanguageCode = 'de' | 'en';

export interface Block< Attributes > {
	attributes: Attributes;
	setAttributes( value: Partial< Attributes > ): void;
}

export type TabNames =
	| 'general'
	| 'content'
	| 'admission-requirements'
	| 'organizational-links';
