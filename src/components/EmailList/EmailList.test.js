import { screen } from "@testing-library/react"
import { renderWithProviders } from "../../utils/utils-for-tests"
import EmailList from "./EmailList"
import React from "react";


test('initial state of BackanedData is an empty array', async() => {
    renderWithProviders(<EmailList />);

    const emailListElement = await screen.findAllByRole('listitem');

    expect(emailListElement).not.toHaveLength(0);
   


  });