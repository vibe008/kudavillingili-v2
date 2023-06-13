import React, { useState } from 'react'
import { isMobile } from "react-device-detect"
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
const {
	SitemapContaier,
	HeadingContaier,
	BtoomLine,
	InnerContainer,
	HomeLink,
	Heading,
	Children,
	SubChildren,
	subContainer,
	MapsLink,
	MapsCard,
	Title,
	Cropcards


} = require("../style/Sitemap/sitemap")

const Sitemap = () => {
	const sitemaps = [
		{
			title: "HOME",
			link: "kudavillingili.com",
			id: "1"
		},
		{
			title: "accommodation",
			link: "https://kudavillingili.com/accommodation",
			id: "2"
		},
		{
			title: "dining",
			link: "https://kudavillingili.com/dining",
			id: "3"
		},
		{
			title: "experiences",
			link: "https://kudavillingili.com/experiences",
			id: "4"
		},
		{
			title: "gallery",
			link: "https://kudavillingili.com/gallery",
			id: "5"
		},
		{
			title: "offers",
			link: "https://kudavillingili.com/offers",
			id: "6"
		},
		{
			title: "news-and-media",
			link: "https://kudavillingili.com/news-and-media",
			id: "7"
		}, {
			title: "contact",
			link: "https://kudavillingili.com/contact",
			id: "8"
		}, {
			title: "water-sports",
			link: "https://kudavillingili.com/water-sports",
			id: "9"
		}, {
			title: "water-villa-with-pool",
			link: "https://kudavillingili.com/water-villa-with-pool",
			id: "10"
		}, {
			title: "sky-haven",
			link: "https://kudavillingili.com/sky-haven",
			id: "11"
		}, {
			title: "beach-villa-with-pool",
			link: "https://kudavillingili.com/beach-villa-with-pool",
			id: "12"
		}, {
			title: "deluxe-haven-with-patio",
			link: "https://kudavillingili.com/deluxe-haven-with-patio",
			id: "13"
		}, {
			title: "beach-villa",
			link: "https://kudavillingili.com/beach-villa",
			id: "14"
		}, {
			title: "water-villa",
			link: "https://kudavillingili.com/water-villa",
			id: "15"
		}, {
			title: "celeberations-offer",
			link: "https://kudavillingili.com/offer/kuda-villingili-opening-celeberations-offer",
			id: "16"
		}, {
			title: "indulgence-offer",
			link: "https://kudavillingili.com/offer/kuda-villingili-indulgence-offer",
			id: "17"
		},
	]
	const [is_mobile, UpdateState] = React.useState(false)
	const [language, updateLanguage] = React.useState("en")
	React.useEffect(() => {

		UpdateState(isMobile)
		// DETECT BROWSER LANGUAGE
		const userLanguage = navigator.language || navigator.userLanguage
		const userlanguageArray = userLanguage.split("-")

		// GET LANGUAGE FROM LOCAL STORAGE
		const storedLanguage = localStorage.getItem("language")
		if (storedLanguage !== null) {

			updateLanguage(storedLanguage)

		} else {

			if (userlanguageArray[0] === "ru")
				updateLanguage("ru")
			if (userlanguageArray[0] === "ar")
				updateLanguage("ar")

		}

	}, [])

	return (
		<div>
			<Header isMobile={is_mobile} image={"https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"} languageDetected={language} />
			<SitemapContaier>
				<HeadingContaier>
					<Heading>sitemap</Heading>
					<BtoomLine />
				</HeadingContaier>
				<InnerContainer>
					{sitemaps.map((item,index) => {
						return (
							<>
					
								<MapsCard index={index}>
                                  <Cropcards>
                                   <Title><a href={item.link}>{item.title}</a></Title>
								  </Cropcards>
								</MapsCard>
							</>
						)
					})}

				</InnerContainer>
			</SitemapContaier>
			<Footer
				isMobile={is_mobile}
				languageDetected={language}
			/>
		</div>
	)
}

export default Sitemap
