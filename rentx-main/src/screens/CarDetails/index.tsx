import React from "react";
import { 
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Accessories,
    Footer
} from './styles';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon'

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Acessory } from "../../components/Acessory";
import { Button } from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CarDTO } from "../../dtos/CarDTO";

interface Params{
    car: CarDTO;
}

export function CarDetails(){
    const navigation = useNavigation<any>();
    const route = useRoute();
    const { car } = route.params as Params; /*os parametros passados tem que ser conforme x*/

    function handleConfirmRental(){
        navigation.navigate('Scheduling', { car });
    }

    function handleBack(){
        navigation.goBack();
    }

    return(
        <Container>
            <Header>
                <BackButton onPress={handleBack}/>
            </Header>

            <CarImages>
                <ImageSlider 
                imagesUrl={car.photos} 
                />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>

                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price}</Price>
                    </Rent>
                </Details>

                <Accessories>
                    {
                        car.accessories.map(accessory =>(
                            <Acessory 
                                key={accessory.type}
                                name={accessory.name} 
                                icon={getAccessoryIcon(accessory.type)}
                            />
                        ))
                    }
                </Accessories>

                <About>{car.about}</About>
            </Content>

            <Footer>
                <Button title="Escolher período do aluguel" onPress={handleConfirmRental}/>
            </Footer>

        </Container>
    )
}