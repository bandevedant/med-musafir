import { Image } from "../atoms/Image"
import logo from "../../assets/logo1.png"
import { Text } from "../atoms/Text"
import { FooterTexts } from "../particles/DataLists"
import { List } from "../atoms/List"
import { Link } from "react-router-dom"
import { Envelope,InstagramLogo ,Phone} from "@phosphor-icons/react"
import app from "../../assets/appdownload.png"
import { NavLinks } from "../particles/DataLists"
import { NavLink} from "react-router-dom";




const Footer = () => {
    return (
        <footer id="footer" className="w-full flex flex-col bg-white">
            <section className="w-full h-auto grid lg:grid-cols-5 md:grid-cols-3 lg:px-20 md:px-12 px-6 py-16 gap-7 md:gap-4 lg:gap-0">
                <div className="flex flex-col items-start gap-4">
                    <Image className="w-28" image={logo} alt="Logo" as="a" href="/" />
                    <Text className="text-sm text-color4" as="p">
                        {FooterTexts.underLogoText}
                    </Text>
                </div>

                <div className="flex flex-col md:items-center gap-4 md:mt-8">
                    <Text className="text-xl text-color3" as="h2">
                        {FooterTexts.quickLinks.caption}
                    </Text>
                    <ul className="flex flex-col gap-2">
                        {
                            // FooterTexts.quickLinks.links.map((link, index) => (
                            //     <List key={index} className="text-sm">
                            //         <Link to={link.url} className="text-color4 transition-all duration-300 hover:underline">{link.name}</Link>
                            //     </List>
                            // ))
                            NavLinks.map((navlink, index) => (
                                <List className="w-full text-base" key={index}>
                                    <NavLink 
                                    to={navlink.url} 
                                    onClick={(event) => {
                                        event.preventDefault();
                                        const targetId = navlink.url;
                                        const anchor = document.querySelector(targetId)
                                        if(anchor){
                                            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                        }
                                       }}
                                    className="relative inline-block overflow-hidden pt-2 pl-2 before:w-2 before:h-2 before:bg-color2 before:absolute before:top-2 before:-left-10 before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0.5 after:w-0.5 after:h-3 after:bg-color2 after:absolute after:left-1 after:-top-10 hover:after:top-3.5 after:transition-all after:duration-200 after:ease-in">{navlink.name}
                                    </NavLink>
                                </List>
                            ))
                        }
                    </ul>
                </div>

                <div className="flex flex-col md:items-center gap-4 md:mt-8">
                    <Text className="text-xl text-color3" as="h2">
                        {FooterTexts.contacts.caption}
                    </Text>
                    <ul className="flex flex-col md:ml-12 gap-2">
                        {
                            FooterTexts.contacts.links.map((link, index) => (
                                <List key={index} className="text-sm">
                                    <Link to={link.url} className="text-color4 transition-all duration-300 hover:underline">{link.name}</Link>
                                </List>
                            ))
                           
                        }
                    </ul>
                </div>

                <div className="flex flex-col lg:items-center gap-4 md:mt-8">
                    {/* <Text className="text-xl text-color3" as="h2">
                        {FooterTexts.more.caption}
                    </Text> */}
                    {/* <ul className="flex flex-col gap-2 lg:ml-10">
                        {
                            FooterTexts.more.links.map((link, index) => (
                                <List key={index} className="text-sm">
                                    <Link to={link.url} className="text-color4 transition-all duration-300 hover:underline">{link.name}</Link>
                                </List>
                            ))
                        }
                    </ul> */}
                </div>

                <div className="flex flex-col lg:items-center w-full md:mt-8 gap-4">
                    <ul className="w-full flex items-center lg:justify-center gap-4">
                        <List>
                            <Link to={"tel:7745052603"} className="text-color3 border-[1px] border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white">
                                {/* <a href="tel:7745052603" className="text-color3 border-[1px] border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white">
                                </a> */}
                                    <Phone size={15} color="currentColor" weight="fill" />
                            </Link>
                        </List>
                        <List>
                            <Link to={`https://www.instagram.com/med_musafir?igsh=aHdnbXl2cHMxanB6`} className="text-color3 border-[1px] border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white">
                                <InstagramLogo size={15} color="currentColor" weight="fill" />
                            </Link>
                        </List>
                        <List>
                            <Link to={"mailto:medmusafir28@gmail.com"} className="text-color3 border-[1px] border-color3/50 p-2.5 flex rounded-full transition-all duration-300 ease-in hover:bg-gradient-to-tr from-color1 to-color2 hover:text-white">
                                <Envelope size={15} color="currentColor" weight="fill" />
                            </Link>
                        </List>
                    </ul>

                    <Text as="p" className="text-base font-light text-color4">
                        Discover India with
                    </Text>
                    <Image image={app} className="w-28" alt="App Download" as="a" href="/" style={{"height":"48px" ,"width":"108px"}}/>
                </div>
            </section>
            <Text className="text-center bg-color4 text-white text-xs py-6 font-light">
                Copyright 2024. MedMusafir.com. All rights reserved.
            </Text>
        </footer>
    )
}

export default Footer