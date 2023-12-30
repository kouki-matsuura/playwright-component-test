import Checkbox from "@mui/material/Checkbox";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import AddressForm from "../../Checkout/AddressForm";

test("チェックボックスをクリックするとcheck状態が切り替わる", async () => {
  render(<AddressForm />);
  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});
