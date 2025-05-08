/**
 * Internationalization (i18n) utility
 *
 * This is a simple wrapper around i18n functionality.
 * In a real application, you would use a library like i18next or react-intl.
 */

/**
 * Available languages
 */
export type Language = 'en' | 'es' | 'fr' | 'de' | 'ja';

/**
 * Translation dictionary type
 */
export type TranslationDictionary = Record<string, string>;

/**
 * Translation dictionaries by language
 */
const translations: Record<Language, TranslationDictionary> = {
  en: {
    welcome: 'Welcome to our application',
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    submit: 'Submit',
    cancel: 'Cancel',
    loading: 'Loading...',
    error: 'An error occurred',
    success: 'Operation successful',
  },
  es: {
    welcome: 'Bienvenido a nuestra aplicación',
    home: 'Inicio',
    about: 'Acerca de',
    contact: 'Contacto',
    submit: 'Enviar',
    cancel: 'Cancelar',
    loading: 'Cargando...',
    error: 'Se produjo un error',
    success: 'Operación exitosa',
  },
  fr: {
    welcome: 'Bienvenue dans notre application',
    home: 'Accueil',
    about: 'À propos',
    contact: 'Contact',
    submit: 'Soumettre',
    cancel: 'Annuler',
    loading: 'Chargement...',
    error: 'Une erreur est survenue',
    success: 'Opération réussie',
  },
  de: {
    welcome: 'Willkommen in unserer Anwendung',
    home: 'Startseite',
    about: 'Über uns',
    contact: 'Kontakt',
    submit: 'Absenden',
    cancel: 'Abbrechen',
    loading: 'Wird geladen...',
    error: 'Ein Fehler ist aufgetreten',
    success: 'Vorgang erfolgreich',
  },
  ja: {
    welcome: 'アプリケーションへようこそ',
    home: 'ホーム',
    about: '約',
    contact: '接触',
    submit: '提出する',
    cancel: 'キャンセル',
    loading: '読み込み中...',
    error: 'エラーが発生しました',
    success: '操作成功',
  },
};

/**
 * Current language (default: 'en')
 */
let currentLanguage: Language = 'en';

/**
 * Set the current language
 */
export const setLanguage = (language: Language): void => {
  currentLanguage = language;
};

/**
 * Get the current language
 */
export const getLanguage = (): Language => {
  return currentLanguage;
};

/**
 * Get all available languages
 */
export const getAvailableLanguages = (): Language[] => {
  return Object.keys(translations) as Language[];
};

/**
 * Translate a key to the current language
 */
export const translate = (key: string, fallback?: string): string => {
  const dictionary = translations[currentLanguage];
  return dictionary[key] || fallback || key;
};

/**
 * Shorthand function for translate
 */
export const t = translate;

/**
 * Format a date according to the current language
 */
export const formatDate = (date: Date | string | number): string => {
  const dateObj = typeof date === 'object' ? date : new Date(date);

  return dateObj.toLocaleDateString(
    currentLanguage === 'en' ? 'en-US' :
      currentLanguage === 'es' ? 'es-ES' :
        currentLanguage === 'fr' ? 'fr-FR' :
          currentLanguage === 'de' ? 'de-DE' :
            'ja-JP',
  );
};
