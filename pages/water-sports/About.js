const {
	AboutContainer,
	AlignCenter,
	BodyText,
	KudavillingiliDot,
	TitleH2,
	ViewPort
} = require('../../style/common/Common.Styled');

const About = ( props ) => {
	return(
		<AboutContainer isMobile={ props.isMobile }>
			<AlignCenter isMobile={ props.isMobile }>
				<KudavillingiliDot isMobile={ props.isMobile } />
				{
					false &&
					<TitleH2 isMobile={ props.isMobile }  marginTop={ '80px' }>{ props.title }</TitleH2>
				}
				<BodyText isMobile={ props.isMobile }>{ props.description }</BodyText>
			</AlignCenter>
		</AboutContainer>
	)
}

export default About;
