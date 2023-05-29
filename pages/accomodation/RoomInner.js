import React from "react"
import Head from "next/head"

import Header from "../../component/header"
import Footer from "../../component/footer"
import RoomInnerAbout from "./RoomInnerAbout"
import RoomInnerImages from "./RoomInnerImages"
import Amenities from "./Amenities"

const {
	Room360,
	RoomBookNowContainer,
	RoomBookNowButton
} = require("../../style/accomodation/Room.Styled")

const {
	TitleH2
} = require("../../style/common/Common.Styled")

const RoomInner = ( props ) => {

	const {

		languageDetected,
		isMobile,

	} = props

	if( typeof languageDetected !== "undefined" && languageDetected !== null ){
		
		return(
			<div>
				<Head>
	        		{/* <title>Luxury Water Villa in Maldives | Water Villa Resort in Maldives | Water Villa Resort for Families</title> */}
	        		<title>{ props.seo_title }</title>
	        		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<meta name="description" content={props.seo_description} />
	      		</Head>
				<Header
					isMobile={ isMobile }
					image={ typeof props.images !== "undefined" ? props.images[0] : "https://mohit.sgp1.cdn.digitaloceanspaces.com/kudavillingili/beach-villa.jpg" }
					theme="light"
					languageDetected={ languageDetected }
				/>
				<RoomInnerAbout
					area={ props.area }
					bed={ props.bed }
					pool_size={ props.pool_size }
					description={ props.description }
					guests={ props.guests }
					isMobile={ isMobile }
					languageDetected={ languageDetected }
					name={ props.name }
				/>
				<RoomInnerImages
					images = { props.images }
					isMobile={ isMobile }
				/>
				<Amenities
					title={ languageDetected === "ar" ? "مرافق الفيلا" : languageDetected === "ru" ? "Удобства на вилле" : "Villa Amenities" }
					amenities={ props.amenities }
					isMobile={ isMobile }
					languageDetected={ languageDetected }
				/>
				{
					props.tour != "" &&
					<div>
						<TitleH2 isMobile={ isMobile } textAlign="center" marginTop="150px">{ languageDetected === "ar" ? ("إطلالة 360 درجة") : languageDetected === "ru" ? "Обзор 360°" :  ("360° View") } </TitleH2>
						<Room360 isMobile={ isMobile }>
							<iframe src={ props.tour } width="100%" height="100%" frameBorder="none"/>
						</Room360>
					</div>
				}
				<RoomBookNowContainer isMobile={ isMobile }>
					<a href="https://be.synxis.com/?Hotel=36480&Chain=28812" target="_blank" rel="noreferrer">
						<RoomBookNowButton>
							{ languageDetected === "ar" ? "الحجز الآن" : languageDetected === "ru" ? "Забронировать сейчас" : "Book Now" }
						</RoomBookNowButton>
					</a>
				</RoomBookNowContainer>
				<Footer
					languageDetected={ languageDetected }
				/>
			</div>
		)

	} else {

		return(
			<div/>
		)
		
	}

}

export default RoomInner
