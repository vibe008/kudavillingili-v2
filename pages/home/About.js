import React from "react"
import { isMobile } from "react-device-detect"

const {

	AboutContainer,
	AlignCenter,
	BodyText,
	KudavillingiliDot,
	TitleH2,
	ViewPort,

} = require("../../style/common/Common.Styled")

const About = ( props ) => {

	return(
		<AboutContainer isMobile={ props.isMobile }>
			<AlignCenter>
				<KudavillingiliDot isMobile={ props.isMobile }/>
				{
					false &&
					<TitleH2 isMobile={ props.isMobile }  marginTop={ "80px" }>{ props.title }</TitleH2>
				}
				<BodyText isMobile={ props.isMobile } dangerouslySetInnerHTML={{ __html : props.isMobile ? props.aboutMobile : props.description }}  marginBottom={ props.isMobile ? "0px" : "inherit" } />
			</AlignCenter>
		</AboutContainer>
	)

}

export default About
