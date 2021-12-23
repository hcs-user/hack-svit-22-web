import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            {/* HackSVIT */}
          </Heading>
          <Box as="svg">

            <path d="M6.53846 135H4.53846V137H6.53846V135ZM34.0793 135V137H36.0793V135H34.0793ZM34.0793 95.373V93.373H32.0793V95.373H34.0793ZM70.5361 95.373H72.5361V93.373H70.5361V95.373ZM70.5361 135H68.5361V137H70.5361V135ZM98.0769 135V137H100.077V135H98.0769ZM98.0769 33.5548H100.077V31.5548H98.0769V33.5548ZM70.5361 33.5548V31.5548H68.5361V33.5548H70.5361ZM70.5361 73.1818V75.1818H72.5361V73.1818H70.5361ZM34.0793 73.1818H32.0793V75.1818H34.0793V73.1818ZM34.0793 33.5548H36.0793V31.5548H34.0793V33.5548ZM6.53846 33.5548V31.5548H4.53846V33.5548H6.53846ZM6.53846 137H34.0793V133H6.53846V137ZM36.0793 135V95.373H32.0793V135H36.0793ZM34.0793 97.373H70.5361V93.373H34.0793V97.373ZM68.5361 95.373V135H72.5361V95.373H68.5361ZM70.5361 137H98.0769V133H70.5361V137ZM100.077 135V33.5548H96.0769V135H100.077ZM98.0769 31.5548H70.5361V35.5548H98.0769V31.5548ZM68.5361 33.5548V73.1818H72.5361V33.5548H68.5361ZM70.5361 71.1818H34.0793V75.1818H70.5361V71.1818ZM36.0793 73.1818V33.5548H32.0793V73.1818H36.0793ZM34.0793 31.5548H6.53846V35.5548H34.0793V31.5548ZM4.53846 33.5548V135H8.53846V33.5548H4.53846ZM137.506 135V137H138.992L139.421 135.576L137.506 135ZM143.351 115.583V113.583H141.864L141.436 115.006L143.351 115.583ZM176.836 115.583L178.751 115.006L178.322 113.583H176.836V115.583ZM182.681 135L180.766 135.576L181.194 137H182.681V135ZM212.401 135V137H215.167L214.3 134.373L212.401 135ZM178.916 33.5548L180.815 32.9279L180.362 31.5548H178.916V33.5548ZM141.27 33.5548V31.5548H139.824L139.371 32.9279L141.27 33.5548ZM107.786 135L105.886 134.373L105.019 137H107.786V135ZM149.592 94.9767L147.677 94.3989L146.899 96.9767H149.592V94.9767ZM159.697 61.4918V59.4918H158.211L157.782 60.914L159.697 61.4918ZM160.49 61.4918L162.404 60.914L161.975 59.4918H160.49V61.4918ZM170.594 94.9767V96.9767H173.287L172.509 94.3989L170.594 94.9767ZM139.421 135.576L145.266 116.159L141.436 115.006L135.591 134.424L139.421 135.576ZM143.351 117.583H176.836V113.583H143.351V117.583ZM174.921 116.159L180.766 135.576L184.596 134.424L178.751 115.006L174.921 116.159ZM182.681 137H212.401V133H182.681V137ZM214.3 134.373L180.815 32.9279L177.017 34.1817L210.502 135.627L214.3 134.373ZM178.916 31.5548H141.27V35.5548H178.916V31.5548ZM139.371 32.9279L105.886 134.373L109.685 135.627L143.17 34.1817L139.371 32.9279ZM107.786 137H137.506V133H107.786V137ZM151.507 95.5545L161.612 62.0697L157.782 60.914L147.677 94.3989L151.507 95.5545ZM159.697 63.4918H160.49V59.4918H159.697V63.4918ZM158.575 62.0697L168.68 95.5545L172.509 94.3989L162.404 60.914L158.575 62.0697ZM170.594 92.9767H149.592V96.9767H170.594V92.9767ZM312.112 71.5967V73.5967H314.293L314.105 71.4241L312.112 71.5967ZM312.112 98.5431L314.106 98.7035L314.279 96.5584L312.127 96.5432L312.112 98.5431ZM284.175 98.345L284.19 96.345L282.472 96.3329L282.201 98.029L284.175 98.345ZM284.175 71.5967L282.183 71.7681L282.34 73.5967H284.175V71.5967ZM314.105 71.4241C312.974 58.3661 307.602 47.9956 299.076 40.9081C290.571 33.8386 279.092 30.1678 265.947 30.1678V34.1678C278.361 34.1678 288.875 37.6299 296.519 43.9841C304.141 50.3202 309.071 59.6642 310.12 71.7693L314.105 71.4241ZM265.947 30.1678C251.829 30.1678 239.058 34.8804 229.812 44.101C220.557 53.3299 215.008 66.8993 215.008 84.2774H219.008C219.008 67.7744 224.257 55.2889 232.636 46.9334C241.023 38.5695 252.723 34.1678 265.947 34.1678V30.1678ZM215.008 84.2774C215.008 101.567 220.399 115.137 229.581 124.391C238.759 133.639 251.536 138.387 265.947 138.387V134.387C252.421 134.387 240.729 129.946 232.421 121.573C224.117 113.205 219.008 100.72 219.008 84.2774H215.008ZM265.947 138.387C296.771 138.387 312.64 116.918 314.106 98.7035L310.119 98.3827C308.811 114.643 294.564 134.387 265.947 134.387V138.387ZM312.127 96.5432L284.19 96.345L284.161 100.345L312.098 100.543L312.127 96.5432ZM282.201 98.029C281.571 101.961 279.895 105.007 277.361 107.082C274.819 109.163 271.237 110.413 266.541 110.413V114.413C271.951 114.413 276.492 112.963 279.895 110.177C283.305 107.385 285.392 103.397 286.15 98.661L282.201 98.029ZM266.541 110.413C260.349 110.413 255.678 108.248 252.492 104.109C249.242 99.8875 247.341 93.3546 247.341 84.2774H243.341C243.341 93.8249 245.328 101.36 249.322 106.549C253.381 111.822 259.31 114.413 266.541 114.413V110.413ZM247.341 84.2774C247.341 75.7053 249.177 69.1546 252.44 64.7957C255.642 60.5199 260.371 58.1422 266.74 58.1422V54.1422C259.239 54.1422 253.269 57.015 249.238 62.3983C245.27 67.6986 243.341 75.2155 243.341 84.2774H247.341ZM266.74 58.1422C271.639 58.1422 275.282 59.5765 277.778 61.8834C280.279 64.1946 281.821 67.5579 282.183 71.7681L286.168 71.4253C285.738 66.4222 283.861 62.0583 280.493 58.9456C277.119 55.8285 272.44 54.1422 266.74 54.1422V58.1422ZM284.175 73.5967H312.112V69.5967H284.175V73.5967ZM324.607 135H322.607V137H324.607V135ZM352.148 135V137H354.148V135H352.148ZM352.148 108.846L350.561 107.629L350.148 108.168V108.846H352.148ZM361.262 96.958L362.978 95.9304L361.466 93.4055L359.675 95.7412L361.262 96.958ZM384.048 135L382.332 136.028L382.915 137H384.048V135ZM416.938 135V137H420.541L418.636 133.942L416.938 135ZM381.868 78.7296L380.275 77.5207L379.442 78.6182L380.171 79.7875L381.868 78.7296ZM416.146 33.5548L417.739 34.7637L420.174 31.5548H416.146V33.5548ZM384.048 33.5548V31.5548H383.043L382.443 32.361L384.048 33.5548ZM353.535 74.5688V76.5688H354.54L355.14 75.7626L353.535 74.5688ZM352.148 74.5688H350.148V76.5688H352.148V74.5688ZM352.148 33.5548H354.148V31.5548H352.148V33.5548ZM324.607 33.5548V31.5548H322.607V33.5548H324.607ZM324.607 137H352.148V133H324.607V137ZM354.148 135V108.846H350.148V135H354.148ZM353.735 110.063L362.85 98.1749L359.675 95.7412L350.561 107.629L353.735 110.063ZM359.547 97.9857L382.332 136.028L385.764 133.972L362.978 95.9304L359.547 97.9857ZM384.048 137H416.938V133H384.048V137ZM418.636 133.942L383.566 77.6718L380.171 79.7875L415.241 136.058L418.636 133.942ZM383.462 79.9385L417.739 34.7637L414.553 32.3458L380.275 77.5207L383.462 79.9385ZM416.146 31.5548H384.048V35.5548H416.146V31.5548ZM382.443 32.361L351.93 73.375L355.14 75.7626L385.653 34.7486L382.443 32.361ZM353.535 72.5688H352.148V76.5688H353.535V72.5688ZM354.148 74.5688V33.5548H350.148V74.5688H354.148ZM352.148 31.5548H324.607V35.5548H352.148V31.5548ZM322.607 33.5548V135H326.607V33.5548H322.607Z" fill="#EDF2F7" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M507.576 65.2564H481.224C480.974 62.2353 479.953 59.7767 478.061 58H506.81C507.304 60.3011 507.563 62.7243 507.576 65.2564ZM427.166 58H457.002C455.844 59.2418 455.287 60.775 455.268 62.4825C455.02 67.3368 459.33 70.1603 468.939 72.1912L472.714 73H427.755C426.944 70.4151 426.529 67.575 426.538 64.4639C426.521 62.2203 426.736 60.0622 427.166 58ZM436.806 42C432.932 45.3073 430.027 49.3557 428.313 54H505.674C504.007 49.3454 501.278 45.3006 497.611 42H436.806ZM529.091 73L524.14 58H554.288L558.651 73H529.091ZM522.819 54H553.125L549.634 42H518.858L522.819 54ZM578.106 73L582.469 58H612.617L607.666 73H578.106ZM583.632 54H613.938L617.899 42H587.123L583.632 54ZM630.457 73V58H657.997V73H630.457ZM630.457 54H657.997V42H630.457V54ZM698.789 73V58H725.933V73H698.789ZM668.276 54H756.446V42H668.276V54ZM429.992 78C434.026 84.7327 441.436 89.2569 451.389 92H506.082C503.187 86.176 498.015 81.4602 490.151 78H429.992ZM530.741 78L535.362 92H564.177L560.105 78H530.741ZM576.652 78L572.58 92H601.395L606.016 78H576.652ZM630.457 78V92H657.997V78H630.457ZM698.789 78V92H725.933V78H698.789ZM474.936 98H508.193C508.696 100.238 508.947 102.6 508.963 105.082C508.958 106.077 508.915 107.049 508.835 108H480.185C480.592 107.104 480.807 106.125 480.827 105.082C480.763 102.106 479.129 99.8747 474.936 98ZM565.922 98H537.343L540.643 108H596.113L599.414 98H570.834L568.775 105.082H567.982L565.922 98ZM630.457 108V98H657.997V108H630.457ZM698.789 108V98H725.933V108H698.789ZM587.995 39H618.889L620.686 33.5548H589.579L587.995 39ZM657.997 39H630.457V33.5548H657.997V39ZM756.446 39H668.276V33.5548H756.446V39ZM548.762 39H517.868L516.071 33.5548H547.178L548.762 39ZM440.907 39H493.709C487.026 34.6173 478.146 32.1678 467.552 32.1678C457.05 32.1678 447.89 34.6278 440.907 39ZM453.03 108C451.283 105.757 450.285 102.858 450.116 99.3357H423.963C423.975 102.43 424.24 105.316 424.744 108H453.03ZM441.808 131C448.799 134.51 457.596 136.189 467.751 136.189C478.036 136.189 486.673 134.413 493.339 131H441.808ZM431.542 123C429.592 120.661 427.993 117.998 426.773 115H507.453C506.49 117.962 505.075 120.633 503.237 123H431.542ZM548.235 131L549.556 135H587.201L588.522 131H548.235ZM591.162 123H545.595L542.954 115H593.803L591.162 123ZM630.457 131V135H657.997V131H630.457ZM657.997 123H630.457V115H657.997V123ZM698.789 131V135H725.933V131H698.789ZM725.933 123H698.789V115H725.933V123Z" fill="#FF0058" />
          </Box>

          <Text color={'gray.500'}>
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              // colorScheme={'purple'}
              bg={'brand'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'purple.600',
              }}>
              Join waitlist
            </Button>
            <Button variant={'link'} colorScheme={'brand'} size={'sm'}>
              Learn more
            </Button>
            {/* <Box>
              <Icon
                as={Arrow}
                color={useColorModeValue('gray.800', 'gray.300')}
                w={71}
                position={'absolute'}
                right={-71}
                top={'10px'}
              />
              <Text
                fontSize={'lg'}
                fontFamily={'Caveat'}
                position={'absolute'}
                right={'-125px'}
                top={'-15px'}
                transform={'rotate(10deg)'}>
                Starting at $15/mo
              </Text>
            </Box> */}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});