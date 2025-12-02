import {renderRouter, screen} from 'expo-router/testing-library'
import HomeScreen from './home'
import about from '@/app/about'
import { fireEvent } from '@testing-library/react-native'
describe("Testing Home Page",() =>{
    it("should render the link to the About screen",() =>{
        renderRouter({
            index:HomeScreen
        })

    expect(screen.getByText("Ir para Sobre")).toBeTruthy();
    })

    // it("should navigate to the /about page when clicking the link",async() =>{
    //     renderRouter({
    //         index:HomeScreen,
    //         about: about
    //     }),{
    //         initialUrl:""
    //     }
    //     fireEvent.press(screen.getAllByText("Ir para Sobre"))
    //     expect(await screen.findByText("Sobre"))
    // })
})