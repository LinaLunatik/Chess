import { deepCopy } from "./deepCopy.js"

console.log('Запуск тестов deepCopy...\n')

// ─────────────────────────────────────────
// БЛОК 1: Тесты на равенство значений
// ─────────────────────────────────────────
const testCases = [
    // Примитивы
    { param: 'apple', expect: 'apple', type: 'primitive', name: 'Строка' },
    { param: 5, expect: 5, type: 'primitive', name: 'Число' },
    { param: 0, expect: 0, type: 'primitive', name: 'Ноль' },
    { param: null, expect: null, type: 'primitive', name: 'null' },
    { param: '', expect: '', type: 'primitive', name: 'Пустая строка' },
    { param: true, expect: true, type: 'primitive', name: 'Boolean true' },
    { param: false, expect: false, type: 'primitive', name: 'Boolean false' },
    
    // Массивы
    {
        param: ['apple', 'orange'],
        expect: ['apple', 'orange'],
        type: 'array',
        name: 'Простой массив'
    },
    {
        param: ['apple', 'orange', [123, 456]],
        expect: ['apple', 'orange', [123, 456]],
        type: 'nested',
        name: 'Вложенный массив'
    },
    {
        param: [{ fruit: 'apple', weight: 25 }, { fruit: 'orange', weight: 40 }],
        expect: [{ fruit: 'apple', weight: 25 }, { fruit: 'orange', weight: 40 }],
        type: 'nested',
        name: 'Массив объектов'
    },
    
    // Объекты
    {
        param: { fruit: 'apple', weight: 25 },
        expect: { fruit: 'apple', weight: 25 },
        type: 'object',
        name: 'Простой объект'
    },
    {
        param: { fruit: 'apple', weight: 25, color: ['green', 'red'] },
        expect: { fruit: 'apple', weight: 25, color: ['green', 'red'] },
        type: 'nested',
        name: 'Объект с вложенным массивом'
    },
]

let passed = 0
let failed = 0

testCases.forEach(({ param, expect, type, name }, index) => {
    const result = deepCopy(param)
    
    // Сравниваем: примитивы через ===, остальное через JSON
    const isMatch = type === 'primitive'
        ? result === expect
        : JSON.stringify(result) === JSON.stringify(expect)
    
    if (isMatch) {
        console.log(`✅ [${name}] PASS`)
        passed++
    } else {
        console.log(`❌ [${name}] FAIL`)
        console.log(`   Ожиддалось: ${JSON.stringify(expect)}`)
        console.log(`   Получено:   ${JSON.stringify(result)}`)
        failed++
    }
})

// ─────────────────────────────────────────
// БЛОК 2: Тесты на НЕЗАВИСИМОСТЬ 
// ─────────────────────────────────────────
console.log('\n Тесты на независимость копий:\n')

// Тест А: Вложенный массив
const arrOriginal = [1, [2, 3]]
const arrCopy = deepCopy(arrOriginal)
arrCopy[1].push(999) // Меняем копию
const arrIndependent = arrOriginal[1].length === 2 // Проверяем оригинал

console.log(` Вложенный массив: ${arrIndependent ? '✅ PASS' : '❌ FAIL'}`)
if (arrIndependent) passed++; else failed++

// Тест Б: Вложенный объект
const objOriginal = { a: { b: 1 } }
const objCopy = deepCopy(objOriginal)
objCopy.a.b = 999 // Меняем копию
const objIndependent = objOriginal.a.b === 1 // Проверяем оригинал

console.log(` Вложенный объект: ${objIndependent ? '✅ PASS' : '❌ FAIL'}`)
if (objIndependent) passed++; else failed++

// Тест В: Массив объектов
const mixedOriginal = [{ x: 1 }, { y: 2 }]
const mixedCopy = deepCopy(mixedOriginal)
mixedCopy[0].x = 999
const mixedIndependent = mixedOriginal[0].x === 1

console.log(` Массив объектов: ${mixedIndependent ? '✅ PASS' : '❌ FAIL'}`)
if (mixedIndependent) passed++; else failed++

// ─────────────────────────────────────────
// ИТОГИ
// ─────────────────────────────────────────
console.log('\n' + '═'.repeat(40))
console.log(` ИТОГО: ${passed} passed, ${failed} failed`)
if (failed === 0) {
    console.log(' Все тесты пройдены! Функция готова.')
} else {
    console.log('  Есть ошибки — проверь реализацию.')
}
console.log('═'.repeat(40))