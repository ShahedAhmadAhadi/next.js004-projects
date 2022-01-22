import Link from "next/link";
import Image from "next/image";
import { Flex, Text, Box, Avatar } from "@chakra-ui/react"
import { FaBed, FaBath } from "react-icons/fa"
import { BsGridFill } from "react-icons/bs"
import { GoVerified } from "react-icons/go"
import millify from "millify";

const Property = ({ property: { converPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId } }) => {
    <Link href={`property/${externalId}`} passHref >
        {title}
    </Link>
}

export default Property
