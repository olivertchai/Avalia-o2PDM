import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './button'; // Certifique-se de importar corretamente

describe("Button Component", () => {
  it("should render a button with 'Clique Aqui' text", () => {
    const functionMock = jest.fn();
    const { getByText } = render(
      <Button title="Clique Aqui" onPress={functionMock} />
    );
    expect(getByText("Clique Aqui")).toBeTruthy();

  });

  it("Should be render button and call onPress", () => {
    const functionMock = jest.fn();
    const { getByText } = render(
      <Button title="Clique Aqui" onPress={functionMock} />
    );
    expect(getByText("Clique Aqui")).toBeTruthy();

    fireEvent.press(getByText("Clique Aqui"));
    expect(functionMock).toHaveBeenCalled();

  });
});
