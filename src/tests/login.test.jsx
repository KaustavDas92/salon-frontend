import {beforeAll, beforeEach, describe, expect, it,test} from "vitest"
import { fireEvent, render,screen, within } from "@testing-library/react";
import '@testing-library/jest-dom';
import LoginPage from "../pages/LoginPage";

describe("Test Login Page", () =>{
    beforeEach(()=>{
        render(<LoginPage/>)
    })
    it("check for elements", () =>{
       const username=screen.getByLabelText(/Username/i)
       const password=screen.getByLabelText(/Password/i)

        expect(username).toBeInTheDocument()
        expect(password).toBeInTheDocument()
    })
})