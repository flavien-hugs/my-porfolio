import { browser } from '$app/environment';

type Language = 'en' | 'fr';

class I18n {
	current = $state<Language>('fr');

	constructor() {
		if (browser) {
			const saved = localStorage.getItem('lang') as Language;
			if (saved && (saved === 'en' || saved === 'fr')) {
				this.current = saved;
			} else {
				// Default to French if it's the preference, otherwise browser lang
				const browserLang = navigator.language.split('-')[0];
				this.current = browserLang === 'fr' ? 'fr' : 'en';
			}
		}
	}

	set(lang: Language) {
		this.current = lang;
		if (browser) {
			localStorage.setItem('lang', lang);
			document.documentElement.lang = lang;
		}
	}

	t(en: string, fr: string) {
		return this.current === 'fr' ? fr : en;
	}
}

export const lang = new I18n();
