import React from "react"
import { isMobile } from "react-device-detect"

import RoomInner from "./accomodation/RoomInner"
const { endpoint } = require( "../variables")

const BeachVillaWithPool = ( props ) => {

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

export async function getServerSideProps() {

	const res = await fetch(`${endpoint}/accommodation`)
	const response = await res.json()
	let room = {}
	response.data.rooms.map( function( value,index ){

		if( value.name === "beach-villa-with-pool" ){

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
		pool_size: "L: 6m x W: 3m x H: 0.9m",
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
        seo_title:"Maldives Resort with Private Pool | Private Beachfront Villa with Pool | Hotels with Private Pool in Maldives",
		seo_description:"Kuda Villingili has a beachfront villa with a private pool. Relax in a bath with essential oils before stretching out on the king-sized bed with the finest Egyptian cotton & looking out at the view of the Maldivian sea. Visit us today!"
	}

  	return { props: { data } }
  	
}

export default BeachVillaWithPool
