import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('add a task and clear', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('What needs to be done?');
  const taskText = 'Новая задача';

  // Вводим название задачи
  fireEvent.change(inputElement, { target: { value: taskText } });
  // Добавляем задачу
  fireEvent.keyDown(inputElement, { key: 'Enter', code: 13, charCode: 13 });

  //Получаем добавленную задачу
  const taskElement = screen.getByLabelText(taskText) as HTMLInputElement;

  // Проверяем, что задача добавлена
  expect(taskElement).toBeInTheDocument();

  // Проверяем, что изначально чекбокс не отмечен
  expect(taskElement.checked).toBe(false);

  // Кликаем на чекбокс
  fireEvent.click(taskElement);

  // Проверяем, что после клика чекбокс стал отмеченным
  expect(taskElement.checked).toBe(true);

  // Удаляем выбранную задачу
  const deleteButton = screen.getByText('Clear completed');
  fireEvent.click(deleteButton);

  // Проверить, что задача удалена
  expect(taskElement).not.toBeInTheDocument();
});


