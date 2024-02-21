import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        russian: 'Russian',
        shareholders: 'Shareholders',
        other: 'Other',
        progress: 'Probability of counterparty approval',
        corporation: 'Large corporation',
        smallBusiness: 'Small business',
        general: 'General data',
        legalEntity: 'Legal entity name',
        country: 'Country of incorporation',
        link: 'Link to website / Active social network / Public catalog with reviews',
        personalComposition: 'Personal composition of the management body',
        directorName: 'First and last name of director',
        directorNationality: `Director's nationality`,
        attachDirectorDocument: `Attach a non-Russian document (passport, driver's license or residence permit)`,
        directorDoc: `Non-Russian document (passport, driver's license or residence permit)`,
        addShareholder: 'Add a beneficiary',
        addShareholderName: 'First and last name of 25%+ beneficiaries',
        selectFile: 'Select file',
        orDragHere: ' or drag and drop here',
        activity: 'Types of company activities',
        businessDesc: 'Short description of the nature of business',
        businessSource: 'Source of Funds',
        attachments:
          'Attach supporting documents: invoices, contracts or bank statements',
        attachmentsText:
          'Supporting documents: invoices, contracts or bank statements',
        save: 'Save',
        create: 'Create',
        needInformation: 'Information required',
        companySize: 'Company size',
        emptyField: 'Empty field',
        goBack: 'Go Back',
      },
    },
    ru: {
      translation: {
        russian: 'Русский',
        shareholders: 'Акционеры',
        other: 'Другая',
        progress: 'Вероятность одобрения контрагента',
        corporation: 'Крупная корпорация',
        smallBusiness: 'Малый бизнес',
        general: 'Общие данные',
        legalEntity: 'Название юр.лица',
        country: 'Страна инкорпорации',
        link: 'Ссылка на сайт / Активную соц.сеть / Публичный каталог с отзывами',
        personalComposition: 'Персональный состав органа управления',
        directorName: 'ФИО директора',
        directorNationality: 'Национальность директора',
        attachDirectorDocument: `Прикрепите нероссийский документ (паспорт, водительское удостоверение или ВНЖ)`,
        directorDoc: `Нероссийский документ (паспорт, водительское удостоверение или ВНЖ)`,
        addShareholder: 'Добавить акционера',
        addShareholderName: 'ФИО акционера с долей акций свыше 25%',
        selectFile: 'Выберите файл ',
        orDragHere: ' или перетащите сюда',
        activity: 'Виды деятельности',
        businessDesc: 'Краткое описание природы бизнеса',
        businessSource: 'Источник происхождения денежных средств',
        attachments:
          'Прикрепите подтверждающие документы: инвойсы, контракты или выписки с банковского счета',
        attachmentsText:
          'Подтверждающие документы: инвойсы, контракты или выписки с банковского счета',
        save: 'Сохранить данные',
        create: 'Добавить',
        needInformation: 'Требуется информация',
        companySize: 'Размер компании',
        emptyField: 'Не указано',
        goBack: 'К списку контрагентов',
      },
    },
  },
});

export default i18n;
