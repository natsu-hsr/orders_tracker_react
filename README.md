# Orders Tracker

![React](https://img.shields.io/badge/React-19+-61DAFB.svg?style=flat&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6.svg?style=flat&logo=typescript) ![Ant Design](https://img.shields.io/badge/Ant_Design-5+-0170FE.svg?style=flat&logo=ant-design) ![Redux](https://img.shields.io/badge/Redux-764ABC.svg?style=flat&logo=redux)

*supported languages: RU*

Вебсайт для отображения таблицы заказов с возможностью фильтрации, поиском и возможностью просмотреть подробности конкретного заказа

## Стек:
- React
- TypeScript
- Ant Design
- Redux + RTK

## Особенности

- **Таблица заказов**: Отображение данных в таблице с поддержкой пагинации и прокрутки (Ant Design Table).
- **Фильтры**: Интерактивная форма фильтров в выдвижной панели (Drawer) для фильтрации заказов.
- **Типизация**: Полная поддержка TypeScript для надежности и масштабируемости.
- **Состояние**: Управление фильтрами через Redux.
- **Адаптивность**: Проект адаптирован для мобильных экранов, планшетов, средних экранов, а также широкоформатных дисплеев.

*В качестве данных используются моки, выполнен в качестве тестового задания*


## Установка и запуск

1. **Клонируйте репозиторий**:
   ```bash
   git clone https://github.com/natsu-hsr/orders_tracker_react.git
   cd orders_tracker_react

2. **Установите зависимости**:
   ```bash 
   npm install

3. **Запустите проект локально**:
   ```bash
   npm run dev

4. **Откройте страницу локально в браузере.**


## Структура проекта
```
root/
├── public/                     # Статические файлы
│   └── panda.svg               # Иконка сайта
├── src/                        # Исходный код
│   ├── assets/                 # Статические ресурсы (лого)
│   ├── components/             # Компоненты
│   │   ├── custom-fields/      # Кастомные поля
│   │   │   ├── fields/         # Поля
│   │   │   ├── technical/      # Технические компоненты
│   │   │   ├── custom-fields.types.ts
│   │   │   └── index.ts
│   │   ├── custom-table/       # Компонент таблицы
│   │   ├── filters-form/       # Форма фильтров
│   │   ├── header/             # Шапка
│   │   └── order-details-form/ # Форма подробностей заказа
│   ├── mocks/                  # Моки-данные
│   ├── pages/                  # Страницы
│   │   ├── home/               # Домашняя страницы
│   │   ├── not-found/          # Страница 404
│   │   ├── order-details/      # Подробности заказа
│   │   └── orders/             # Страница с таблицей заказов
│   ├── shared/                 # Общие утилиты и стили
│   │   ├── styles/             # Общие стили
│   │   │   └── mixins.scss     # Миксины
│   ├── store/                  # Настройка Redux
│   │   ├── config/             # Конфигурация Redux
│   │   └── slices/             # Слайсы Redux (например, orders)
│   ├── App.tsx                 # Главный компонент
│   ├── main.tsx                # Точка входа
│   └── index.css               # Глобальные стили
├── package.json                # Конфигурация зависимостей и скриптов
├── tsconfig.json               # Конфигурация TypeScript
└── README.md                  
```
