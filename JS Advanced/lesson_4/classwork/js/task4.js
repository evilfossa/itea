/*
      Задание:

      1. Сгенерировать список стран в Select countries
      2. При выборе страны генерировать еще один Select со списком
        городов этой страны и вывести этот селект в блок result
      3. При выборе города нужно случайно рандомить температуру от
      -10 градусов до +40. Если температура

        -10 до 0 то 'Солнечно' 'Легкий снегопад' 'Сильный снегопад'
        0 до 30 то  'Солнечно' 'Дождь' 'Ветер' 'Сильный дождь'
        30 до 40 то 'Солнечно' 'Засуха' 'Ветер'

      4. Вывести сообщение на страничку
        {Country}. В {City} {Weather} {Temperature} градусов.
        Ukraine. В Kyiv Солнечно -10 градусов

        + бонус добавить красивые картинки с погодой
    */
window.addEventListener("load", function () {
    var countries = ['Ukraine', 'Poland', 'USA'];
    var ukraineCity = ['Kyiv', 'Lviv', 'Odesa', 'Charkiv'];
    var polandCity = ['Warszawa', 'Poznan', 'Krakow', 'Katowice'];
    var usaCity = ['New York', 'Los Angeles', 'Las Vegas', 'Chicago'];
});