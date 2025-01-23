import { render } from '@testing-library/react';
import { WidgetWrapper } from './WidgetWrapper';

describe('WidgetWrapper', () => {
  it('renders the title and description', () => {
    const { getByText } = render(
      <WidgetWrapper title="Test Title" description="Test Description">
        <div>Child Content</div>
      </WidgetWrapper>,
    );

    expect(getByText('Test Title')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
  });

  it('renders children content', () => {
    const { getByText } = render(
      <WidgetWrapper title="Test Title" description="Test Description">
        <div>Child Content</div>
      </WidgetWrapper>,
    );

    expect(getByText('Child Content')).toBeInTheDocument();
  });
});
