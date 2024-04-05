export function translate(language) {
    if(converter.find(item => item.code === language)){
    //search code and when a code is === at input returns his flag 
    return converter.find(item => item.code === language).flag
    } else {
        console.log('missing conversion language-flag for:', language, 'language iso 639 language code');
    }
}

const converter =
[ //to add some more coiuntryes use code: ISO 639 language codes & flag: ISO_3166-1_alpha-2
{ code: 'af', name: 'Afrikaans', flag: 'za' },
{ code: 'sq', name: 'Shqip', flag: 'al' },
{ code: 'am', name: 'አማርኛ', flag: 'et' },
{ code: 'en-AU', name: 'English (Australia)', flag: 'au' },
{ code: 'en-CA', name: 'English (Canada)', flag: 'ca' },
{ code: 'en-GB', name: 'English (United Kingdom)', flag: 'gb' },
{ code: 'en', name: 'English', flag: 'us' },
{ code: 'ar', name: 'العربية', flag: 'sa' },
{ code: 'hy', name: 'Հայերեն', flag: 'am' },
{ code: 'my', name: 'ဗမာ', flag: 'mm' },
{ code: 'eu', name: 'Euskara', flag: 'es' },
{ code: 'bn', name: 'বাংলা', flag: 'bd' },
{ code: 'bg', name: 'Български', flag: 'bg' },
{ code: 'be', name: 'Беларуская', flag: 'by' },
{ code: 'hr', name: 'Hrvatski', flag: 'hr' },
{ code: 'da', name: 'Dansk', flag: 'dk' },
{ code: 'et', name: 'Eesti', flag: 'ee' },
{ code: 'tl', name: 'Filipino', flag: 'ph' },
{ code: 'fi', name: 'Suomi', flag: 'fi' },
{ code: 'fr', name: 'Français (France)', flag: 'fr' },
{ code: 'fr-CA', name: 'Français (Canada)', flag: 'ca' },
{ code: 'gl', name: 'Galego', flag: 'es' },
{ code: 'ka', name: 'ქართული', flag: 'ge' },
{ code: 'gu', name: 'ગુજરાતી', flag: 'in' },
{ code: 'he', name: 'עברית', flag: 'il' },
{ code: 'hi', name: 'हिन्दी', flag: 'in' },
{ code: 'id', name: 'Indonesia', flag: 'id' },
{ code: 'is', name: 'Íslenska', flag: 'is' },
{ code: 'it', name: 'Italiano', flag: 'it' },
{ code: 'ja', name: '日本語', flag: 'jp' },
{ code: 'kn', name: 'ಕನ್ನಡ', flag: 'in' },
{ code: 'ca', name: 'Català', flag: 'es' },
{ code: 'kk', name: 'Қазақ тілі', flag: 'kz' },
{ code: 'km', name: 'ខ្មែរ', flag: 'kh' },
{ code: 'ko', name: '한국어', flag: 'kr' },
{ code: 'ky', name: 'Кыргызча', flag: 'kg' },
{ code: 'lo', name: 'ລາວ', flag: 'la' },
{ code: 'lt', name: 'Lietuvių', flag: 'lt' },
{ code: 'lv', name: 'Latviešu', flag: 'lv' },
{ code: 'mk', name: 'Македонски', flag: 'mk' },
{ code: 'ml', name: 'മലയാളം', flag: 'in' },
{ code: 'ms-MY', name: 'Bahasa Melayu (Malaysia)', flag: 'my' },
{ code: 'ms', name: 'Bahasa Melayu', flag: 'my' },
{ code: 'mr', name: 'मराठी', flag: 'in' },
{ code: 'hu', name: 'Magyar', flag: 'hu' },
{ code: 'mn', name: 'Монгол', flag: 'mn' },
{ code: 'ne', name: 'नेपाली', flag: 'np' },
{ code: 'nl', name: 'Nederlands', flag: 'nl' },
{ code: 'no', name: 'Norsk', flag: 'no' },
{ code: 'de', name: 'Deutsch', flag: 'de' },
{ code: 'pa', name: 'ਪੰਜਾਬੀ', flag: 'in' },
{ code: 'fa', name: 'فارسی', flag: 'ir' },
{ code: 'pl', name: 'Polski', flag: 'pl' },
{ code: 'pt-BR', name: 'Português (Brasil)', flag: 'br' },
{ code: 'pt-PT', name: 'Português (Portugal)', flag: 'pt' },
{ code: 'ro', name: 'Română', flag: 'ro' },
{ code: 'ru', name: 'Русский', flag: 'ru' },
{ code: 'rm', name: 'Rumantsch', flag: 'ch' },
{ code: 'si', name: 'සිංහල', flag: 'lk' },
{ code: 'sk', name: 'Slovenčina', flag: 'sk' },
{ code: 'sl', name: 'Slovenščina', flag: 'si' },
{ code: 'sr', name: 'Српски', flag: 'rs' },
{ code: 'sw', name: 'Kiswahili', flag: 'tz' },
{ code: 'ta', name: 'தமிழ்', flag: 'in' },
{ code: 'te', name: 'తెలుగు', flag: 'in' },
{ code: 'th', name: 'ไทย', flag: 'th' },
{ code: 'tr', name: 'Türkçe', flag: 'tr' },
{ code: 'uk', name: 'Українська', flag: 'ua' },
{ code: 'ur', name: 'اردو', flag: 'pk' },
{ code: 'vi', name: 'Tiếng Việt', flag: 'vn' },
{ code: 'zu', name: 'Zulu', flag: 'za' },
{ code: 'az', name: 'Azərbaycan dili', flag: 'az' },
{ code: 'cs', name: 'Čeština', flag: 'cz' },
{ code: 'zh-HK', name: '中文（香港）', flag: 'hk' },
{ code: 'zh-TW', name: '中文（繁體）', flag: 'tw' },
{ code: 'zh', name: '中文（简体）', flag: 'cn' },
{ code: 'el', name: 'Ελληνικά', flag: 'gr' },
{ code: 'es-419', name: 'Español (Latinoamérica)', flag: '🌎' },
{ code: 'es-US', name: 'Español (Estados Unidos)', flag: 'us' },
{ code: 'es', name: 'Español (España)', flag: 'es' },
{ code: 'sv', name: 'Svenska', flag: 'se' },
{ code: 'bs', name: 'Bosnian', flag: 'ba'}
];