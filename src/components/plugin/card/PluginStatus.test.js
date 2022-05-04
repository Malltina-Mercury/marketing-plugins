import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import PluginStatus from "./PluginStatus";

test('Show Blocked label', () => {
  const onChange = jest.fn();
  render(
    <PluginStatus status={false} onChanged={onChange}/>
  );

  const labelElement = screen.getByText(/Blocked/i);
  expect(labelElement).toBeInTheDocument();
})

test('Show Allowed label', () => {
  const onChange = jest.fn();
  render(
    <PluginStatus status={true} onChanged={onChange}/>
  );

  const labelElement = screen.getByText(/Allowed/i);
  expect(labelElement).toBeInTheDocument();
})

test('Toggle switch', async () => {
  const onChange = jest.fn();
  render(
    <PluginStatus status={false} onChanged={onChange}/>
  );

  const labelBlockedElement = screen.getByText(/Blocked/i);
  expect(labelBlockedElement).toBeInTheDocument();

  await userEvent.click(screen.getByRole('switch'))

  const labelAllowedElement = screen.getByText(/Allowed/i);
  expect(labelAllowedElement).toBeInTheDocument();
})


