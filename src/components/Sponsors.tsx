import {
	Box,
	Flex,
	HStack,
	Img,
	Link,
	LinkBox,
	LinkOverlay,
	Text,
	VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import SPONSORS from "../data/sponsor.json";

const MotionBox = motion(Box);

export default function Sponsors() {
	return (
		<VStack alignItems='flex-start'>
			{SPONSORS.map((type) => (
				<VStack alignItems='flex-start' py='1'>
					<Text my='2' fontSize='2xl'>{type.category}</Text>
					<Flex rowGap='6' columnGap='3' flexWrap='wrap' alignItems='flex-start'>
						{type.company.map((el) => (
							<MotionBox alignItems='flex-start'>
								<LinkBox
									as={Flex}
									m='3'
									p='2'
									rounded='lg'
									userSelect='none'
								>
									<LinkOverlay target='_blank' href={el.siteUrl}>
										<Img h={el.name == "SVIT" ? '130px' : '16'} rounded='lg' src={el.iconPath} />
									</LinkOverlay>
								</LinkBox>
							</MotionBox>
						))}
					</Flex>
				</VStack>
			))
			}
		</VStack >
	);
}
