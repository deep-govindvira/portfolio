import { render, screen } from '@testing-library/react';
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
