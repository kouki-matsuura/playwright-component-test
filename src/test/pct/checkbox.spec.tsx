import { test, expect } from "@playwright/experimental-ct-react";
import React from "react";
import AddressForm from "../../Checkout/AddressForm";

test("チェックボックスをクリックするcheck状態が切り替わる", async ({
  mount,
}) => {
  const component = await mount(<AddressForm />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const checkbox = component.getByRole("checkbox");
  await checkbox.click();
  expect(checkbox).toBeChecked();
});
