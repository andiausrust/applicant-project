export interface Todo {
  id: string;
  description: string;
  dueDate: Date;
  status: 'open' | 'completed'; // todo use enum
}
