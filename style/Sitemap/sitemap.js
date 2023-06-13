import styled from 'styled-components';
export const SitemapContaier = styled.div`
 background-color:#F6F6F6;
`;
export const HeadingContaier = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
`;
export const BtoomLine = styled.div`
    width: 8px;
    height: 8px;
    -webkit-transform: rotate( 45deg );
    -ms-transform: rotate( 45deg );
    transform: rotate( 45deg );
    background: #C1A292;
`
export const InnerContainer = styled.div`
width: 80%;
margin: auto;
display: flex;
flex-wrap: wrap;
/* background-color: rgb(193,161,146); */
`
export const MapsCard = styled.div`
width: 250px;
height: 50px;
margin: 10px;
display: flex;
align-items: center;
/* background-color: red; */
`
export const Cropcards = styled.div`
 width: 100%;
 height:50px;
 border-radius: 10px;

 &:hover {
    box-shadow: 10px 3px 16px -11px rgba(0,0,0,0.68);
-webkit-box-shadow: 10px 3px 16px -11px rgba(0,0,0,0.68);
-moz-box-shadow: 10px 3px 16px -11px rgba(0,0,0,0.68);
 }
`
export const Heading = styled.h1`

`
export const Title = styled.p`
text-align: center;
text-transform: lowercase;
&:hover{
    text-transform:uppercase;
}
`

