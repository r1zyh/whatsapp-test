# Тестовое задание для Green-Api

Для использования приложения вам понадобится:

1. Зарегистрировать или войти в свой аккаунт на сайте [green-api.com](https://green-api.com/).
2. Перейти в раздел **быстрый старт** и последовательно выполнить все шаги по настройке окружения.
3. После того как все будет готово, нужно загрузить, разархивировать и открыть проект.
4. Установить зависимости командой: **npm install** (должен быть установлен NodeJs)
   После чего проект можно запустить командой **npm run start**
5. Далее нужно последовательно заполнить формы данными из созданного инстанса в личном кабинете, 
а именно: **idInstance, apiTokenInstance**.
6. ВАЖНО!!! Ссылка на инстанс является статичной и хранится в константе: **const apiUrl = "https://1103.api.green-api.com";**
в файле **const.ts** поэтому для корректной работы приложения нужно изменить ее на свой **apiUrl** из вашего инстанса в личном кабинете на сайте [green-api.com](https://green-api.com/).
7. После этого можно начинать общение с собеседником.
8. ВАЖНО!!! Инстанс разработчика дает ограниченной доступ только к 3 чатам поэтому при попытке отправить сообщение на большее количество номеров может быть ошибка. 
(В таком случае нужно вернуться к предыдущей странице и обновить Command + R / CTRL + R или F5).
9. ВАЖНО!!! Настройка и тестирование приложения производилось для росссийских номеров, ввод поддерживается как с 8 так и 7 без знаков и пробелов между цифрами поэтому номера из других стран могут не поддерживаться(не тестировалось) 

Спасибо и приятного пользования!)

