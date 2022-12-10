import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native'; //4-Importe
import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;


export const Header = styled.View`
width: 100%;
height: 113px;

background-color: ${({ theme }) => theme.colors.header};
justify-content: flex-end;
padding: 32px 24px;
`;


export const HeaderContent = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-between;
`;


export const TotalCars = styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.text};
`;


export const CarList = styled(FlatList).attrs({ //4-Continuação do index, informe
  //o Flatlist, depois o attrs, para incluir as propriedades dentro do styled components
  contentContainerStyle: {
    padding: 24
  },
  showVerticalScrollIndicator: false
})``;

