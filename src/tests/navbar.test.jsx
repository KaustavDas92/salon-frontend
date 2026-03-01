import TopBar from "../components/TopBar";
import {beforeAll, beforeEach, describe, expect, it,test} from "vitest"
import { fireEvent, render,screen, within } from "@testing-library/react";
import '@testing-library/jest-dom';

describe("Topbar Navbar" , () =>{
    beforeEach(()=>{
        render(<TopBar/>)
    })
    it("Check navbar items to be populated properly",()=>{
        
        const logo=screen.getByRole("img",{name:/logo/i})
        const businesses = screen.getByText(/Businesses/i)
        const features = screen.getByText(/Features/i)
        const prices = screen.getByText(/Prices/i)
        expect(logo).toBeInTheDocument()
        expect(businesses).toBeInTheDocument()
        expect(features).toBeInTheDocument()
        expect(prices).toBeInTheDocument()
    })

    it("Check some dropdown items",()=>{
       const businesses = screen.getByText(/Businesses/i)
       const dropdowntext= screen.queryByText(/What are you looking for?/i)
       
       fireEvent.mouseEnter(businesses) 
       expect(dropdowntext.closest('.dropdown-card')).toHaveClass('show')
       fireEvent.mouseLeave(businesses)
       expect(dropdowntext.closest('.dropdown-card')).not.toHaveClass('show')

    })

    it("Check arrow",()=>{
       const businesses = screen.getByText(/Businesses/i)
       const arrow=screen.getByAltText(/down-arrow/i)
       
       fireEvent.mouseEnter(businesses) 
       expect(arrow).toHaveClass('up')
       fireEvent.mouseLeave(businesses)
       expect(arrow).not.toHaveClass('up')

    })
    
    it("Check dropdown list items count",()=>{
       const businesses = screen.getByText(/Businesses/i)
       
       fireEvent.mouseEnter(businesses) 
       const dropdown= screen.getByText(/What are you looking for?/i).closest('.dropdown-card')
        const list=within(dropdown).getAllByRole("list")
        expect(list).toHaveLength(2)

        list.forEach(listItem =>{
            const listElements= within(listItem).getAllByRole('listitem')
            expect(listElements).toHaveLength(3)
        })

       fireEvent.mouseLeave(businesses)
       expect(dropdown).not.toHaveClass('show')

    })

    it("Check dropdown list items Functionality",()=>{
       const businesses = screen.getByText(/Businesses/i)
       const dropdown= screen.getByText(/What are you looking for?/i).closest('.dropdown-card')
       
       fireEvent.mouseEnter(businesses) 

       const image=within(dropdown).getByAltText(/navbar-card-image/i)
       expect(image).toHaveAttribute("src","assets/salon_images/pexels-shkrabaanthony-6599031.jpg")

        // First Button
       const HairSalonBtn=within(dropdown).getByText(/Hair Salon/i)
       fireEvent.mouseEnter(HairSalonBtn)
       expect(image).toHaveAttribute("src","assets/salon_images/hair-salon-5200392_1280.jpg")
       

       fireEvent.mouseLeave(businesses)
       expect(dropdown).not.toHaveClass('show')

    })
})