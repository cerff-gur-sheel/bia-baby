import { Container, Content } from "./styles";
import { InputContainer } from "../Containers";

import glass from "../../../assets/magnifying-glass.png"

export default function UpperBar() {
    return(
        <Container>
            <Content>
                <InputContainer 
                    image={glass}
                    placeholder={"Buscar no Bia Kids"} 
                    style={{
                        backgroundColor: 'white',
                        borderColor: 'white'
                    }}
                />
            </Content>
        </Container>
    );
}