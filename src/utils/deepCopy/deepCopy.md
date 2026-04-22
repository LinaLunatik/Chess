deepCopy
Описание
Функция deepCopy создаёт глубокую (рекурсивную) копию переданных данных. Все вложенные объекты и массивы копируются независимо — изменение копии не затрагивает оригинал.
Синтаксис
deepCopy(param)
Параметры
param (тип - любой) - Данные для копирования: примитив, объект, массив или их комбинация
Возвращаемое значение
Тип - любой. Новая независимая копия переданных данных
Примеры использования
Примитивы
deepCopy(42)           // 42
deepCopy('text')       // 'text'
deepCopy(true)         // true
deepCopy(null)         // null
deepCopy(0)            // 0
deepCopy('')           // ''
Массивы
const arr = [1, [2, 3]]
const copy = deepCopy(arr)
copy[1].push(999)
console.log(arr)        // [1, [2, 3]] — оригинал не изменился 
console.log(copy)       // [1, [2, 3, 999]]
Объекты
const obj = { a: 1, b: { c: 2 } }
const copy = deepCopy(obj)
copy.b.c = 999
console.log(obj.b.c)    // 2 — оригинал не изменился 
console.log(copy.b.c)   // 999
Смешанные структуры
const game = {
    players: ['white', 'black'],
    board: { a1: 'rook', e1: 'king' },
    history: [{ from: 'e2', to: 'e4' }]
}
const gameCopy = deepCopy(game)
gameCopy.board.a1 = 'queen'
console.log(game.board.a1)  // 'rook' — оригинал не изменился 
Ограничения
✅ Поддерживается
Примитивы (string, number, boolean, null, undefined)
Обычные объекты ({})
Массивы ([])
Вложенные структуры любой глубины
❌ Не поддерживается
Date                - Превратится в пустой объект {}
RegExp              - Превратится в пустой объект {}
Map / Set           - Превратится в пустой объект {}
Function            - Вернётся как есть (по ссылке)
Тестирование
Функция покрыта тестами в файле deepCopy.test.js.