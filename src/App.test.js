import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

test('renders portfolio name and main headings', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Deep Govindvira/i);
  expect(nameElements.length).toBeGreaterThan(0);

  const skillsHeading = screen.getByRole('heading', { name: /Technical Skills/i });
  expect(skillsHeading).toBeInTheDocument();

  const experienceHeading = screen.getByRole('heading', { name: /Work & Leadership/i });
  expect(experienceHeading).toBeInTheDocument();

  const projectsHeading = screen.getByRole('heading', { name: /Software Projects/i });
  expect(projectsHeading).toBeInTheDocument();
});

test('filters technical skills when typing in search input', () => {
  render(<App />);
  const skillsSection = screen.getByRole('heading', { name: /Technical Skills/i }).closest('section');
  const searchInput = within(skillsSection).getByPlaceholderText(/search skills/i);
  expect(searchInput).toBeInTheDocument();

  fireEvent.change(searchInput, { target: { value: 'Kafka' } });
  expect(within(skillsSection).getByText('Kafka')).toBeInTheDocument();
  expect(within(skillsSection).queryByText('Angular')).not.toBeInTheDocument();
});
