import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('add a task', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('What needs to be done?');
  const taskText = 'Новая задача';

  // Вводим текст
  fireEvent.change(inputElement, { target: { value: taskText } });
  // Наживаем "Enter"
  fireEvent.keyDown(inputElement, { key: 'Enter', code: 13, charCode: 13 });

  const taskElement = screen.getByText(taskText) as HTMLInputElement;
  expect(taskElement).toBeInTheDocument();
});


test('completed a task', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('What needs to be done?');
  const taskText = 'Новая задача';

  fireEvent.change(inputElement, { target: { value: taskText } });
  fireEvent.keyDown(inputElement, { key: 'Enter', code: 13, charCode: 13 });

  const taskElement = screen.getByLabelText(taskText) as HTMLInputElement;

  // Проверяем, что изначально чекбокс не отмечен
  expect(taskElement.checked).toBe(false);

  // Кликаем на чекбокс
  fireEvent.click(taskElement);

  // Проверяем, что после клика чекбокс стал отмеченным
  expect(taskElement.checked).toBe(true);
});


