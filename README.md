# Implementation of List() class. Its testing and refactoring

### Розрахунок номеру варіанту та опис варіанту
- 1331 % 4 = 3 варіант
- Cписок на базі вбудованих масивів/списків -> двобічно зв'язаний список

### Інструкція, як зібрати проект та запустити тести
- Встановити <code><a href="https://nodejs.org/en">Node.js</a></code>
- Встановити <code><a href="https://www.npmjs.com/package/npm">Node Package Manager</a></code>
- У корені проекту оновити пакети командою <code>npm i</code>
- У корені проекту запустити тести командою <code>npm test</code>

### Опис проекту
#### 1) .\lib
- <code>linked-list.js</code> Реалізація двобічно зв’язаного списку
- <code>list.js</code> Реалізація списку на базі вбудованих масивах
- <code>messages.js</code> Набір повідомлень для помилок
- <code>type-checkers.js</code> Набір функцій для перевірки типів
#### 2) .\test
- <code>linked-list.test.js</code> Середовище тестування для зв’язаного списку
- <code>list.test.js</code> Середовище тестування списку на вбудованих масивах
- <code>test-of-methods.js</code> Тест, що тестує почергово методи екземпляру класу List() або LinkedList()

### Посилання на коміт, на якому впали тести на CI
- <code><a href="https://github.com/AlexShopiak/method-lab2/commit/46fd24007bb49a472d91f28aef4e71bfde77f06d">перший коміт</a></code>
- <code><a href="https://github.com/AlexShopiak/method-lab2/commit/c39e7e2dc8c014840cd1dfd9ba6acf842e0d8c0a">другий коміт</a></code>
- <code><a href="https://github.com/AlexShopiak/method-lab2/commit/343398bd00dd637d0383da2f3d51dcf17ec4dbac">третій коміт</a></code>

### Ваші короткі висновки, про те, чи дійсно вам допомогли unit-тести, чи це була марна трата часу
- Спершу, коли я створював клас на основі вбудованих масивів, тести були непотрібні та в цілому не мали сенсу.
  Проте, коли я почав виконувати рефакторинг та впроваджувати алгоритми середньої складності, тести зберегли купу
  мого часу, оскільки кылькість помилок була величезною. 
- Це був мій перший досвід у використанні юніт тестів, оскільки до цього увесь важливий функціонал я перевіряв 
  за допомогою онлайн компіляторів, копіюючи туди потрібний для тестування код. Надалі у своїх проектах я
  буду покривати код тестами, оскільки це економить час у довгостроковій перспективі.
