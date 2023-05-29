import React from "react"
import { isMobile } from "react-device-detect"

import RoomInner from "./accomodation/RoomInner"
const { endpoint } = require( "../variables")

const BeachVilla = ( props ) => {

	const [ language, updateLanguage ] = React.useState( "en" )
	const [ is_mobile, updateState ] = React.useState( false )
	React.useEffect(() => {

		updateState( isMobile )

		// DETECT BROWSER LANGUAGE
		const userLanguage = navigator.language || navigator.userLanguage
		const userlanguageArray = userLanguage.split("-")

		// GET LANGUAGE FROM LOCAL STORAGE
		const storedLanguage = localStorage.getItem("language")
		if( storedLanguage !== null ){

			updateLanguage( storedLanguage )

		} else {

			if( userlanguageArray[0] === "ru" )
				updateLanguage("ru")
			if( userlanguageArray[0] === "ar" )
				updateLanguage("ar")

		}

	},[])

	const {

		amenities,
		amenities_ar,
		amenities_ru,
		bed_size,
		bed_size_ar,
		bed_size_ru,
		description,
		description_ar,
		description_ru,
		images,
		link_360,
		size,
		title,
		title_ar,
		title_ru,
		pool_size,
		seo_title,
		seo_description

	} = props.data
	return(
		<div>
			<RoomInner
				amenities={ language === "ar" ? amenities_ar : language === "ru" ? amenities_ru : amenities }
				area={ size }
				bed={ language === "ar" ? bed_size_ar : language === "ru" ? bed_size_ru : bed_size }
				pool_size= {pool_size}
				description={ language === "ar" ? description_ar : language === "ru" ? description_ru : description }
				guests="Max Guests"
				images={ images }
				isMobile={ is_mobile }
				languageDetected={ language }
				name={ language === "ar" ? title_ar : language === "ru" ? title_ru : title }
				tour={ link_360 }
				seo_title={seo_title}
				seo_description={seo_description}
			/>
		</div>
	)
}

export const getServerSideProps = async () =>  {

	const res = await fetch(`${endpoint}/accommodation`)
	const response = await res.json()
	let room = {}
	response.data.rooms.map( function( value,index ){

		if( value.name === "beach-villa" ){

			room = value

		}

	})
	const data = {

		amenities: room.amenities.split(","),
		amenities_ar: room.amenities_ar.split(","),
		amenities_ru: room.amenities_ru.split(","),
		bed_size: room.bed_size,
		bed_size_ar: room.bed_size_ar,
		bed_size_ru: room.bed_size_ru,
		pool_size: "",
		description: room.description,
		description: room.description,
		description_ar: room.description_ar,
		description_ru: room.description_ru,
		images: room.image.split(","),
		link_360: room.link_360,
		size: room.size,
		title: room.title,
		title_ar: room.title_ar,
		title_ru: room.title_ru,
		seo_title:"Best Beach Villas in Maldives | Beach Resorts in Maldives | Beach Resort & Hotel in Maldives",
		seo_description:"Kuda Villingili Beach Villa Resort offers complete privacy in paradise, situated on the pristine sand and immersed in the tropical lush. Lounge by the beach on the plush sunbeds, or take an aromatherapeutic bath. Book now!"
	}

  	return { props: { data } }

}

export default BeachVilla
