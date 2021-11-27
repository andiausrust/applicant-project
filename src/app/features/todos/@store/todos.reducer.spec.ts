import { todosActions } from './todos-types';
import { initialTodosState, todosReducer } from './todos.reducer';

describe('unknown action', () => {
  it('should return the initial state', () => {
    const action = { type: 'NOOP' };
    const result = todosReducer(initialTodosState, action);

    expect(result).toBe(initialTodosState);
  });
});

describe('loadAllTodosRequest', () => {
  it('should set loading to true', () => {
    const action = todosActions.loadAllTodosRequest();
    const result = todosReducer(initialTodosState, action);

    expect(result).toEqual({
      ...initialTodosState,
      loading: true
    });
  });
});
