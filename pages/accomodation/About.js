const {

	AboutContainer,
	AlignCenter,
	BodyText,
	KudavillingiliDot,
	TitleH2,
	ViewPort,

} = require("../../style/common/Common.Styled")

const About = ( props ) => {

	const {
		
		aboutMobile,
		description,
		isMobile,

	} = props
	return(
		<AboutContainer isMobile={ props.isMobile }>
			<AlignCenter isMobile={ isMobile }>
				<KudavillingiliDot isMobile={ isMobile } />
				{
					false &&
					<TitleH2 isMobile={ isMobile }  marginTop={ "80px" }>{ props.title }</TitleH2>
				}
				<h1>Accommodation</h1>
				<BodyText isMobile={ isMobile } dangerouslySetInnerHTML={{ __html: isMobile ? aboutMobile : description }}  marginBottom={ props.isMobile ? "0px" : "inherit" }/>
			</AlignCenter>
		</AboutContainer>
	)

}

export default About