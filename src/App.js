import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
/**
 * Import i18next
 */
import i18next from 'i18next';
/** Import the config that just created */
import './i18n.config';

const App = () => {
  /**
   * Use useTranslation hooks
   */
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const handleLanguageSelect = (event) => {
    setSelectedLanguage(event.target.value);
    /**
     * Set the language to either en or zh
     */
    i18next.changeLanguage(event.target.value);
  }

  return (
    <div>
      <label>
        English
        <input type="radio" value="en" checked={selectedLanguage === 'en'} onClick={handleLanguageSelect} />
      </label>
      <label>
        中文
        <input type="radio" value="zh" checked={selectedLanguage === 'zh'} onClick={handleLanguageSelect} />
      </label>
      <p>{t('selectedLanguage', { language: selectedLanguage })}</p>
      <p>Your have switch language for 0 times</p>
      {/**
        * Use the key in the language file to get the translated text
        */}
      <p>{t('welcome')}</p>
    </div>
  );
}

export default App;
