// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import Spinner from "./Spinner"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'
import React from "react"

test('sanity', () => {
  expect(true).toBe(true)
})
test('Spinner renders correctly', () => {
  render(<Spinner on={true}/>)
  const spinnerText = screen.getByText(/please wait.../i)
  expect(spinnerText).toBeVisible()
})
test('Spinner does not render when on prop is false', () => {
  render(<Spinner on={false} />);
  const spinnerText = screen.queryByText(/please wait.../i);
  expect(spinnerText).not.toBeInTheDocument();
})
