import { Box, Flex, Spacer, Text } from '@chakra-ui/layout';

import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';

const PropertyDetails = ({ propertyDetails }) => (
    <Box maxWidth='1000px' margin='auto' p='4'>
        {photos && <ImageScrollbar data={photos} />}
    </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            propertyDetails: data,
        },
    };
}
